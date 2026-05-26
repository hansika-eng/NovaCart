import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/products")({
  head: () => ({ meta: [{ title: "Admin Products — NovaCartAI" }] }),
  component: AdminProducts,
});

function AdminProducts() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Catalog control</div>
      <h2 className="mt-2 font-display text-3xl">Manage platform products</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        Review product moderation, visibility, and category alignment across all sellers.
      </p>
    </section>
  );
}