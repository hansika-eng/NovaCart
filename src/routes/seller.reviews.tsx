import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/reviews")({
  head: () => ({ meta: [{ title: "Seller Reviews — NovaCartAI" }] }),
  component: SellerReviews,
});

function SellerReviews() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Reviews</div>
      <h2 className="mt-2 font-display text-3xl">Customer reviews</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Respond to feedback and monitor satisfaction for the products you personally sell.
      </p>
    </section>
  );
}