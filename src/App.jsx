import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <>
      <header className="border-b border-zinc-800 sticky top-0 bg-black/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-black text-xl tracking-tighter">mikcorai</Link>
          <nav className="flex gap-8 text-sm text-zinc-400 items-center">
            <Link to="/" className="hover:text-white">Product</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <span className="bg-white text-black px-4 py-2 rounded-full font-medium">support@mikcorai.com</span>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-zinc-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-zinc-500">
          <div>
            <p className="font-bold text-white text-base mb-2">mikcorai</p>
            <p className="max-w-sm">AI-powered business automation for WhatsApp, Web and API. Build intelligent customer experiences.</p>
          </div>
          <div className="flex gap-12">
            <div><p className="text-white font-medium mb-3">Company</p><p><Link to="/privacy">Privacy Policy</Link></p><p className="mt-2"><Link to="/terms">Terms of Service</Link></p></div>
            <div><p className="text-white font-medium mb-3">Contact</p><p>support@mikcorai.com</p><p className="mt-2">mikcorai.com</p></div>
          </div>
        </div>
        <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">© 2026 mikcorai. All rights reserved.</div>
      </footer>
    </>
  )
}

function Home() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex text-xs border border-zinc-800 rounded-full px-3 py-1 text-zinc-400 mb-6">● AI Business Platform v1.0</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">AI that talks<br/>to customers.</h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">Mikcorai helps businesses automate support, sales and engagement with AI agents across WhatsApp and web. Secure, scalable, and built for modern teams.</p>
          <div className="flex gap-3">
            <span className="bg-white text-black px-7 py-3 rounded-full font-semibold text-sm">support@mikcorai.com</span>
            <a href="#features" className="border border-zinc-800 px-7 py-3 rounded-full text-sm">How it works</a>
          </div>
        </div>

        <div id="features" className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mt-24">
          <div className="bg-zinc-950 p-8">
            <h3 className="font-semibold mb-3">WhatsApp Automation</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Official Cloud API integration with webhooks, templates, and AI auto-replies.</p>
          </div>
          <div className="bg-zinc-950 p-8">
            <h3 className="font-semibold mb-3">AI Agents</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Train custom agents on your docs, FAQs, and products. Multilingual support.</p>
          </div>
          <div className="bg-zinc-950 p-8">
            <h3 className="font-semibold mb-3">Enterprise Ready</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Secure, compliant, with analytics, handoff to human, and API access.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function Privacy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: October 16, 2026</p>
        <div className="prose prose-invert prose-sm max-w-none space-y-5 text-zinc-400 leading-7">
          <p>Mikcorai ("we", "us") operates mikcorai.com and related services. We are committed to protecting your privacy and handling data responsibly.</p>
          <h3 className="text-white font-semibold">1. Information We Collect</h3>
          <p>We collect business contact information, message content necessary to provide AI services, and usage analytics. WhatsApp message data is processed via Meta's official APIs.</p>
          <h3 className="text-white font-semibold">2. How We Use Data</h3>
          <p>To provide, improve, and secure our AI automation services. We do not sell personal data to third parties.</p>
          <h3 className="text-white font-semibold">3. Data Retention & Security</h3>
          <p>Message data is retained only as long as necessary for service delivery, typically up to 30 days. All data is encrypted in transit and at rest.</p>
          <h3 className="text-white font-semibold">4. Contact</h3>
          <p>For privacy requests, contact us at support@mikcorai.com.</p>
        </div>
      </div>
    </Layout>
  )
}

function Terms() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: October 16, 2026</p>
        <div className="space-y-5 text-zinc-400 leading-7 text-sm">
          <p>By accessing or using Mikcorai services, you agree to these Terms.</p>
          <h3 className="text-white font-semibold">Services</h3>
          <p>Mikcorai provides AI-powered business messaging automation. You are responsible for complying with WhatsApp Business and Meta Platform policies when using our services.</p>
          <h3 className="text-white font-semibold">Acceptable Use</h3>
          <p>You agree not to use our services for spam, illegal activities, or any use that violates Meta's terms.</p>
          <h3 className="text-white font-semibold">Limitation of Liability</h3>
          <p>Services are provided "as is". Mikcorai is not liable for indirect or consequential damages.</p>
          <h3 className="text-white font-semibold">Contact</h3>
          <p>support@mikcorai.com</p>
        </div>
      </div>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}