export default function ZhContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">获取报价</h1>
        <p className="page-lead">
          告诉我们您的业务情况，我们会回复一个简单的月度方案。
        </p>

        <form className="form">
          <input className="input" placeholder="姓名" />
          <input className="input" placeholder="公司" />
          <input className="input" placeholder="电子邮箱" />

          <select className="input" defaultValue="">
            <option value="" disabled>
              每月交易数量（预估）
            </option>
            <option>0–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>

          <textarea className="input" placeholder="留言" rows={5} />

          <button type="button" className="btn-primary">
            提交
          </button>
        </form>

        <div className="center-note">
          <a
            className="link"
            href="https://wa.me/60134700013?text=Hi%20MacroByte,%20我有兴趣了解每月记账服务。我的每月交易数量大约是____。"
            target="_blank"
            rel="noopener noreferrer"
          >
            更喜欢 WhatsApp？点击这里
          </a>
        </div>
      </div>
    </main>
  );
}