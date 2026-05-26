import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Star, ShoppingBag, Heart, WandSparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [{ title: "Shop — NovaCartAI" }],
  }),
  component: ShopHome,
});

const picks = [
  { img: p1, name: "Sienna Leather Tote", note: "Matches your saved bags" },
  { img: p2, name: "Solis Gold Watch", note: "A high-confidence style fit" },
  { img: p3, name: "Cashmere Crew", note: "Aligned with your wardrobe" },
  { img: p4, name: "Amber 07 Eau de Parfum", note: "Warm notes you favor" },
];

const collections = ["Ready-to-wear", "Accessories", "Timepieces", "Fragrance"];

function ShopHome() {
  return (
    <>
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" /> AI recommendations
          </div>
          <h1 className="mt-6 font-display text-[clamp(3rem,6vw,6.2rem)] leading-[0.95] font-light">
            Editorial luxury,
            <br />
            intelligently <span className="italic text-gold">curated</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Discover premium fashion, accessories, fragrance, and objects selected through an AI
            stylist that understands taste, timing, and wardrobe context.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop/products"
              className="group inline-flex items-center gap-3 rounded-full bg-primary pl-7 pr-2 py-2 text-sm text-primary-foreground transition hover:opacity-90"
            >
              Browse products
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground transition group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm transition hover:bg-secondary"
            >
              <Heart className="h-4 w-4" /> Wishlist
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-sm border border-border shadow-[var(--shadow-luxe)]">
            <img src={heroImg} alt="Luxury fashion editorial" className="h-[620px] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
            {[
              ["94%", "style match"],
              ["24h", "concierge response"],
              ["150+", "editorial drops"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-sm border border-border bg-card p-4">
                <div className="font-display text-2xl">{value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-sidebar-border px-5 py-0 lg:grid-cols-4 lg:px-10">
          {collections.map((collection, index) => (
            <Link
              key={collection}
              to="/shop/products"
              className="group flex aspect-[3/4] flex-col justify-between bg-primary p-7 transition hover:bg-sidebar-accent"
            >
              <div className="text-xs text-accent tracking-[0.3em]">0{index + 1}</div>
              <div>
                <div className="font-display text-3xl">{collection}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-primary-foreground/70 group-hover:text-accent">
                  Explore edit <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">AI Picks</div>
            <h2 className="mt-3 font-display text-4xl font-light">Pieces selected for your taste</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" /> updated daily
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {picks.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-primary-foreground">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]">
                    <WandSparkles className="h-3 w-3 text-accent" /> personalized
                  </div>
                  <div className="mt-2 font-display text-2xl">{item.name}</div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-6 px-5 pb-20 lg:grid-cols-2 lg:px-10">
        <div className="rounded-sm border border-border bg-primary p-8 text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Featured collection</div>
          <h3 className="mt-3 font-display text-4xl font-light">The Olive Atelier</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75">
            Earth-toned tailoring, gold accents, and softly structured silhouettes for a premium
            seasonal wardrobe.
          </p>
        </div>
        <div className="rounded-sm border border-border bg-card p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trend report</div>
          <h3 className="mt-3 font-display text-4xl font-light">What’s trending now</h3>
          <ul className="mt-6 space-y-4">
            {[
              "Gold hardware accessories",
              "Relaxed cashmere layers",
              "Statement fragrance edits",
              "Monochrome olive tailoring",
            ].map((trend) => (
              <li key={trend} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0">
                <span className="text-sm">{trend}</span>
                <Star className="h-4 w-4 fill-accent text-accent" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}