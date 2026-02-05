import './App.css'

function App() {
  const BRAND_NAME = 'Rui Labs'
  const SUPPORT_EMAIL = 'zed2786328@gmail.com'

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brandMark" aria-hidden="true" />
          <span className="brandName">{BRAND_NAME}</span>
        </div>
        <nav className="nav">
          <a className="navLink" href="#products">
            Products
          </a>
          <a className="navLink" href="#support">
            Support
          </a>
          <a className="navLink" href="/privacy.html">
            Privacy
          </a>
          <a className="navLink" href="/terms.html">
            Terms
          </a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="heroTitle">{BRAND_NAME}</h1>
          <p className="heroSubtitle">
            Small, practical MVP products for productivity, tools, and experiments.
          </p>
          <div className="heroBadges" aria-label="Highlights">
            <span className="badge">Free + Paid</span>
            <span className="badge">One-time + Subscription</span>
            <span className="badge">Payments via Lemon Squeezy</span>
          </div>
        </section>

        <section className="section">
          <h2 className="sectionTitle">What you get</h2>
          <div className="sectionBody">
            <p className="lead">
              I ship lightweight MVP products: small utilities, templates, and
              experiments you can actually use.
            </p>
            <ul className="bullets">
              <li>Clear product pages with simple pricing (free / paid / subscription)</li>
              <li>Secure checkout and receipts powered by Lemon Squeezy</li>
              <li>Support via email for any purchase or subscription issue</li>
            </ul>
          </div>
        </section>

        <section id="products" className="section">
          <div className="sectionHeaderRow">
            <h2 className="sectionTitle">Product list (starting small)</h2>
            <span className="sectionHint">I’ll keep shipping and expanding.</span>
          </div>

          <div className="grid">
            <article className="card">
              <h3 className="cardTitle">MVP #1</h3>
              <p className="cardText">A tiny productivity tool with a focused workflow.</p>
              <p className="cardMeta">Free + paid upgrade</p>
            </article>
            <article className="card">
              <h3 className="cardTitle">MVP #2</h3>
              <p className="cardText">A simple template to help you ship faster.</p>
              <p className="cardMeta">One-time purchase</p>
            </article>
            <article className="card">
              <h3 className="cardTitle">MVP #3</h3>
              <p className="cardText">A lightweight experiment turned into a usable tool.</p>
              <p className="cardMeta">One-time purchase</p>
            </article>
            <article className="card">
              <h3 className="cardTitle">MVP #4</h3>
              <p className="cardText">A small utility for makers and builders.</p>
              <p className="cardMeta">Subscription option</p>
            </article>
            <article className="card">
              <h3 className="cardTitle">MVP #5</h3>
              <p className="cardText">A practical tool focused on a single job.</p>
              <p className="cardMeta">Free + paid</p>
            </article>
          </div>

          <div className="note">
            <strong>Payments:</strong> All paid products are sold through Lemon Squeezy.
            You’ll receive an email receipt after checkout.
          </div>
        </section>
      </main>

      <footer id="support" className="footer">
        <div className="footerGrid">
          <div>
            <div className="footerTitle">Contact / Support</div>
            <a className="footerLink" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            <div className="footerText">
              I respond to support requests as soon as possible.
            </div>
          </div>

          <div>
            <div className="footerTitle">Policies</div>
            <a className="footerLink" href="/refund.html">
              Refund policy
            </a>
            <a className="footerLink" href="/privacy.html">
              Privacy policy
            </a>
            <a className="footerLink" href="/terms.html">
              Terms of service
            </a>
          </div>

          <div>
            <div className="footerTitle">Quick note</div>
            <div className="footerText">
              If you have billing issues, include your receipt email so I can help quickly.
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            © {new Date().getFullYear()} {BRAND_NAME}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
