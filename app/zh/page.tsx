// app/zh/page.tsx
export default function ZhHome() {
  const waHome =
    "https://wa.me/60134700013?text=Hi%20MacroByte,%20我有兴趣了解每月记账服务。我来自首页。我的每月交易数量大约是____。";

  return (
    <main className="hero">
      <div className="container hero-grid">
        {/* LEFT */}
        <section className="hero-left">
          <span
            className="badge"
            style={{ alignSelf: "flex-start", width: "fit-content" }}
          >
            为马来西亚中小微企业打造
          </span>

          <h1 className="h1">
            账目妥善处理。无需烦恼。
          </h1>

          <p className="lead">
            为马来西亚中小微企业提供可靠的每月记账服务。
            我们负责您的记录、对账与报告，
            您无需额外软件或额外员工。
          </p>
        </section>

        {/* RIGHT */}
        <aside className="panel hero-panel">
          <div className="panel-grid">
            <div className="card">
              <h3>账目清晰</h3>
              <p>
                每月对账、正确分类，账本保持整洁并及时更新。
              </p>
            </div>

            <div className="card">
              <h3>数字透明</h3>
              <p>
                简洁易懂的每月报告，让您清楚资金流向。
                没有复杂的会计术语。
              </p>
            </div>

            <div className="card card-wide card-wide-fill">
              <div>
                <h3>全程代办</h3>
                <p>
                  您只需提供资料，我们负责其余事项。
                  无需额外软件。
                </p>
              </div>

              <div className="card-actions card-actions-duo">
                <a
                  className="btn-primary"
                  href={waHome}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp 联系
                </a>

                <a className="btn-outline-dark" href="/zh/contact">
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}