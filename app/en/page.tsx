// app/en/page.tsx
export default function EnHome() {
  const waHome =
    "https://wa.me/60134700013?text=Hi%20MacroByte,%20I%27m%20interested%20in%20monthly%20bookkeeping.%20My%20estimated%20monthly%20transactions%20are%20____.";

  return (
    <main className="hero">
      <div className="container hero-grid">
        {/* LEFT */}
        <section className="hero-left">
          <span className="badge" style={{ alignSelf: "flex-start", width: "fit-content" }}> Built for Malaysian MSMEs </span>

          <h1 className="h1">Bookkeeping handled properly. Without the hassle.</h1>

          <p className="lead">
            Reliable monthly bookkeeping for Malaysian MSMEs. We manage your records,
            reconciliations and reports so you do not need extra software, systems or staff.
          </p>
        </section>

        {/* RIGHT */}
        <aside className="panel hero-panel">
          <div className="panel-grid">
            <div className="card">
              <h3>Clean Books</h3>
              <p>
                Monthly reconciliation, proper categorisation, and well-maintained ledgers
                that stay up to date.
              </p>
            </div>

            <div className="card">
              <h3>Clear Numbers</h3>
              <p>
                Simple monthly reports that show where your money is going. No accounting
                jargon. No confusion.
              </p>
            </div>

            <div className="card card-wide card-wide-fill">
              <div>
                <h3>Fully Managed</h3>
                <p>Send your documents. We handle the rest. No extra software needed.</p>
              </div>

              <div className="card-actions card-actions-duo">
                <a
                  className="btn-primary"
                  href={waHome}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk on WhatsApp
                </a>

                <a className="btn-outline-dark" href="/en/contact">
                  Reach Out to Us
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}