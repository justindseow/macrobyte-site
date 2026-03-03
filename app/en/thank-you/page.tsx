import Link from "next/link";

export default function EnThankYou() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Thank you. We have received your request.</h1>
        <p className="page-lead">
          We will reply with a simple monthly plan.
        </p>

        <div className="center-note">
          <Link className="link" href="/en">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}