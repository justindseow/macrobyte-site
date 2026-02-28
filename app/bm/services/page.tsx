import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/60134700013?text=Hi%20MacroByte.%20Saya%20ingin%20bertanya%20tentang%20perkhidmatan%20perakaunan%20anda.";

export default function ServicesBMPage() {
  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Perakaunan sebagai Perkhidmatan (BaaS)</h1>

        <p className="page-lead">
          Perkhidmatan perakaunan bulanan yang boleh dipercayai untuk MSME dan SME di
          seluruh Malaysia — direka untuk lebih jelas, konsisten, dan memudahkan
          kerja hujung bulan.
        </p>

        <div className="grid-2">
          <div className="card">
            <h3>Perakaunan Bulanan &amp; Rekonsiliasi</h3>
            <p>Padanan bank, pengkategorian, penutupan hujung bulan.</p>
          </div>

          <div className="card">
            <h3>Jejak Pendapatan &amp; Perbelanjaan</h3>
            <p>Jejakan yang jelas supaya angka anda lebih mudah difahami.</p>
          </div>

          <div className="card">
            <h3>Akaun Belum Terima &amp; Belum Bayar</h3>
            <p>Jejak apa yang perlu diterima dan apa yang anda perlu bayar.</p>
          </div>

          <div className="card">
            <h3>Laporan Pengurusan</h3>
            <p>Fahami prestasi secara ringkas, setiap bulan.</p>
          </div>

          <div className="card">
            <h3>Perakaunan Tertunggak / Kemas Kini</h3>
            <p>Susun semula akaun anda supaya kembali teratur.</p>
          </div>

          <div className="card">
            <h3>Pemeriksaan Kesihatan Buku Akaun</h3>
            <p>Kesan isu awal dan betulkan asas yang penting.</p>
          </div>
        </div>

        <div className="panel-light">
          <h2 className="section-title">Apa yang anda terima setiap bulan</h2>

          <ul className="list">
            <li>Penyata Untung Rugi</li>
            <li>Kunci Kira-Kira</li>
            <li>Ringkasan Transaksi</li>
            <li>Paparan Aliran Tunai</li>
            <li>Susulan Soalan / Nota</li>
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
              WhatsApp Kami
            </a>

            <Link
              href="/bm/contact"
              className="btn-secondary"
              style={{
                padding: "8px 14px",
                fontSize: "14px",
              }}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}