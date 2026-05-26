import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, ShieldCheck, Store, Users } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Admin Dashboard — NovaCartAI" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-4">
      {[
        [BarChart3, "Platform analytics", "Revenue, order flow, and conversion patterns."] ,
        [ShieldCheck, "Seller approvals", "Approve or reject sellers before they go live."],
        [Store, "Catalog governance", "Manage products, categories, and compliance."],
        [Users, "Customer health", "Review retention, service issues, and support demand."],
      ].map(([Icon, title, description]) => (
        <div key={title as string} className="rounded-sm border border-border bg-primary p-5 text-primary-foreground">
          <Icon className="h-5 w-5 text-accent" />
          <div className="mt-4 font-display text-2xl">{title as string}</div>
          <p className="mt-2 text-sm leading-7 text-primary-foreground/75">{description as string}</p>
        </div>
      ))}
    </section>
  );
}