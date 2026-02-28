// app/zh/pricing/page.tsx
export default function PricingZHPage() {
  const waOnboard =
    "https://wa.me/60134700013?text=Hi.%20我想开始办理入门服务。";

  const waVolume =
    "https://wa.me/60134700013?text=Hi.%20我想讨论交易量定价。";

  const waLight =
    "https://wa.me/60134700013?text=Hi.%20我想了解更轻量的方案。";

  return (
    <main className="page pricing-page">
      <div className="container narrow">
        <h1 className="page-title">价格</h1>
        <p className="page-lead">
          清晰透明的月费定价，根据您的交易数量进行调整。
        </p>

        {/* Main card */}
        <section className="pricing-card">
          <div className="pricing-top">
            <div className="pricing-kicker">起</div>
            <div className="pricing-figure">
              <span className="pricing-currency">RM</span>
              <span className="pricing-number">699</span>
            </div>
            <div className="pricing-per">/ 每月</div>
          </div>

          <div className="pricing-divider" />

          <ul className="pricing-points">
            <li>
              每月包含最多 <b>80 笔交易</b>
            </li>
            <li>
              超过 80 笔后，每笔额外收费 <b>RM3</b>
            </li>
          </ul>

          <div className="pricing-actions">
            <a
              className="btn-primary pricing-primary"
              href={waOnboard}
              target="_blank"
              rel="noopener noreferrer"
            >
              开始办理
            </a>
          </div>

          <p className="pricing-footnote">
            我们会先审核您的交易量，并在开始前确认月费。
          </p>
        </section>

        {/* Secondary CTAs */}
        <section className="pricing-secondary">
          <div className="pricing-mini">
            <h2 className="pricing-mini-title">交易量较高？</h2>
            <p className="pricing-mini-text">
              对于交易数量较多的企业，我们将根据工作量制定价格。
            </p>
            <a
              className="btn-outline"
              href={waVolume}
              target="_blank"
              rel="noopener noreferrer"
            >
              讨论交易量定价
            </a>
          </div>

          <div className="pricing-mini">
            <h2 className="pricing-mini-title">刚起步？</h2>
            <p className="pricing-mini-text">
              初创或低交易量企业可以联系我们，了解更轻量的方案。
            </p>
            <a
              className="btn-outline"
              href={waLight}
              target="_blank"
              rel="noopener noreferrer"
            >
              了解轻量方案
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}