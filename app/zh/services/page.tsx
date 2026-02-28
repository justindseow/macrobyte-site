import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/60134700013?text=Hi%20MacroByte.%20我想了解你们的记账服务。";

export default function ServicesZHPage() {
  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">记账服务（BaaS）</h1>

        <p className="page-lead">
          为马来西亚各地的中小微企业提供可靠的月度记账服务 — 追求清晰、
          一致，让月结更顺畅。
        </p>

        <div className="grid-2">
          <div className="card">
            <h3>月度记账与对账</h3>
            <p>银行对账、分类整理、月末结账。</p>
          </div>

          <div className="card">
            <h3>收入与支出记录</h3>
            <p>清晰记录，让你的数字更容易看懂。</p>
          </div>

          <div className="card">
            <h3>应收与应付管理</h3>
            <p>跟踪该收的款与该付的款。</p>
          </div>

          <div className="card">
            <h3>管理报表</h3>
            <p>每月一目了然地了解经营表现。</p>
          </div>

          <div className="card">
            <h3>补账 / 清账服务</h3>
            <p>把账目补齐整理，让账本回到正轨。</p>
          </div>

          <div className="card">
            <h3>账本健康检查</h3>
            <p>尽早发现问题，把关键基础修好。</p>
          </div>
        </div>

        <div className="panel-light">
          <h2 className="section-title">每月你会收到</h2>

          <ul className="list">
            <li>损益表</li>
            <li>资产负债表</li>
            <li>交易汇总</li>
            <li>现金流视图</li>
            <li>问题 / 备注跟进</li>
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
              WhatsApp 咨询
            </a>

            <Link
              href="/zh/contact"
              className="btn-secondary"
              style={{
                padding: "8px 14px",
                fontSize: "14px",
              }}
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}