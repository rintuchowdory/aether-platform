import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-accent/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 text-xl font-bold glow-text cursor-pointer">
            <span className="text-2xl">◆</span>
            AETHER
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/research">
            <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-pointer">
              Research
            </span>
          </Link>
          <Link href="/intelligence">
            <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-pointer">
              Intelligence
            </span>
          </Link>
          <Link href="/simulations">
            <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-pointer">
              Simulations
            </span>
          </Link>
          <Link href="/pricing">
            <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-pointer">
              Pricing
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-pointer">
              Contact
            </span>
          </Link>
        </div>

        <Link href="/research">
          <Button className="glow-button">Launch Platform</Button>
        </Link>
      </div>
    </nav>
  );
}
