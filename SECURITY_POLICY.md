# Arc Wallet - Security Policy

**Last Updated:** December 10, 2025

**Effective Date:** December 10, 2025

---

## Our Security Philosophy

At Arc Wallet, security is not an afterthought—it's the foundation of everything we build. As a self-custodial wallet, we've designed our architecture to ensure that **you are the only one who can access your funds**.

---

## 1. Security Architecture Overview

Arc Wallet implements a multi-layered security model:

```
┌─────────────────────────────────────────────────────────┐
│                    USER LAYER                           │
│         Biometric Auth (Face ID / Touch ID / PIN)       │
├─────────────────────────────────────────────────────────┤
│                  PASSKEY LAYER                          │
│            WebAuthn P256 Signatures                     │
│         Device Secure Enclave Storage                   │
├─────────────────────────────────────────────────────────┤
│                 ENCRYPTION LAYER                        │
│              AES-GCM 256-bit Encryption                 │
│            Non-Extractable WebCrypto Keys               │
├─────────────────────────────────────────────────────────┤
│                SMART CONTRACT LAYER                     │
│           ERC-4337 Account Abstraction                  │
│         On-Chain P256 Verification (RIP-7212)           │
├─────────────────────────────────────────────────────────┤
│                 BLOCKCHAIN LAYER                        │
│               Arc Network / Ethereum                    │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Passkey-First Security Model

### 2.1 No Seed Phrases
Arc Wallet **never generates seed phrases**. This eliminates:
- Phishing attacks targeting seed phrases
- Physical theft of written seed phrases
- Screenshot/clipboard malware attacks
- Social engineering for "recovery phrase verification"

### 2.2 WebAuthn Authentication
We use the WebAuthn standard (FIDO2) for authentication:

| Feature | Implementation |
|---------|----------------|
| Standard | WebAuthn / FIDO2 |
| Algorithm | P256 (secp256r1) ECDSA |
| Storage | Device Secure Enclave |
| Verification | On-chain via RIP-7212 precompile |

### 2.3 Secure Enclave Storage
Your passkeys are stored in hardware-backed secure storage:

| Platform | Secure Storage |
|----------|----------------|
| iOS | Secure Enclave (Keychain) |
| Android | StrongBox / TEE (Keystore) |
| macOS | Secure Enclave (Keychain) |
| Windows | TPM 2.0 / Windows Hello |
| Browser | Platform Authenticator |

**Key Properties:**
- Keys are generated inside the Secure Enclave
- Keys never leave the secure hardware
- Keys cannot be exported or extracted
- Access requires biometric or PIN verification

---

## 3. Cryptographic Standards

### 3.1 Encryption Specifications

| Component | Algorithm | Key Size |
|-----------|-----------|----------|
| Private Key Encryption | AES-GCM | 256-bit |
| Key Derivation | PBKDF2 | 256-bit |
| Passkey Signatures | ECDSA P256 | 256-bit |
| Data in Transit | TLS | 1.3 |
| Session Tokens | HMAC-SHA256 | 256-bit |

### 3.2 WebCrypto Implementation
```
Private Keys → AES-GCM 256-bit Encryption → IndexedDB
                      ↑
              Non-Extractable Key
              (WebCrypto API)
                      ↑
              Passkey Authentication
              (Secure Enclave)
```

### 3.3 On-Chain Verification
- **Smart Contract:** PasskeyAccount.sol
- **Signature Verification:** P256Verifier via RIP-7212 precompile
- **Account Standard:** ERC-4337 (Account Abstraction)
- **No Trusted Third Parties:** Verification happens entirely on-chain

---

## 4. Smart Contract Security

### 4.1 Deployed Contracts

**Arc Testnet (Chain ID: 5042002):**
| Contract | Address |
|----------|---------|
| EntryPoint (v0.6) | `0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789` |
| PasskeyAccountFactory | `0x38bdac0eA9FFA6cE260370D98Fd2b89a3257A9c8` |
| P256Verifier | `0xc2b78104907F722DABAc4C69f826a522B2754De4` |
| ArcPaymaster | [Deployed] |

**Ethereum Sepolia (Chain ID: 11155111):**
| Contract | Address |
|----------|---------|
| PasskeyAccountFactory | `0x38bdac0eA9FFA6cE260370D98Fd2b89a3257A9c8` |

### 4.2 Contract Architecture
```
┌─────────────────────┐
│   PasskeyAccount    │ ← Your Smart Wallet
│   (ERC-4337)        │
├─────────────────────┤
│ - P256 Public Key   │
│ - Execute Txs       │
│ - Batch Operations  │
│ - Backup Keys       │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  P256Verifier       │ ← On-Chain Signature Check
│  (RIP-7212)         │
└─────────────────────┘
          │
          ▼
