import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-6 pb-6 relative z-50 container mx-auto flex justify-center font-mono">
      <nav className="text-xs">
        <Link href="/site-notice">
          <a className="mr-6">Site Notice</a>
        </Link>
        &middot;
        <Link href="/privacy-policy">
          <a className="ml-6">Privacy</a>
        </Link>
      </nav>
    </footer>
  );
}
