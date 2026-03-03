import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/60134700013?text=Hi%20MacroByte.%20I%27d%20like%20to%20ask%20about%20your%20bookkeeping%20service.";

export default function ServicesENPage() {
  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Bookkeeping as a Service (BaaS)</h1>

        <p className="page-lead">
          Reliable monthly bookkeeping for SMEs across Malaysia — designed
          for clarity, consistency, and smoother month-end.
        </p>

        <div className="grid-2">
          <div className="card">
            <h3>Monthly Bookkeeping &amp; Reconciliation</h3>
            <p>Bank matching, categorisation, month-end close.</p>
          </div>

          <div className="card">
            <h3>Income &amp; Expense Tracking</h3>
            <p>Clear tracking so your numbers make sense.</p>
          </div>

          <div className="card">
            <h3>Accounts Receivable &amp; Payable</h3>
            <p>Track what’s due and what you owe.</p>
          </div>

          <div className="card">
            <h3>Management Reports</h3>
            <p>Understand performance at a glance, every month.</p>
          </div>

          <div className="card">
            <h3>Catch-up / Clean-up Bookkeeping</h3>
            <p>Get your books back in order.</p>
          </div>

          <div className="card">
            <h3>Bookkeeping Health Check</h3>
            <p>Spot issues early and fix the basics.</p>
          </div>
        </div>

        <div className="panel-light">
          <h2 className="section-title">What you receive each month</h2>

          <ul className="list">
            <li>Profit &amp; Loss Statement</li>
            <li>Balance Sheet</li>
            <li>Transaction Summary</li>
            <li>Cashflow View</li>
            <li>Questions / Notes follow-up</li>
          </ul>

          <div
            className="card-actions"
            style={{
              marginTop: 16,
              gap: 12,
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{
                padding: "8px 14px",
                fontSize: "14px",
                boxShadow: "0 12px 24px rgba(37,99,235,0.18)",
              }}
            >
              Talk on WhatsApp
            </a>

            <Link
              href="/en/contact"
              className="btn-secondary"
              style={{
                padding: "8px 14px",
                fontSize: "14px",
              }}
            >
              Reach Out to Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}