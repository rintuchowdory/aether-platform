import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-accent/20 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/research">
                  <a className="text-foreground/70 hover:text-accent transition-colors text-sm">
                    Research Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/simulations">
                  <a className="text-foreground/70 hover:text-accent transition-colors text-sm">
                    Simulations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="text-foreground/70 hover:text-accent transition-colors text-sm">
                    Pricing
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-foreground/70 hover:text-accent transition-colors text-sm">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8 flex items-center justify-between">
          <p className="text-foreground/60 text-sm">
            © 2026 Aether Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <span className="text-sm">F</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
