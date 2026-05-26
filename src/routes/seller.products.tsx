import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/products")({
  head: () => ({ meta: [{ title: "Seller Products — NovaCartAI" }] }),
  component: SellerProducts,
});

function SellerProducts() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Products</div>
      <h2 className="mt-2 font-display text-3xl">Manage your own products</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Update pricing, imagery, and listing copy for the products in your atelier.
      </p>
    </section>
  );
}