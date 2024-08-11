import Link from "next/link";

import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav>
        <Link href="/site-notice">
          Site Notice
        </Link>
        &middot;
        <Link href="/privacy-policy">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
