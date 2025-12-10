# Arc Wallet - Privacy Policy

**Last Updated:** December 10, 2025

**Effective Date:** December 10, 2025

---

## Our Commitment

At Arc Wallet, we believe **your privacy is not a feature—it's a fundamental right**. We've built a self-custodial wallet that minimizes data collection while maximizing your control over your digital assets.

---

## 1. Introduction

This Privacy Policy explains how Arc Wallet ("we," "us," or "our") collects, uses, and protects information when you use our self-custodial Web3 wallet application at [app.arcwallet.network](https://app.arcwallet.network) and related services.

Arc Wallet is designed with a **privacy-first architecture**. You maintain complete control of your wallet and private keys at all times.

---

## 2. What We Do NOT Collect

Arc Wallet explicitly **does not** collect, store, or have access to:

| Data Type | Collected? |
|-----------|------------|
| Seed Phrases | **Never** (we don't generate them) |
| Private Keys | **Never** |
| Wallet Passwords | **Never** |
| Transaction History | **No** (publicly on blockchain) |
| Wallet Balances | **No** |
| Personal Identification (ID, SSN) | **No** |
| Browsing History | **No** |
| Location Data | **No** |
| IP Address Logs | **No** |
| Device Identifiers | **No** |

---

## 3. Data That Stays On Your Device

The following data is stored **locally on your device only** and is never transmitted to our servers:

### 3.1 Passkey Credentials
- **What:** WebAuthn credentials for wallet authentication
- **Where:** Device Secure Enclave (iOS Keychain, Android Keystore, or browser credential manager)
- **Protection:** Accessible only via biometric authentication (Face ID, Touch ID) or device PIN
- **Export:** Cannot be extracted or exported

### 3.2 Encrypted Private Keys
- **What:** Ethereum-compatible private keys for transaction signing
- **Where:** Browser IndexedDB with AES-GCM 256-bit encryption
- **Protection:** Non-extractable WebCrypto keys; requires passkey authentication
- **Server Access:** Zero server-side key access

### 3.3 Wallet Metadata
- **What:** Public wallet address, creation date, public key
- **Where:** Local IndexedDB storage
- **Nature:** This is public blockchain information

### 3.4 User Preferences
- **What:** App settings, theme preferences, address book
- **Where:** Local device storage
- **Sync:** Not synced to any server

---

## 4. Optional Data Collection

If you choose to enable certain features, we may collect minimal data:

### 4.1 Email Verification (Optional)
If you use email OTP verification:
- **Collected:** Email address, verification timestamp
- **Purpose:** One-time code delivery for enhanced security
- **Provider:** Circle (subject to their privacy policy)
- **Retention:** Minimal; deleted after verification

### 4.2 Waitlist Registration
If you join our waitlist:
- **Collected:** Email address
- **Purpose:** Launch notifications
- **Storage:** Supabase database
- **Retention:** Until you unsubscribe or we launch

### 4.3 Cross-Device Recovery (Optional)
If you enable passkey sync:
- **Collected:** Public key, user identifier, registration timestamp
- **Purpose:** Enable wallet access from multiple devices
- **Storage:** Encrypted on our backend
- **Control:** You can disable anytime

### 4.4 Analytics (Optional, If Enabled)
- **Collected:** SDK version, anonymized error logs, RPC interaction counts
- **Purpose:** Service improvement and bug fixes
- **Identifiers:** No personal identifiers attached
- **Opt-out:** Available in settings

---

## 5. Third-Party Services

Arc Wallet integrates with third-party services. When you use these features, data may be shared:

### 5.1 Circle CCTP (Cross-Chain Bridge)
- **Shared:** Transaction hash, message hash
- **Purpose:** Cross-chain transfer verification
- **Privacy:** Circle's privacy policy applies

### 5.2 RPC Providers
- **Shared:** Transaction data, wallet addresses (public)
- **Purpose:** Blockchain communication
- **Note:** You can configure your own RPC provider
- **Default:** Arc Network RPC

### 5.3 Blockscout API
- **Shared:** Wallet address (public)
- **Purpose:** Balance queries, transaction history display
- **Nature:** Queries publicly available blockchain data

### 5.4 Paymaster Services
- **Shared:** UserOperation data
- **Purpose:** Gas sponsorship for gasless transactions
- **Scope:** Transaction execution only

---

## 6. Security Architecture

We implement robust security measures to protect your data:

### 6.1 Encryption Standards
| Component | Encryption |
|-----------|------------|
| Private Keys | AES-GCM 256-bit |
| Passkey Storage | Hardware Secure Enclave |
| Data in Transit | TLS 1.3 |
| Session Tokens | httpOnly Secure Cookies |

### 6.2 Technical Safeguards
- **WebCrypto API:** Non-extractable cryptographic keys
- **Hardware Security:** Device Secure Enclave integration
- **Browser Isolation:** Sandboxed execution environment
- **P256 Signatures:** On-chain verification via RIP-7212

### 6.3 Backend Security (Optional Services)
- **Helmet.js:** HTTP security headers
- **CSRF Protection:** Token-based validation
- **Rate Limiting:** Abuse prevention
- **Input Validation:** express-validator sanitization

---

## 7. Your Rights

You have the following rights regarding your data:

### 7.1 Access
Request information about what data we hold (minimal for self-custodial users).

### 7.2 Deletion
- **Local Data:** Clear through your browser/device settings
- **Backend Data:** Request deletion at privacy@arcwallet.network
- **Response Time:** Within 30 days

### 7.3 Export
Export your public wallet data. Private keys can be accessed locally through the app.

### 7.4 Opt-Out
- Disable optional analytics in settings
- Use without email verification
- Configure custom RPC providers

### 7.5 Correction
Update any incorrect information through the app or by contacting us.

---

## 8. Data Retention

| Data Type | Retention Period |
|-----------|------------------|
| Local Device Data | Until you delete it |
| Waitlist Email | Until launch or unsubscribe |
| Email Verification | Deleted after verification |
| Analytics (if enabled) | 90 days, anonymized |
| Cross-Device Recovery | Until you request deletion |

---

## 9. International Data Transfers

### 9.1 Processing Location
If you use optional backend services, data may be processed in the United States.

### 9.2 GDPR Compliance (EU Users)
For EU users, we comply with GDPR requirements:
- **Legal Basis:** Consent and legitimate interest
- **Data Minimization:** We collect only what's necessary
- **Right to Erasure:** Request deletion anytime
- **Data Portability:** Export your data

### 9.3 CCPA Compliance (California Users)
California residents have additional rights:
- Right to know what data we collect
- Right to delete personal information
- Right to opt-out of data sales (we don't sell data)
- Right to non-discrimination

---

## 10. Children's Privacy

Arc Wallet is **not intended for users under 18 years of age**. We do not knowingly collect information from children. If you believe a child has provided us with data, contact us immediately at privacy@arcwallet.network.

---

## 11. Cookies and Tracking

### 11.1 Essential Cookies
We use minimal essential cookies for:
- Session management (httpOnly, Secure)
- CSRF protection

### 11.2 No Tracking Cookies
We do **not** use:
- Advertising cookies
- Third-party tracking
- Cross-site tracking
- Fingerprinting

### 11.3 Local Storage
We use browser localStorage/IndexedDB for:
- Encrypted wallet data
- User preferences
- App state

---

## 12. Open Source Transparency

Arc Wallet is committed to transparency:

- **Code Review:** Our code is available on [GitHub](https://github.com/arcwallet)
- **Audits:** Smart contracts undergo security audits
- **Documentation:** Technical architecture publicly documented

You can verify our privacy claims by reviewing our source code.

---

## 13. Changes to This Policy

We may update this Privacy Policy periodically. Changes will be:
- Posted on this page with updated date
- Announced through the app for material changes
- Effective immediately upon posting

Continued use after changes constitutes acceptance.

---

## 14. Contact Us

For privacy-related questions or requests:

| Purpose | Contact |
|---------|---------|
| Privacy Inquiries | privacy@arcwallet.network |
| Data Deletion Requests | privacy@arcwallet.network |
| General Support | support@arcwallet.network |
| Security Issues | security@arcwallet.network |

**Response Time:** We aim to respond within 48 hours for privacy requests.

**Mailing Address:**
Arc Wallet
[Address to be added]

**Social Media:**
- Twitter: [@arcwalletapp](https://x.com/arcwalletapp)
- GitHub: [github.com/arcwallet](https://github.com/arcwallet)

---

## 15. Summary

| Aspect | Arc Wallet Approach |
|--------|---------------------|
| Private Keys | Never leave your device |
| Seed Phrases | Never generated |
| Transaction Data | Not collected (public on blockchain) |
| Personal Info | Minimal to none |
| Data Sales | Never |
| Third-Party Tracking | None |
| User Control | Maximum |

---

**Arc Wallet**

*Privacy You Control*

---

© 2025 Arc Wallet. All rights reserved.
