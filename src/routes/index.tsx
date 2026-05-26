import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, ArrowUpRight, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaCartAI — Smarter Shopping. Luxury Experience." },
      {
        name: "description",
        content:
          "AI-curated luxury commerce. Discover refined pieces — fashion, accessories, fragrance — picked for you.",
      },
      { property: "og:title", content: "NovaCartAI — Luxury, intelligently curated" },
      {
        property: "og:description",
        content: "AI-curated luxury commerce. Discover refined pieces picked for you.",
      },
    ],
  }),
  component: Landing,
});

const products = [
  { img: p1, name: "Sienna Leather Tote", cat: "Bags", price: "$1,240" },
  { img: p2, name: "Solis Gold Watch", cat: "Timepieces", price: "$2,890" },
  { img: p3, name: "Cashmere Crew", cat: "Knitwear", price: "$640" },
  { img: p4, name: "Amber 07 Eau de Parfum", cat: "Fragrance", price: "$210" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="overflow-hidden">
          <div className="marquee flex whitespace-nowrap py-2 gap-16 w-max">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                <span>Complimentary shipping over $250</span>
                <span>·</span>
                <span>AI-curated capsule drops every Friday</span>
                <span>·</span>
                <span>Members get early access</span>
                <span>·</span>
                <span>Atelier concierge 24/7</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-sm bg-primary grid place-items-center">
              <ShoppingBag className="h-5 w-5 text-accent" strokeWidth={1.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-2xl">
                Nova<span className="text-gold">CartAI</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Smarter Shopping · Luxury Experience
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "Shop", to: "/dashboard" },
              { label: "Seller", to: "/seller" },
              { label: "Contact", to: "/" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="relative py-1 hover:text-accent transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="h-11 w-11 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button className="h-11 w-11 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
              <Heart className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button className="relative h-11 w-11 rounded-full bg-primary grid place-items-center hover:opacity-90 transition">
              <ShoppingBag className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-[10px] font-medium grid place-items-center">
                1
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-14 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">
              <span className="h-px w-10 bg-accent" /> Autumn Capsule · 2026
            </div>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] font-light">
              Luxury,
              <br />
              <span className="italic text-gold">intelligently</span>
              <br />
              curated.
            </h1>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
              NovaCartAI learns your taste and assembles a private boutique of refined pieces —
              from atelier ready-to-wear to fragrance and timepieces.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground pl-7 pr-2 py-2 rounded-full text-sm tracking-wide hover:bg-foreground transition"
              >
                Discover the edit
                <span className="h-10 w-10 rounded-full bg-accent text-accent-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-7 py-4 text-sm tracking-wide border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition"
              >
                Become a member
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              {[
                ["120K+", "Curated pieces"],
                ["48", "Atelier partners"],
                ["4.9", "Member rating"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent/20 to-transparent rounded-sm -z-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-sm shadow-[var(--shadow-luxe)]">
              <img
                src={heroImg}
                alt="Model in beige cashmere with gold jewelry"
                width={1280}
                height={1600}
                className="w-full h-[640px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">
                    Featured look
                  </div>
                  <div className="font-display text-2xl mt-1">The Cashmere Series</div>
                </div>
                <div className="bg-background/95 text-foreground rounded-full px-4 py-2 text-xs">
                  from $640
                </div>
              </div>
            </div>
            <div className="absolute -left-6 top-10 bg-card border border-border rounded-sm p-4 shadow-lg hidden lg:block">
              <div className="flex items-center gap-2 text-xs">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
              </div>
              <div className="text-xs mt-2 max-w-[160px] leading-relaxed">
                “Like having a personal stylist who knows my closet.”
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                Amara · Member
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-accent">The Edit</div>
              <h2 className="font-display text-5xl mt-3 font-light">Categories of the season</h2>
            </div>
            <a href="#" className="text-sm border-b border-accent pb-1 hover:text-accent transition">
              Explore all collections
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-sidebar-border">
            {["Ready-to-wear", "Accessories", "Timepieces", "Fragrance"].map((c, i) => (
              <a
                key={c}
                href="#"
                className="group bg-primary p-8 flex flex-col justify-between aspect-[3/4] hover:bg-sidebar-accent transition"
              >
                <div className="text-xs text-accent tracking-widest">0{i + 1}</div>
                <div>
                  <div className="font-display text-3xl">{c}</div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/70 group-hover:text-accent transition">
                    Shop now <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Picked for you
            </div>
            <h2 className="font-display text-5xl mt-3 font-light">
              This week's <span className="italic text-gold">capsule</span>
            </h2>
          </div>
          <div className="flex gap-2 text-xs">
            {["All", "New", "Trending", "Members"].map((t, i) => (
              <button
                key={t}
                className={`px-4 py-2 rounded-full border transition ${
                  i === 0
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative overflow-hidden rounded-sm bg-card aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                  <Heart className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <div className="absolute bottom-3 left-3 bg-background/95 text-[10px] uppercase tracking-widest px-2 py-1">
                  {p.cat}
                </div>
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="font-display text-xl">{p.name}</h3>
                <div className="text-sm">{p.price}</div>
              </div>
              <button className="mt-2 text-xs text-muted-foreground hover:text-accent uppercase tracking-widest inline-flex items-center gap-1">
                Add to bag <ArrowUpRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* AI section */}
      <section className="bg-secondary py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-accent">The Algorithm</div>
            <h2 className="font-display text-5xl mt-3 font-light leading-tight">
              An intelligence trained on <span className="italic text-gold">good taste.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              Our AI studies a century of editorial archives, runway shows, and member preferences
              to assemble a boutique that feels unmistakably yours — never generic.
            </p>
            <div className="mt-10 space-y-5">
              {[
                ["Private style profile", "A few questions, a lifetime of refined picks."],
                ["Daily silent edit", "Six pieces every morning — no noise, no ads."],
                ["Atelier concierge", "A human stylist, one message away."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-5">
                  <div className="h-10 w-10 rounded-full bg-primary text-accent grid place-items-center shrink-0 font-display">
                    ✦
                  </div>
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden bg-primary p-10 flex flex-col justify-between text-primary-foreground">
            <div>
              <div className="text-xs tracking-[0.25em] text-accent uppercase">Today's edit</div>
              <div className="font-display text-3xl mt-3">For Amara</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[p1, p3, p4, p2, p1, p3].map((src, i) => (
                <div key={i} className="aspect-square rounded-sm overflow-hidden">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="opacity-80">6 pieces · refreshed daily</span>
              <a href="#" className="text-accent inline-flex items-center gap-1">
                Open boutique <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
          The Membership
        </div>
        <h2 className="font-display text-5xl md:text-6xl mt-4 font-light max-w-3xl mx-auto leading-tight">
          Join the private list. Receive the Friday <span className="italic text-gold">capsule.</span>
        </h2>
        <form className="mt-10 max-w-md mx-auto flex border border-foreground/30 rounded-full p-1.5 bg-card">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent px-5 py-2 text-sm outline-none"
          />
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:bg-foreground transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-3xl">
              Nova<span className="text-gold">CartAI</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
              Luxury ecommerce experience powered by intelligent recommendations and elegant design.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>support@novacartai.com</li>
              <li>+91 9876 543 210</li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Follow</div>
            <ul className="space-y-2 text-sm">
              {["Instagram", "Twitter", "Pinterest"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-accent transition">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-sidebar-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 text-xs text-primary-foreground/60 flex justify-between flex-wrap gap-4">
            <span>© 2026 NovaCartAI. All rights reserved.</span>
            <span>Crafted with care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
