# Arc Wallet - Terms of Service

**Last Updated:** December 10, 2025

**Effective Date:** December 10, 2025

---

## 1. Introduction and Acceptance

Welcome to Arc Wallet ("Service," "Platform," "we," "us," or "our"). Arc Wallet is a self-custodial Web3 wallet application accessible at [app.arcwallet.network](https://app.arcwallet.network) and through our associated services.

By accessing, downloading, installing, or using Arc Wallet, you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must immediately cease using the Service.

These Terms constitute a legally binding agreement between you and Arc Wallet. We reserve the right to modify these Terms at any time. Continued use of the Service after any modifications constitutes acceptance of the updated Terms.

---

## 2. Service Description

Arc Wallet provides the following services and features:

### 2.1 Core Wallet Services
- **Passkey-First Authentication:** Biometric authentication using Face ID, Touch ID, or device PIN via WebAuthn P256 signatures
- **Self-Custodial Wallet Management:** Creation and management of Ethereum-compatible wallets without seed phrases
- **Multi-Token Support:** Support for ARC, USDC, and EURC tokens on Arc Network
- **Transaction Execution:** Sending, receiving, and managing digital assets

### 2.2 Advanced Features
- **ERC-4337 Smart Accounts:** Account abstraction technology for enhanced functionality
- **Gasless Transactions:** Pay network fees with USDC through our Paymaster service
- **Batch Operations:** Execute multiple transactions in a single operation
- **Circle CCTP Bridge:** Cross-chain transfers between Arc Network and Ethereum
- **Multi-Signature Wallets:** Shared wallet functionality for teams and organizations
- **Treasury Management:** Daily spending limits and approval workflows

### 2.3 Security Features
- **Device-Level Security:** Keys stored in your device's Secure Enclave
- **On-Chain Verification:** P256 cryptographic signatures verified via RIP-7212 precompile
- **Multi-Device Recovery:** Access your wallet from synced devices via iCloud Keychain or Google Password Manager
- **AES-256-GCM Encryption:** Military-grade encryption for sensitive data

---

## 3. Self-Custodial Nature and User Responsibility

### 3.1 Your Keys, Your Responsibility

**CRITICAL:** Arc Wallet is a **self-custodial** wallet. This means:

- **You control your private keys.** Your cryptographic keys are generated and stored exclusively on your device's Secure Enclave.
- **We cannot access your wallet.** Arc Wallet has no ability to access, recover, or control your private keys or funds.
- **We cannot reverse transactions.** Once a transaction is broadcast to the blockchain, it is irreversible. Arc Wallet cannot cancel, reverse, or modify any transaction.
- **You bear all risk of loss.** You are solely responsible for maintaining the security of your devices and passkeys.

### 3.2 No Recovery by Arc Wallet

If you lose access to all devices with your passkey, **your funds may be permanently inaccessible**. Arc Wallet:
- Does not store seed phrases (we never generate them)
- Cannot reset your passkey
- Cannot recover your wallet
- Cannot retrieve lost or stolen funds

### 3.3 User Obligations

You agree to:
- Maintain the security of your devices and passkeys
- Verify all transaction details (recipient address, amount, network) before confirmation
- Keep your devices updated with the latest security patches
- Not share your passkey authentication with others
- Use the Service in compliance with all applicable laws

---

## 4. Eligibility

### 4.1 Age Requirement
You must be at least **18 years old** to use Arc Wallet. By using the Service, you represent and warrant that you meet this age requirement.

### 4.2 Legal Compliance
You must comply with all applicable laws, regulations, and sanctions in your jurisdiction. You represent that:
- You are not located in, or a resident of, any jurisdiction where cryptocurrency transactions are prohibited
- You are not subject to economic sanctions or listed on any prohibited parties list
- Your use of the Service does not violate any law applicable to you

### 4.3 Prohibited Jurisdictions
Arc Wallet may not be available in certain jurisdictions. We reserve the right to restrict access to users from jurisdictions where the Service would be illegal or where we cannot comply with local regulations.

---

## 5. Account and Passkey Security

### 5.1 Passkey Authentication
Arc Wallet uses WebAuthn passkey authentication. Your passkey:
- Is stored in your device's Secure Enclave (iOS Keychain, Android Keystore, or browser credential manager)
- Is protected by biometric authentication (Face ID, Touch ID) or device PIN
- Never leaves your device
- Cannot be extracted or exported

### 5.2 Email Verification
Optional email verification via one-time code (OTP) is provided through Circle for enhanced security. We store minimal data required for this service.

### 5.3 Multi-Device Access
If you enable passkey sync through iCloud Keychain or Google Password Manager:
- Your passkey may be accessible across multiple synced devices
- You are responsible for the security of all synced devices
- Compromising one synced device may compromise your wallet

### 5.4 Device Security
The security of your wallet depends on the security of your device. If your device is:
- Lost or stolen
- Compromised by malware
- Accessed by unauthorized persons

**Your wallet and funds may be at risk.** Arc Wallet is not responsible for losses resulting from device compromise.

---

## 6. Transactions

### 6.1 Transaction Verification
Before confirming any transaction, you must:
- Verify the recipient wallet address is correct
- Confirm the transaction amount
- Review the network (Arc Network, Ethereum, etc.)
- Understand any applicable fees

**All transactions are final and irreversible once broadcast to the blockchain.**

### 6.2 Network Fees
Blockchain transactions require network fees ("gas"):
- **Standard Transactions:** Network fees are paid in the native token
- **Gasless Transactions:** Through our Paymaster service, fees may be paid in USDC or sponsored
- **Cross-Chain Bridging:** Additional fees may apply for Circle CCTP transfers

### 6.3 Transaction Processing
Arc Wallet:
- Submits your signed transactions to the blockchain via RPC providers
- Does not guarantee transaction confirmation times
- Is not responsible for failed transactions due to network congestion, insufficient fees, or blockchain issues

### 6.4 Smart Contract Interactions
When interacting with smart contracts through Arc Wallet:
- You are responsible for understanding the contract's functionality
- Arc Wallet does not audit or verify third-party smart contracts
- Interactions with malicious contracts may result in loss of funds

---

## 7. Cross-Chain Bridging (Circle CCTP)

### 7.1 Bridge Service
Arc Wallet integrates Circle's Cross-Chain Transfer Protocol (CCTP) for USDC and EURC transfers between Arc Network and Ethereum.

### 7.2 Bridge Risks
You acknowledge that cross-chain bridging involves additional risks:
- Delays in transaction finality
- Potential for stuck transactions
- Dependency on Circle's infrastructure
- Smart contract risks

### 7.3 Third-Party Service
Circle CCTP is a third-party service. Arc Wallet:
- Does not control Circle's infrastructure
- Is not responsible for Circle service outages or failures
- Cannot reverse or modify bridge transactions

---

## 8. Multi-Signature Wallets

### 8.1 Multi-Sig Features
Arc Wallet offers multi-signature functionality for teams and organizations, including:
- Customizable approval thresholds
- Multiple signers per wallet
- Treasury management controls
- Daily spending limits

### 8.2 Multi-Sig Responsibilities
When using multi-signature wallets:
- All signers must agree to these Terms
- Disputes between signers are not the responsibility of Arc Wallet
- Loss of signer access may result in locked funds
- Arc Wallet cannot override multi-sig requirements

---

## 9. Third-Party Services and Integrations

### 9.1 Third-Party Dependencies
Arc Wallet integrates with third-party services including:
- **Circle CCTP:** Cross-chain bridging
- **RPC Providers:** Blockchain communication
- **Blockscout API:** Balance and transaction data
- **Paymaster Services:** Gas sponsorship

### 9.2 Third-Party Terms
Your use of third-party services is subject to their respective terms and privacy policies. Arc Wallet:
- Does not control third-party services
- Is not responsible for third-party service availability or performance
- Disclaims all liability for third-party service failures

### 9.3 No Endorsement
Integration with third-party services does not constitute endorsement. You use third-party services at your own risk.

---

## 10. Intellectual Property

### 10.1 Arc Wallet Rights
Arc Wallet and its licensors retain all rights, title, and interest in:
- The Arc Wallet name, logo, and trademarks
- The Service's design, user interface, and user experience
- Proprietary components and trade secrets

### 10.2 Open Source
Certain components of Arc Wallet are open source and available on GitHub. Open source components are licensed under their respective licenses (MIT License where applicable).

### 10.3 User License
Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes.

### 10.4 Restrictions
You may not:
- Copy, modify, or distribute the Service except as permitted
- Reverse engineer proprietary components
- Use the Arc Wallet name or trademarks without authorization
- Create derivative works for commercial purposes without permission

---

## 11. Prohibited Uses

You agree not to use Arc Wallet for:

### 11.1 Illegal Activities
- Money laundering or terrorist financing
- Tax evasion
- Fraud or theft
- Any activity prohibited by applicable law

### 11.2 Harmful Activities
- Distributing malware or viruses
- Attempting to hack or disrupt the Service
- Interfering with other users
- Exploiting vulnerabilities (report to security@arcwallet.network instead)

### 11.3 Circumvention
- Bypassing access restrictions
- Using VPNs to circumvent geographic restrictions
- Creating multiple accounts to evade bans

---

## 12. Disclaimers

### 12.1 "As Is" Service
THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
- MERCHANTABILITY
- FITNESS FOR A PARTICULAR PURPOSE
- NON-INFRINGEMENT
- ACCURACY OR COMPLETENESS

### 12.2 No Financial Advice
Arc Wallet does not provide:
- Financial advice
- Investment advice
- Tax advice
- Legal advice

You should consult qualified professionals for such advice.

### 12.3 Cryptocurrency Risks
You acknowledge that cryptocurrency involves significant risks including:
- **Volatility:** Cryptocurrency values can fluctuate dramatically
- **Total Loss:** You may lose all of your funds
- **Regulatory Risk:** Laws and regulations may change
- **Technology Risk:** Blockchain technology may have undiscovered vulnerabilities
- **No Insurance:** Cryptocurrency is not insured by any government agency

### 12.4 Security Disclaimer
While we implement robust security measures (AES-256-GCM encryption, WebAuthn, Secure Enclave), **no system is 100% secure**. We do not guarantee that the Service will be:
- Uninterrupted
- Error-free
- Free from vulnerabilities
- Completely secure

---

## 13. Limitation of Liability

### 13.1 Liability Cap
TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARC WALLET'S TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED **ONE HUNDRED US DOLLARS ($100 USD)** OR THE AMOUNT YOU PAID TO ARC WALLET IN THE PAST 12 MONTHS, WHICHEVER IS GREATER.

### 13.2 Exclusion of Damages
ARC WALLET SHALL NOT BE LIABLE FOR:
- Lost profits or revenue
- Lost data
- Lost cryptocurrency or digital assets
- Indirect, incidental, special, consequential, or punitive damages
- Damages arising from third-party services
- Damages from unauthorized access to your wallet
- Damages from transaction errors you made

### 13.3 Basis of the Bargain
You acknowledge that Arc Wallet would not provide the Service without these limitations, and these limitations are an essential part of the agreement.

---

## 14. Indemnification

You agree to indemnify, defend, and hold harmless Arc Wallet and its officers, directors, employees, agents, and affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
- Your use of the Service
- Your violation of these Terms
- Your violation of any third-party rights
- Your violation of applicable laws
- Transactions you conduct through the Service

---

## 15. Dispute Resolution

### 15.1 Governing Law
These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.

### 15.2 Binding Arbitration
Any dispute arising from these Terms or your use of the Service shall be resolved through **binding arbitration** administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules.

### 15.3 Class Action Waiver
**YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.** All disputes must be brought in your individual capacity.

### 15.4 Exceptions
The following disputes are not subject to arbitration:
- Claims for injunctive relief
- Intellectual property disputes
- Small claims court matters

### 15.5 Informal Resolution
Before initiating arbitration, you agree to contact us at legal@arcwallet.network to attempt informal resolution for at least 30 days.

---

## 16. Termination

### 16.1 Your Right to Terminate
You may stop using the Service at any time. Your wallet and funds remain accessible on your device even after termination.

### 16.2 Our Right to Terminate
We may suspend or terminate your access to the Service if:
- You violate these Terms
- We are required to do so by law
- We discontinue the Service

### 16.3 Effect of Termination
Upon termination:
- Your license to use the Service ends
- Optional backend services may become unavailable
- Your self-custodial wallet remains on your device
- These Terms survive as applicable to past use

---

## 17. Modifications to the Service

### 17.1 Changes
We reserve the right to:
- Modify or discontinue features
- Update the Service
- Change pricing (if applicable)
- Add or remove supported tokens or networks

### 17.2 Notice
We will make reasonable efforts to notify users of material changes through the Service or our website.

---

## 18. Privacy

Your privacy is important to us. Please review our [Privacy Policy](https://www.arcwallet.network/privacy) for information on how we collect, use, and protect your data.

Key privacy principles:
- We do not store your private keys
- We do not collect seed phrases (we never generate them)
- Minimal data collection for self-custodial operations
- Your passkeys remain on your device

---

## 19. Contact Information

For questions, concerns, or support:

- **General Support:** support@arcwallet.network
- **Legal Inquiries:** legal@arcwallet.network
- **Security Issues:** security@arcwallet.network
- **Privacy Concerns:** privacy@arcwallet.network

**Social Media:**
- Twitter: [@arcwalletapp](https://x.com/arcwalletapp)
- GitHub: [github.com/arcwallet](https://github.com/arcwallet)
- LinkedIn: [linkedin.com/company/arcwallet](https://linkedin.com/company/arcwallet)

---

## 20. Miscellaneous

### 20.1 Entire Agreement
These Terms, together with our Privacy Policy and any other referenced policies, constitute the entire agreement between you and Arc Wallet.

### 20.2 Severability
If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.

### 20.3 Waiver
Our failure to enforce any right or provision does not constitute a waiver of that right or provision.

### 20.4 Assignment
You may not assign these Terms. We may assign these Terms without restriction.

### 20.5 Force Majeure
Arc Wallet is not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, pandemics, or infrastructure failures.

### 20.6 Language
These Terms are written in English. Any translations are for convenience only, and the English version prevails in case of conflict.

---

## 21. Acknowledgment

BY USING ARC WALLET, YOU ACKNOWLEDGE THAT:

1. You have read and understood these Terms of Service
2. You understand the self-custodial nature of the wallet and accept full responsibility for your funds
3. You understand the risks of cryptocurrency and blockchain technology
4. You meet the eligibility requirements
5. You agree to be bound by these Terms

---

**Arc Wallet Team**

*Privacy You Control*

---

© 2025 Arc Wallet. All rights reserved.
