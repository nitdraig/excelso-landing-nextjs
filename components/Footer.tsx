import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Excelso. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/about"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/vault"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Vault
          </Link>
          <Link
            href="/open"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Open
          </Link>
          <Link
            href="/contact"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
