export default function ZhContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">获取报价</h1>
        <p className="page-lead">
          告诉我们您的业务情况，我们会回复一个简单的月度方案。
        </p>

        <form
          className="form"
          action="https://formsubmit.co/accounts@macrobyte.my"
          method="POST"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="New MacroByte Quote Request (ZH)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://macrobyte.my/zh/thank-you" />

          <input className="input" name="姓名" placeholder="姓名" required />
          <input className="input" name="公司" placeholder="公司" required />
          <input
            className="input"
            name="电子邮箱"
            placeholder="电子邮箱"
            type="email"
            required
          />

          <select className="input" name="每月交易数量（预估）" defaultValue="" required>
            <option value="" disabled>
              每月交易数量（预估）
            </option>
            <option value="0-50">0–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>

          <textarea className="input" name="留言" placeholder="留言" rows={5} />

          <button type="submit" className="btn-primary">
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