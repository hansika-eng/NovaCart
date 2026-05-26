import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Heart } from "lucide-react";
import { CustomerLayout } from "@/components/CustomerLayout";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — NovaCartAI" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  return (
    <CustomerLayout>
      <section className="mx-auto max-w-[1100px] px-5 py-14 lg:px-10 lg:py-18">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <Heart className="h-4 w-4 text-accent" /> Wishlist
        </div>
        <h1 className="mt-3 font-display text-5xl font-light">Saved for later</h1>
        <div className="mt-8 rounded-sm border border-border bg-card p-8 text-sm text-muted-foreground">
          Your luxury shortlist is ready. Add more products from the shop or move directly to checkout.
        </div>
        <Link to="/shop/products" className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
          Continue shopping <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </CustomerLayout>
  );
}