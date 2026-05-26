import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/settings")({
  head: () => ({ meta: [{ title: "Seller Settings — NovaCartAI" }] }),
  component: SellerSettings,
});

function SellerSettings() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Settings</div>
      <h2 className="mt-2 font-display text-3xl">Seller settings</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Configure storefront branding, payout settings, and account preferences.
      </p>
    </section>
  );
}