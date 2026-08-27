import Link from "next/link";



export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/[0.06] py-10 px-6"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-heading font-semibold text-sm text-foreground/80">
            Cogniv
          </span>
          <span className="text-muted/40 text-xs">—</span>
          <span className="text-xs text-muted/60">
            Digital Safety First. AI-Powered Security.
          </span>
        </div>



        {/* Copyright */}
        <p className="text-xs text-muted/50">
          &copy; {year} Cogniv. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
