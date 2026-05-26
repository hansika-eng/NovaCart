import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Package, ShoppingCart, Users } from "lucide-react";

export const Route = createFileRoute("/seller/dashboard")({
  head: () => ({ meta: [{ title: "Seller Dashboard — NovaCartAI" }] }),
  component: SellerDashboardRoute,
});

function SellerDashboardRoute() {
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-4">
      {[
        [BarChart3, "Revenue view", "Daily, weekly, and monthly sales momentum."],
        [Package, "Catalog health", "Product readiness and merchandising status."],
        [ShoppingCart, "Orders", "Fulfillment and return trends for your store."],
        [Users, "Customer signals", "Reviews, messages, and repeat purchase behavior."],
      ].map(([Icon, title, description]) => (
        <div key={title as string} className="rounded-sm border border-border bg-card p-5">
          <Icon className="h-5 w-5 text-accent" />
          <div className="mt-4 font-display text-2xl">{title as string}</div>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{description as string}</p>
        </div>
      ))}
    </section>
  );
}