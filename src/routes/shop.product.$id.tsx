import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Heart, ShoppingBag, Sparkles, Star } from "lucide-react";
import p2 from "@/assets/p2.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";

export const Route = createFileRoute("/shop/product/$id")({
  head: ({ params }) => ({ meta: [{ title: `${params.id} — NovaCartAI` }] }),
  component: ProductDetail,
});

function ProductDetail() {
  const { id } = Route.useParams();

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-18">
        <Link to="/shop/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-luxe)]">
              <img src={p2} alt="Luxury product detail" className="h-[760px] w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">AI spotlight</div>
            <h1 className="mt-3 font-display text-5xl font-light">Solis Gold Watch</h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.9 · 128 reviews
            </div>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
              A sculptural timepiece with brushed gold steel, precise detailing, and a quiet,
              editorial presence. Designed to anchor premium wardrobes with confidence.
            </p>

            <div className="mt-8 rounded-sm border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Why AI selected it</div>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" /> Matches your gold accessory history
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" /> High-fit with your saved handbags and tailoring
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" /> Low return risk, strong repeat-buy pattern
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Price</div>
                <div className="mt-2 font-display text-4xl">$2,890</div>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Product id <div className="mt-1 font-sans text-sm normal-case tracking-normal text-foreground">{id}</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:opacity-90">
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition hover:bg-secondary">
                <Heart className="h-4 w-4" /> Save to wishlist
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[p4, p5].map((img) => (
                <div key={img} className="overflow-hidden rounded-sm border border-border bg-card">
                  <img src={img} alt="Complementary product" className="h-40 w-full object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-sm border border-border bg-primary p-5 text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.24em] text-accent">Concierge note</div>
              <p className="mt-3 text-sm leading-7 text-primary-foreground/75">
                This piece is available for priority checkout and pairs well with a sharp coat,
                sculptural tote, or soft-toned knit.
              </p>
              <Link to="/checkout" className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                Continue to checkout <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}