import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/categories")({
  head: () => ({ meta: [{ title: "Admin Categories — NovaCartAI" }] }),
  component: AdminCategories,
});

function AdminCategories() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Categories</div>
      <h2 className="mt-2 font-display text-3xl">Category governance</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Maintain the luxury taxonomy for bags, ready-to-wear, watches, fragrance, and more.
      </p>
    </section>
  );
}