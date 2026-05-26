import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Filter, Search, Sparkles } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/shop/products")({
  head: () => ({ meta: [{ title: "Products — NovaCartAI" }] }),
  component: ShopProducts,
});

const products = [
  { img: p1, name: "Sienna Leather Tote", cat: "Bags", price: "$1,240" },
  { img: p2, name: "Solis Gold Watch", cat: "Timepieces", price: "$2,890" },
  { img: p3, name: "Cashmere Crew", cat: "Knitwear", price: "$640" },
  { img: p4, name: "Amber 07 Eau de Parfum", cat: "Fragrance", price: "$210" },
  { img: p5, name: "Olive Silk Scarf", cat: "Accessories", price: "$310" },
  { img: p6, name: "Tan Leather Loafers", cat: "Shoes", price: "$890" },
];

function ShopProducts() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-18">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Catalog</div>
            <h1 className="mt-3 font-display text-5xl font-light">Luxury products</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.24em]">
              <Search className="h-4 w-4" /> Search
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.24em]">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-accent">{product.cat}</div>
                  <div className="mt-2 font-display text-3xl">{product.name}</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="text-sm text-muted-foreground">AI matched</div>
                <div className="font-display text-xl">{product.price}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between rounded-sm border border-border bg-primary px-6 py-4 text-primary-foreground">
          <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
            <Sparkles className="h-4 w-4 text-accent" /> Refined recommendations based on browsing, saves, and recent orders.
          </div>
          <Link to="/shop/product/solis-gold-watch" className="inline-flex items-center gap-2 text-sm text-accent">
            Explore spotlight <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}