┌─────────────────────┐
│   EntryPoint        │ ← ERC-4337 Standard
│   (v0.6)            │
└─────────────────────┘
```

### 4.3 Security Features
- **CREATE2 Deployment:** Deterministic contract addresses
- **Signature Replay Protection:** Nonce-based
- **Gas Limit Controls:** Prevent griefing attacks
- **Upgrade Safety:** Immutable core logic

### 4.4 Audit Status
- Smart contracts should undergo security audits before mainnet deployment
- Testnet contracts are for testing purposes
- Audit reports will be published at: `SECURITY_AUDIT_REPORT.md`

---

## 5. Backend Security

### 5.1 API Security

| Measure | Implementation |
|---------|----------------|
| HTTPS | Enforced (TLS 1.3) |
| CORS | Strict origin validation |
| Rate Limiting | Per-IP and per-user limits |
| Input Validation | express-validator |
| SQL Injection | Parameterized queries (SQLite) |
| XSS Prevention | Output encoding |

### 5.2 HTTP Security Headers (Helmet.js)
```
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
Referrer-Policy: strict-origin-when-cross-origin
```

### 5.3 Authentication Flow
```
1. User initiates login
2. Server generates WebAuthn challenge
3. Device signs challenge with Secure Enclave
4. Server verifies P256 signature
5. Session token issued (httpOnly, Secure, SameSite)
6. Token expires after 15 minutes of inactivity
```

### 5.4 Zero Server-Side Key Access
- Private keys are **never** transmitted to our servers
- Transaction signing happens **locally** on your device
- We cannot access, recover, or control your funds

---

## 6. Network Security

### 6.1 RPC Communication
| Aspect | Implementation |
|--------|----------------|
| Protocol | HTTPS only |
| Provider | Configurable (default: Arc RPC) |
| Fallback | Multiple RPC endpoints |
| Validation | Response integrity checks |

### 6.2 Cross-Chain Bridge (Circle CCTP)
- Native Circle integration (not third-party wrapper)
- Message attestation verification
- Transaction hash validation
- Separate security domain

---

## 7. Multi-Signature Security

### 7.1 Multi-Sig Architecture
```
┌─────────────────────────────────────────┐
│         ArcMultiSigWallet               │
├─────────────────────────────────────────┤
│ Signers: [Address1, Address2, Address3] │
│ Threshold: 2 of 3                       │
│ Daily Limit: Configurable               │
├─────────────────────────────────────────┤
│ propose() → approve() → execute()       │
└─────────────────────────────────────────┘
```

### 7.2 Multi-Sig Security Features
- Customizable approval thresholds (M of N)
- Daily spending limits
- Transaction proposal review period
- Signer management controls
- Treasury protection mechanisms

---

## 8. Recovery Mechanisms

### 8.1 Multi-Device Recovery
If you lose your primary device:
1. Access wallet from any synced device (iCloud Keychain / Google Password Manager)
2. Passkey automatically available on synced devices
3. No recovery phrases needed
4. No support tickets required

### 8.2 Backup Passkey (On-Chain)
- Add additional passkeys to your smart account
- Backup keys stored on-chain in your PasskeyAccount
- Remove compromised keys without losing access

### 8.3 What We Cannot Do
Arc Wallet **cannot**:
- Reset your passkey
- Recover your private keys
- Access your funds
- Reverse transactions
- Override multi-sig requirements

---

## 9. Security Best Practices for Users

### 9.1 Device Security
- [ ] Keep your device OS updated
- [ ] Enable automatic security updates
- [ ] Use strong device passcode (6+ digits or alphanumeric)
- [ ] Enable biometric authentication
- [ ] Don't jailbreak/root your device

### 9.2 Passkey Security
- [ ] Enable passkey sync only on trusted devices
- [ ] Remove old devices from iCloud/Google account
- [ ] Use unique Apple ID / Google account
- [ ] Enable 2FA on your Apple ID / Google account

### 9.3 Transaction Security
- [ ] Always verify recipient address
- [ ] Double-check transaction amounts
- [ ] Review network selection (Arc Network vs Ethereum)
- [ ] Be cautious of dApp permissions
- [ ] Don't sign transactions you don't understand

### 9.4 General Security
- [ ] Don't share your screen during transactions
- [ ] Beware of phishing sites (always check URL)
- [ ] Don't click links in unsolicited messages
- [ ] Arc Wallet will never ask for your passkey or keys

---

## 10. Vulnerability Reporting

### 10.1 Responsible Disclosure
If you discover a security vulnerability, please report it responsibly:

**Email:** security@arcwallet.network

**Do NOT:**
- Publicly disclose the vulnerability
- Exploit the vulnerability
- Access other users' data

### 10.2 What to Include
Please provide:
- Vulnerability type and severity
- Affected component (app, smart contract, backend)
- Steps to reproduce
- Proof-of-concept (if applicable)
- Impact assessment
- Your contact information

### 10.3 Response Timeline
| Stage | Timeframe |
|-------|-----------|
| Acknowledgment | Within 48 hours |
| Initial Assessment | Within 7 days |
| Status Update | Every 7 days |
| Resolution Target | 30-90 days (severity dependent) |

### 10.4 Recognition
Valid vulnerability reporters may receive:
- Acknowledgment in security advisories
- Bug bounty rewards (when program is active)
- Direct communication on resolution
- Credit in release notes (with permission)

---

## 11. Supported Versions

| Version | Security Support |
|---------|------------------|
| 1.x.x | ✅ Active support |
| 0.x.x | ❌ No longer supported |

Always use the latest version of Arc Wallet for the best security.

---

## 12. Incident Response

### 12.1 Our Commitment
In the event of a security incident, we will:
1. Investigate immediately
2. Contain the threat
3. Notify affected users promptly
4. Provide remediation guidance
5. Publish post-mortem (when appropriate)

### 12.2 User Notification
Security incidents will be communicated via:
- In-app notifications
- Email (if provided)
- Twitter [@arcwalletapp](https://x.com/arcwalletapp)
- Status page updates

### 12.3 What You Should Do
If you suspect your wallet is compromised:
1. **Do not** make any transactions
2. Access from a secure, trusted device
3. Add a new backup passkey
4. Remove the compromised passkey
5. Transfer funds to a new wallet if necessary
6. Contact support@arcwallet.network

---

## 13. Third-Party Security

### 13.1 Dependencies
We carefully vet all third-party dependencies:
- Regular dependency audits
- Automated vulnerability scanning
- Minimal dependency footprint
- Reputable, maintained libraries only

### 13.2 Key Dependencies
| Library | Purpose | Security |
|---------|---------|----------|
| @simplewebauthn | WebAuthn implementation | Audited |
| ethers.js | Blockchain interaction | Widely used, audited |
| Helmet.js | HTTP security | Industry standard |
| express-validator | Input validation | Maintained |

---

## 14. Compliance

### 14.1 Security Standards
Arc Wallet follows industry security standards:
- OWASP Top 10 mitigation
- FIDO2/WebAuthn standards
- ERC-4337 specification
- Secure coding practices

### 14.2 Regular Reviews
- Code reviews for all changes
- Security-focused PR reviews
- Periodic penetration testing
- Smart contract audits

---

## 15. Contact

### Security Team
| Purpose | Contact |
|---------|---------|
| Vulnerability Reports | security@arcwallet.network |
| Security Questions | security@arcwallet.network |
| General Support | support@arcwallet.network |

### PGP Key
For encrypted communications, request our PGP public key at security@arcwallet.network.

---

## 16. Security Summary

| Aspect | Arc Wallet Implementation |
|--------|---------------------------|
| **Authentication** | Passkey (WebAuthn P256) |
| **Key Storage** | Device Secure Enclave |
| **Encryption** | AES-GCM 256-bit |
| **Seed Phrases** | None (eliminated) |
| **Server Key Access** | Zero |
| **On-Chain Verification** | RIP-7212 P256 precompile |
| **Smart Contracts** | ERC-4337, Audited |
| **Transport Security** | TLS 1.3 |
| **Recovery** | Multi-device passkey sync |

---

**Arc Wallet Security Team**

*Your security is our priority.*

---

© 2025 Arc Wallet. All rights reserved.
