import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingBag, LayoutDashboard, Store, Bell, Search, Home } from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard", label: "Customer", icon: LayoutDashboard },
  { to: "/seller", label: "Seller", icon: Store },
];

export function DashboardShell({
  title,
  subtitle,
  user,
  children,
}: {
  title: string;
  subtitle: string;
  user: { name: string; role: string; initials: string };
  children: ReactNode;
}) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 bg-primary text-primary-foreground flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-sm bg-accent grid place-items-center">
              <ShoppingBag className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl">
                Nova<span className="text-gold">CartAI</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-60">Atelier</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <div className="text-[10px] uppercase tracking-[0.25em] opacity-50 px-3 mb-3">
            Workspace
          </div>
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-sidebar-accent text-primary-foreground/80"
                }`}
              >
                <n.icon className="h-4 w-4" strokeWidth={1.5} />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground grid place-items-center font-display">
              {user.initials}
            </div>
            <div className="text-sm">
              <div>{user.name}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">{user.role}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
          <div className="px-6 lg:px-10 py-5 flex items-center justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {subtitle}
              </div>
              <h1 className="font-display text-3xl mt-1 font-light">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 border border-border rounded-full px-4 py-2 bg-card w-72">
                <Search className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                <input
                  placeholder="Search anything"
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
              <button className="h-10 w-10 rounded-full bg-card border border-border grid place-items-center relative">
                <Bell className="h-4 w-4" strokeWidth={1.5} />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent" />
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
