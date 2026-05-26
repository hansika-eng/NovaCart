import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/orders")({
  head: () => ({ meta: [{ title: "Seller Orders — NovaCartAI" }] }),
  component: SellerOrders,
});

function SellerOrders() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Orders</div>
      <h2 className="mt-2 font-display text-3xl">Your storefront orders</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Track customer purchases, fulfillment, and service requests for your own catalog only.
      </p>
    </section>
  );
}