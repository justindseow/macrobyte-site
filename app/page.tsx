// app/page.tsx
export default function Home() {
  const waRoot =
    "https://wa.me/60134700013?text=Hi.%20I%20would%20like%20to%20enquire%20about%20monthly%20bookkeeping.";

  return (
    <main>
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "flex-end",

          // responsive vertical placement (works on laptop + large screens)
          paddingBottom: "clamp(56px, 10vh, 160px)",

          backgroundImage:
            "linear-gradient(rgba(8,20,50,0.20), rgba(8,20,50,0.45)), url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 7%", // slightly up, avoids truncation
        }}
      >
        <div
          className="container"
          style={{
            // prevents header overlap and keeps spacing nice across devices
            paddingTop: "clamp(48px, 6vh, 110px)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(30px, 4.8vw, 60px)", // scales down on laptop
              fontWeight: 950,
              lineHeight: 1.08,
              maxWidth: 900,
              margin: 0,
              textShadow: "0 10px 28px rgba(0,0,0,0.45)",
            }}
          >
            We handle the details so you can focus on growing your business.
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: 700,
              fontSize: "clamp(14px, 1.4vw, 18px)", // scales down on laptop
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.92)",
              fontWeight: 600,
              textShadow: "0 8px 22px rgba(0,0,0,0.35)",
            }}
          >
            The finance structure your business needs, without building an internal team.
          </p>

          <div style={{ marginTop: 26 }}>
            <a
              className="btn-primary"
              href={waRoot}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 22px", fontSize: 15 }}
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}