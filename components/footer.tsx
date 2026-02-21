export function Footer() {
  return (
    <footer className="border-t border-primary/10 py-12 bg-card/20 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-bold text-foreground">
              <span className="text-primary drop-shadow-[0_0_6px_oklch(0.75_0.18_55/0.4)]">Mesob</span>{" "}
              Lab
            </span>
            <span className="text-xs text-muted-foreground">
              Software Development Agency, Ethiopia
            </span>
          </div>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {["Services", "Pricing", "Testimonials", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            {"\u00A9 2026 Mesob Lab. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
