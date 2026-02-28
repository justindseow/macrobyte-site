export default function BmContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Dapatkan Sebut Harga</h1>
        <p className="page-lead">
          Beritahu kami tentang perniagaan anda. Kami akan balas dengan pelan bulanan yang ringkas.
        </p>

        <form className="form">
          <input className="input" placeholder="Nama" />
          <input className="input" placeholder="Syarikat" />
          <input className="input" placeholder="Emel" />

          <select className="input" defaultValue="">
            <option value="" disabled>
              Anggaran transaksi bulanan
            </option>
            <option>0–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>

          <textarea className="input" placeholder="Mesej" rows={5} />

          <button type="button" className="btn-primary">
            Hantar
          </button>
        </form>

        <div className="center-note">
          <a
            className="link"
            href="https://wa.me/60134700013?text=Hi%20MacroByte,%20Saya%20berminat%20dengan%20perkhidmatan%20akaun%20bulanan.%20Anggaran%20transaksi%20bulanan%20saya%20adalah%20____."
            target="_blank"
            rel="noopener noreferrer"
          >
            Lebih suka WhatsApp? Klik di sini
          </a>
        </div>
      </div>
    </main>
  );
}