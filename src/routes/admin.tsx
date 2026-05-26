import { Outlet, createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { LayoutDashboard, ShieldCheck, Store, Users, Package, Shapes, ChartColumnBig, Settings } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Console — NovaCartAI" }] }),
  component: AdminLayout,
});

const adminNavItems = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/dashboard", label: "Dashboard", icon: ChartColumnBig },
  { to: "/admin/sellers", label: "Sellers", icon: Store },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/orders", label: "Orders", icon: ShieldCheck },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/categories", label: "Categories", icon: Shapes },
  { to: "/admin/analytics", label: "Analytics", icon: ChartColumnBig },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

function AdminLayout() {
  return (
    <DashboardShell
      title="Platform control"
      subtitle="Admin console"
      user={{ name: "Platform Ops", role: "System Administrator", initials: "AD" }}
      navItems={adminNavItems}
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Pending sellers", "18", "+4 today"],
          ["Platform orders", "1,482", "99.4% fulfillment"],
          ["Managed customers", "28.4K", "Active this month"],
          ["Platform GMV", "$4.8M", "+16.8%"],
        ].map(([label, value, note]) => (
          <div key={label} className="rounded-sm border border-border bg-card p-5">
            <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
            <div className="mt-3 font-display text-4xl">{value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{note}</div>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-sm border border-border bg-card p-6">
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Platform view</div>
        <h2 className="mt-2 font-display text-3xl">Manage sellers, customers, and platform health</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          The admin workspace has full-platform visibility for approvals, governance, category
          control, and analytics. Use the child routes for dedicated operational views.
        </p>
      </section>

      <Outlet />
    </DashboardShell>
  );
}