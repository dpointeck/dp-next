import Link from "next/link";

export default function Footer() {
  return (
    <footer>
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
