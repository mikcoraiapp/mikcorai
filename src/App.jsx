import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <header className="flex justify-between items-center px-6 md:px-12 py-6">
        <Link to="/" className="text-xl font-bold tracking-tight">mikcorai</Link>
        <nav className="flex items-center gap-6">
          <Link to="/privacy" className="text-sm text-zinc-400 hover:text-white">Privacy</Link>
          <Link to="/terms" className="text-sm text-zinc-400 hover:text-white">Terms</Link>
          <span className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm">support@mikcorai.com</span>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 md:px-12 py-8 border-t border-zinc-900 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} mikcorai. All rights reserved.</div>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          <span>support@mikcorai.com</span>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div className="px-6 md:px-12">
      <section className="py-24 md:py-36 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">The AI workforce<br/>for modern businesses.</h1>
        <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl">mikcorai deploys autonomous AI agents for WhatsApp, voice, and web — to automate sales, support, and operations.</p>
        <div className="mt-10 flex gap-4">
          <span className="bg-white text-black px-7 py-3 rounded-full font-semibold text-sm">support@mikcorai.com</span>
          <Link to="/privacy" className="border border-zinc-800 px-7 py-3 rounded-full font-semibold text-sm">View Privacy</Link>
        </div>
      </section>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-zinc-300 leading-relaxed">
      <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-zinc-500 mb-10">Last Updated: October 16, 2026 | Effective for mikcorai.com, app.mikcorai.com, and WhatsApp Business services</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Who We Are</h2>
      <p>mikcorai ("we", "us", "our") operates at mikcorai.com and provides AI agent platform services. Contact: support@mikcorai.com. Data Controller: mikcorai.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Data We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Account Information:</strong> name, email, company name when you sign up.</li>
        <li><strong>Business Data:</strong> content you provide to train AI agents, integrations you connect.</li>
        <li><strong>WhatsApp Business Data (Required by Meta):</strong> If you contact us or our clients via WhatsApp, we collect your phone number, WhatsApp ID, profile name, message content, timestamps, and delivery status to provide customer support, sales automation, and AI agent responses. This data is processed via Meta's WhatsApp Business API.</li>
        <li><strong>Usage Data:</strong> IP address, device, browser, pages visited, via cookies and similar tech.</li>
        <li><strong>Communication Data:</strong> Emails and support tickets to support@mikcorai.com</li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. How We Use Data</h2>
      <p>To provide and improve our AI services, to respond to inquiries via WhatsApp and email, to process transactions, to send service updates, to comply with law. We do not sell your personal data. We do not sell WhatsApp data to third parties.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. WhatsApp Business API Compliance</h2>
      <p>We use WhatsApp Business Platform provided by Meta. Messages are encrypted in transit. We retain WhatsApp conversation history for up to 12 months for support and training purposes unless you request deletion. We do not use WhatsApp data for unsoliced marketing. You can opt-out of WhatsApp communications at any time by sending "STOP" or emailing support@mikcorai.com.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Sharing</h2>
      <p>We share data only with service providers essential to operations: Cloudflare (hosting), Meta/WhatsApp (messaging), and payment processors. All processors under DPA.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Data Retention & Deletion</h2>
      <p>We retain account data until deletion requested. WhatsApp data up to 12 months. To request deletion, email support@mikcorai.com with subject "Data Deletion". We will respond within 30 days.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. Your Rights</h2>
      <p>Depending on your region (GDPR, CCPA), you have rights to access, correct, delete, and restrict processing. Contact support@mikcorai.com to exercise rights.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">8. Cookies</h2>
      <p>We use essential cookies for site functionality and analytics cookies to improve service. You can disable cookies in browser settings.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">9. Security</h2>
      <p>We implement industry-standard security measures. No method is 100% secure, but we protect data with encryption and access controls.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">10. Children's Privacy</h2>
      <p>Our services are not for children under 13. We do not knowingly collect data from children.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">11. Contact</h2>
      <p>For privacy questions, data requests, or WhatsApp opt-out: support@mikcorai.com | mikcorai.com</p>
    </div>
  );
}

function Terms() {
  return (
    <div className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-zinc-300 leading-relaxed">
      <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-sm text-zinc-500 mb-10">Last Updated: October 16, 2026</p>
      <p>By accessing mikcorai.com and using our AI agent platform, including WhatsApp Business integrations, you agree to these Terms. Services are provided "as is". You agree not to misuse the platform. Subscription fees non-refundable unless required by law. We may suspend accounts violating acceptable use or Meta WhatsApp policies. Limitation of liability: to maximum extent permitted by law. Governing law: Your local jurisdiction. Contact: support@mikcorai.com</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}