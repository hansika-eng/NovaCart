import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Heart,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  Mail,
} from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/seller", label: "Seller" },
  { to: "/contact", label: "Contact" },
];

export function CustomerLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (router) => router.location.pathname });

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground text-xs tracking-[0.24em] uppercase">
        <div className="overflow-hidden">
          <div className="marquee flex whitespace-nowrap py-2 gap-16 w-max">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex gap-16">
                <span>AI-curated luxury marketplace</span>
                <span>·</span>
                <span>Private edits, refined drops, early access</span>
                <span>·</span>
                <span>Concierge-level shopping journeys</span>
                <span>·</span>
                <span>Premium seller and admin spaces</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-sm bg-primary text-primary-foreground shadow-[var(--shadow-luxe)]">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-2xl">
                Nova<span className="text-gold">CartAI</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Luxury, editorial, AI-powered
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`relative py-1 transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full ${
                    active ? "text-accent after:w-full" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition hover:bg-secondary">
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition hover:bg-secondary">
              <Heart className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button className="relative grid h-11 w-11 place-items-center rounded-full bg-primary transition hover:opacity-90">
              <ShoppingBag className="h-4 w-4 text-primary-foreground" strokeWidth={1.5} />
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 lg:grid-cols-3 lg:px-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent">NovaCartAI</div>
            <h2 className="mt-3 font-display text-4xl font-light">Luxury commerce, re-edited.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/75">
              A premium marketplace where customers browse elegant collections, sellers manage
              their own ateliers, and administrators run the platform with editorial precision.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Explore</div>
            <div className="mt-4 grid gap-3 text-sm text-primary-foreground/80">
              <Link to="/shop" className="transition hover:text-accent">
                AI shop
              </Link>
              <Link to="/shop/products" className="transition hover:text-accent">
                Featured products
              </Link>
              <Link to="/cart" className="transition hover:text-accent">
                Cart and checkout
              </Link>
              <Link to="/seller" className="transition hover:text-accent">
                Seller workspace
              </Link>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Connect</div>
            <div className="mt-4 grid gap-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                AI recommendations every week
              </div>
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-accent" />
                Seller onboarding and approvals
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                concierge@novacart.ai
              </div>
              <a href="#top" className="inline-flex items-center gap-2 text-accent transition hover:opacity-80">
                Back to top <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
