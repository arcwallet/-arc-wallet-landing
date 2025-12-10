import React from 'react';

export const TermsOfService: React.FC = () => (
  <div className="prose prose-invert prose-sm max-w-none">
    <p className="text-arc-text-secondary text-sm mb-6">Last Updated: December 10, 2025</p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">1. Introduction and Acceptance</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      Welcome to Arc Wallet. By using Arc Wallet, you agree to be bound by these Terms of Service. If you do not agree, you must immediately cease using the Service.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">2. Service Description</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">Core Services:</strong></p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Passkey-First Authentication (Face ID, Touch ID, PIN)</li>
      <li>Self-Custodial Wallet Management (no seed phrases)</li>
      <li>Multi-Token Support (ARC, USDC, EURC)</li>
      <li>Transaction Execution</li>
    </ul>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">Advanced Features:</strong></p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>ERC-4337 Smart Accounts</li>
      <li>Gasless Transactions (pay with USDC)</li>
      <li>Batch Operations</li>
      <li>Circle CCTP Bridge</li>
      <li>Multi-Signature Wallets</li>
      <li>Treasury Management</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">3. Self-Custodial Nature</h3>
    <div className="bg-[#a0bce4]/10 border border-[#a0bce4]/20 rounded-lg p-4 mb-4">
      <p className="text-arc-text-main font-semibold mb-2">CRITICAL: Arc Wallet is self-custodial:</p>
      <ul className="list-disc list-inside text-arc-text-secondary space-y-1">
        <li>You control your private keys</li>
        <li>We cannot access your wallet</li>
        <li>We cannot reverse transactions</li>
        <li>You bear all risk of loss</li>
      </ul>
    </div>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      If you lose access to all devices with your passkey, <strong className="text-arc-text-main">your funds may be permanently inaccessible</strong>.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">4. Eligibility</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Minimum age: <strong className="text-arc-text-main">18 years</strong></li>
      <li>Must comply with applicable laws</li>
      <li>Not available in prohibited jurisdictions</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">5. Account and Passkey Security</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">Your passkey:</p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Is stored in your device's Secure Enclave</li>
      <li>Is protected by biometric authentication</li>
      <li>Never leaves your device</li>
      <li>Cannot be extracted or exported</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">6. Transactions</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">All transactions are final and irreversible</strong></li>
      <li>Verify recipient address, amount, and network before confirming</li>
      <li>Network fees apply (or sponsored via Paymaster)</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">7. Cross-Chain Bridging (Circle CCTP)</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Bridge USDC/EURC between Arc Network and Ethereum</li>
      <li>Circle CCTP is a third-party service</li>
      <li>Arc Wallet is not responsible for Circle service failures</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">8. Multi-Signature Wallets</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Customizable approval thresholds</li>
      <li>All signers must agree to these Terms</li>
      <li>Arc Wallet cannot override multi-sig requirements</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">9. Third-Party Services</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      Integrated services: Circle CCTP, RPC Providers, Blockscout API, Paymaster Services. Arc Wallet disclaims all liability for third-party service failures.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">10. Intellectual Property</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      Arc Wallet retains all rights to trademarks, design, and proprietary components. Open source components under MIT License.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">11. Prohibited Uses</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Money laundering, terrorist financing</li>
      <li>Tax evasion, fraud, theft</li>
      <li>Distributing malware</li>
      <li>Attempting to hack the Service</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">12. Disclaimers</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES. Arc Wallet does not provide financial, investment, tax, or legal advice.
    </p>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">Cryptocurrency Risks:</strong> Volatility, total loss possible, regulatory changes, no government insurance.</p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">13. Limitation of Liability</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      <strong className="text-arc-text-main">Maximum liability: $100 USD</strong> or amount paid in past 12 months, whichever is greater.
    </p>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      Not liable for: lost profits, lost data, lost cryptocurrency, indirect damages, third-party service issues.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">14. Dispute Resolution</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Governing Law:</strong> State of Delaware, USA</li>
      <li><strong className="text-arc-text-main">Binding Arbitration</strong> via AAA</li>
      <li><strong className="text-arc-text-main">Class Action Waiver</strong> applies</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">15. Contact</h3>
    <ul className="list-none text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Support:</strong> support@arcwallet.network</li>
      <li><strong className="text-arc-text-main">Legal:</strong> legal@arcwallet.network</li>
      <li><strong className="text-arc-text-main">Security:</strong> security@arcwallet.network</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-[#a0bce4]/20">
      <p className="text-arc-text-secondary text-sm">© 2025 Arc Wallet. All rights reserved.</p>
    </div>
  </div>
);

export const PrivacyPolicy: React.FC = () => (
  <div className="prose prose-invert prose-sm max-w-none">
    <p className="text-arc-text-secondary text-sm mb-6">Last Updated: December 10, 2025</p>

    <div className="bg-[#a0bce4]/10 border border-[#a0bce4]/20 rounded-lg p-4 mb-6">
      <p className="text-arc-primary font-semibold italic">"Your privacy is not a feature—it's a fundamental right."</p>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">1. Our Commitment</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      Arc Wallet is built with a privacy-first architecture. You maintain complete control of your wallet and private keys at all times.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">2. What We Do NOT Collect</h3>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#a0bce4]/20">
            <th className="text-left py-2 text-arc-text-main">Data Type</th>
            <th className="text-left py-2 text-arc-text-main">Collected?</th>
          </tr>
        </thead>
        <tbody className="text-arc-text-secondary">
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Seed Phrases</td><td className="py-2 text-green-400 font-semibold">Never</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Private Keys</td><td className="py-2 text-green-400 font-semibold">Never</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Wallet Passwords</td><td className="py-2 text-green-400 font-semibold">Never</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Transaction History</td><td className="py-2 text-green-400 font-semibold">No</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Wallet Balances</td><td className="py-2 text-green-400 font-semibold">No</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Personal ID</td><td className="py-2 text-green-400 font-semibold">No</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Location Data</td><td className="py-2 text-green-400 font-semibold">No</td></tr>
          <tr><td className="py-2">IP Address Logs</td><td className="py-2 text-green-400 font-semibold">No</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">3. Data That Stays On Your Device</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">Passkey Credentials:</strong></p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Stored in Device Secure Enclave (iOS Keychain, Android Keystore)</li>
      <li>Accessible only via biometric authentication</li>
      <li>Cannot be extracted or exported</li>
    </ul>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">Encrypted Private Keys:</strong></p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>AES-GCM 256-bit encryption</li>
      <li>Non-extractable WebCrypto keys</li>
      <li>Zero server-side access</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">4. Optional Data Collection</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Email Verification:</strong> Email for OTP delivery (deleted after verification)</li>
      <li><strong className="text-arc-text-main">Waitlist:</strong> Email for launch notifications</li>
      <li><strong className="text-arc-text-main">Cross-Device Recovery:</strong> Public key for multi-device access</li>
      <li><strong className="text-arc-text-main">Analytics:</strong> Anonymized error logs (opt-out available)</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">5. Third-Party Services</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Circle CCTP:</strong> Transaction hash for bridge verification</li>
      <li><strong className="text-arc-text-main">RPC Providers:</strong> Transaction data (configurable)</li>
      <li><strong className="text-arc-text-main">Blockscout API:</strong> Public wallet address for balance queries</li>
      <li><strong className="text-arc-text-main">Paymaster:</strong> UserOperation data for gas sponsorship</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">6. Security Architecture</h3>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#a0bce4]/20">
            <th className="text-left py-2 text-arc-text-main">Component</th>
            <th className="text-left py-2 text-arc-text-main">Encryption</th>
          </tr>
        </thead>
        <tbody className="text-arc-text-secondary">
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Private Keys</td><td className="py-2">AES-GCM 256-bit</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Passkey Storage</td><td className="py-2">Hardware Secure Enclave</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Data in Transit</td><td className="py-2">TLS 1.3</td></tr>
          <tr><td className="py-2">Session Tokens</td><td className="py-2">httpOnly Secure Cookies</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">7. Your Rights</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Access:</strong> Request information about your data</li>
      <li><strong className="text-arc-text-main">Deletion:</strong> Request deletion at privacy@arcwallet.network</li>
      <li><strong className="text-arc-text-main">Export:</strong> Export your public wallet data</li>
      <li><strong className="text-arc-text-main">Opt-Out:</strong> Disable optional analytics in settings</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">8. GDPR & CCPA Compliance</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      We comply with GDPR (EU) and CCPA (California) requirements. We do not sell your data.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">9. Children's Privacy</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">
      Arc Wallet is not intended for users under 18 years of age.
    </p>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">10. Contact</h3>
    <ul className="list-none text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Privacy Inquiries:</strong> privacy@arcwallet.network</li>
      <li><strong className="text-arc-text-main">General Support:</strong> support@arcwallet.network</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-[#a0bce4]/20">
      <p className="text-arc-text-secondary text-sm">© 2025 Arc Wallet. All rights reserved.</p>
    </div>
  </div>
);

export const SecurityPolicy: React.FC = () => (
  <div className="prose prose-invert prose-sm max-w-none">
    <p className="text-arc-text-secondary text-sm mb-6">Last Updated: December 10, 2025</p>

    <div className="bg-[#a0bce4]/10 border border-[#a0bce4]/20 rounded-lg p-4 mb-6">
      <p className="text-arc-primary font-semibold">Security is the foundation of everything we build.</p>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">1. Security Architecture</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4">Arc Wallet implements a multi-layered security model:</p>
    <div className="bg-[#0A0F1A] border border-[#a0bce4]/20 rounded-lg p-4 mb-4 font-mono text-xs text-arc-text-secondary">
      <div className="space-y-1">
        <p>┌─────────────────────────────────────┐</p>
        <p>│ USER LAYER - Biometric Auth         │</p>
        <p>├─────────────────────────────────────┤</p>
        <p>│ PASSKEY LAYER - WebAuthn P256       │</p>
        <p>├─────────────────────────────────────┤</p>
        <p>│ ENCRYPTION LAYER - AES-GCM 256-bit  │</p>
        <p>├─────────────────────────────────────┤</p>
        <p>│ SMART CONTRACT - ERC-4337           │</p>
        <p>├─────────────────────────────────────┤</p>
        <p>│ BLOCKCHAIN - Arc Network / Ethereum │</p>
        <p>└─────────────────────────────────────┘</p>
      </div>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">2. Passkey-First Security</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">No Seed Phrases:</strong> This eliminates:</p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Phishing attacks targeting seed phrases</li>
      <li>Physical theft of written seed phrases</li>
      <li>Screenshot/clipboard malware attacks</li>
      <li>Social engineering for "recovery phrase verification"</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">3. Secure Enclave Storage</h3>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#a0bce4]/20">
            <th className="text-left py-2 text-arc-text-main">Platform</th>
            <th className="text-left py-2 text-arc-text-main">Secure Storage</th>
          </tr>
        </thead>
        <tbody className="text-arc-text-secondary">
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">iOS</td><td className="py-2">Secure Enclave (Keychain)</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Android</td><td className="py-2">StrongBox / TEE (Keystore)</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">macOS</td><td className="py-2">Secure Enclave (Keychain)</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Windows</td><td className="py-2">TPM 2.0 / Windows Hello</td></tr>
          <tr><td className="py-2">Browser</td><td className="py-2">Platform Authenticator</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">4. Cryptographic Standards</h3>
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#a0bce4]/20">
            <th className="text-left py-2 text-arc-text-main">Component</th>
            <th className="text-left py-2 text-arc-text-main">Algorithm</th>
            <th className="text-left py-2 text-arc-text-main">Key Size</th>
          </tr>
        </thead>
        <tbody className="text-arc-text-secondary">
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Private Key Encryption</td><td className="py-2">AES-GCM</td><td className="py-2">256-bit</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Key Derivation</td><td className="py-2">PBKDF2</td><td className="py-2">256-bit</td></tr>
          <tr className="border-b border-[#a0bce4]/10"><td className="py-2">Passkey Signatures</td><td className="py-2">ECDSA P256</td><td className="py-2">256-bit</td></tr>
          <tr><td className="py-2">Data in Transit</td><td className="py-2">TLS</td><td className="py-2">1.3</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">5. Smart Contract Security</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Standard:</strong> ERC-4337 Account Abstraction</li>
      <li><strong className="text-arc-text-main">Verification:</strong> On-chain P256 via RIP-7212 precompile</li>
      <li><strong className="text-arc-text-main">Deployment:</strong> CREATE2 deterministic addresses</li>
      <li><strong className="text-arc-text-main">Protection:</strong> Nonce-based replay prevention</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">6. Backend Security</h3>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>HTTPS enforced (TLS 1.3)</li>
      <li>Strict CORS origin validation</li>
      <li>Per-IP and per-user rate limiting</li>
      <li>Input validation with express-validator</li>
      <li>Helmet.js HTTP security headers</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">7. Security Best Practices</h3>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">For Users:</strong></p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Keep your device OS updated</li>
      <li>Enable automatic security updates</li>
      <li>Use strong device passcode</li>
      <li>Enable biometric authentication</li>
      <li>Always verify transaction details</li>
      <li>Beware of phishing sites</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">8. Vulnerability Reporting</h3>
    <div className="bg-[#a0bce4]/10 border border-[#a0bce4]/20 rounded-lg p-4 mb-4">
      <p className="text-arc-text-main font-semibold mb-2">Report Security Issues:</p>
      <p className="text-arc-primary">security@arcwallet.network</p>
    </div>
    <p className="text-arc-text-secondary leading-relaxed mb-4"><strong className="text-arc-text-main">Response Timeline:</strong></p>
    <ul className="list-disc list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Acknowledgment: Within 48 hours</li>
      <li>Initial Assessment: Within 7 days</li>
      <li>Resolution Target: 30-90 days</li>
    </ul>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">9. If You Suspect Compromise</h3>
    <ol className="list-decimal list-inside text-arc-text-secondary mb-4 space-y-1">
      <li>Do not make any transactions</li>
      <li>Access from a secure, trusted device</li>
      <li>Add a new backup passkey</li>
      <li>Remove the compromised passkey</li>
      <li>Transfer funds to a new wallet if necessary</li>
      <li>Contact support@arcwallet.network</li>
    </ol>

    <h3 className="text-lg font-semibold text-arc-text-main mt-8 mb-4">10. Contact</h3>
    <ul className="list-none text-arc-text-secondary mb-4 space-y-1">
      <li><strong className="text-arc-text-main">Security Team:</strong> security@arcwallet.network</li>
      <li><strong className="text-arc-text-main">General Support:</strong> support@arcwallet.network</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-[#a0bce4]/20">
      <p className="text-arc-text-secondary text-sm">© 2025 Arc Wallet. All rights reserved.</p>
    </div>
  </div>
);
