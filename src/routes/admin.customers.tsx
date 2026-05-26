import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({ meta: [{ title: "Admin Customers — NovaCartAI" }] }),
  component: AdminCustomers,
});

function AdminCustomers() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Customers</div>
      <h2 className="mt-2 font-display text-3xl">Customer intelligence</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Review support demand, VIP accounts, and retention signals for the platform.
      </p>
    </section>
  );
}