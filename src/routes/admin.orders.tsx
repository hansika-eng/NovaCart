import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({ meta: [{ title: "Admin Orders — NovaCartAI" }] }),
  component: AdminOrders,
});

function AdminOrders() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Orders</div>
      <h2 className="mt-2 font-display text-3xl">Platform order management</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Resolve escalations, track shipments, and audit order fulfillment across sellers.
      </p>
    </section>
  );
}