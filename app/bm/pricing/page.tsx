// app/bm/pricing/page.tsx
export default function PricingBMPage() {
  const waOnboard =
    "https://wa.me/60134700013?text=Hi.%20Saya%20ingin%20mula%20proses%20pendaftaran.";

  const waVolume =
    "https://wa.me/60134700013?text=Hi.%20Saya%20ingin%20berbincang%20tentang%20harga%20berdasarkan%20jumlah%20transaksi.";

  const waLight =
    "https://wa.me/60134700013?text=Hi.%20Saya%20ingin%20meneroka%20pakej%20yang%20lebih%20ringan.";

  return (
    <main className="page pricing-page">
      <div className="container narrow">
        <h1 className="page-title">Harga</h1>
        <p className="page-lead">
          Harga bulanan yang jelas dan disesuaikan mengikut jumlah transaksi anda.
        </p>

        {/* Main card */}
        <section className="pricing-card">
          <div className="pricing-top">
            <div className="pricing-kicker">Dari</div>
            <div className="pricing-figure">
              <span className="pricing-currency">RM</span>
              <span className="pricing-number">699</span>
            </div>
            <div className="pricing-per">/ bulan</div>
          </div>

          <div className="pricing-divider" />

          <ul className="pricing-points">
            <li>
              Termasuk sehingga <b>80 transaksi</b> sebulan
            </li>
            <li>
              <b>RM3</b> bagi setiap transaksi tambahan melebihi 80
            </li>
          </ul>

          <div className="pricing-actions">
            <a
              className="btn-primary pricing-primary"
              href={waOnboard}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mulakan Pendaftaran
            </a>
          </div>

          <p className="pricing-footnote">
            Kami akan semak jumlah transaksi anda dan sahkan kadar bulanan sebelum bermula.
          </p>
        </section>

        {/* Secondary CTAs */}
        <section className="pricing-secondary">
          <div className="pricing-mini">
            <h2 className="pricing-mini-title">Jumlah transaksi lebih tinggi?</h2>
            <p className="pricing-mini-text">
              Untuk perniagaan dengan transaksi lebih banyak, harga disusun mengikut beban kerja.
            </p>
            <a
              className="btn-outline"
              href={waVolume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bincang Harga Volum
            </a>
          </div>

          <div className="pricing-mini">
            <h2 className="pricing-mini-title">Baru bermula?</h2>
            <p className="pricing-mini-text">
              Perniagaan peringkat awal atau jumlah transaksi rendah boleh hubungi kami untuk pilihan lebih ringan.
            </p>
            <a
              className="btn-outline"
              href={waLight}
              target="_blank"
              rel="noopener noreferrer"
            >
              Teroka Pakej Ringan
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}