import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import {
  Upload,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Sparkles,
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p5 from "@/assets/p5.jpg";

export const Route = createFileRoute("/seller")({
  head: () => ({
    meta: [
      { title: "Seller Atelier — NovaCartAI" },
      {
        name: "description",
        content: "Upload products, view analytics and AI trend predictions.",
      },
    ],
  }),
  component: SellerDashboard,
});

const salesData = [
  { m: "Jan", v: 18, p: 14 },
  { m: "Feb", v: 22, p: 17 },
  { m: "Mar", v: 28, p: 21 },
  { m: "Apr", v: 26, p: 24 },
  { m: "May", v: 34, p: 28 },
  { m: "Jun", v: 41, p: 32 },
  { m: "Jul", v: 38, p: 36 },
  { m: "Aug", v: 49, p: 41 },
  { m: "Sep", v: 57, p: 46 },
];

const categoryData = [
  { c: "Bags", v: 42 },
  { c: "Watches", v: 31 },
  { c: "Knit", v: 28 },
  { c: "Scarves", v: 22 },
  { c: "Fragrance", v: 18 },
  { c: "Shoes", v: 14 },
];

const trends = [
  { name: "Olive & gold knit", rise: "+184%", note: "Predicted peak in 3 weeks", hot: true },
  { name: "Vintage gold watches", rise: "+96%", note: "Sustained 6-week climb" },
  { name: "Amber fragrance", rise: "+72%", note: "Editorial coverage rising" },
  { name: "Tan structured totes", rise: "+48%", note: "Aligns with your inventory" },
];

const topProducts = [
  { img: p1, name: "Sienna Leather Tote", sold: 142, rev: "$176K" },
  { img: p2, name: "Solis Gold Watch", sold: 89, rev: "$257K" },
  { img: p3, name: "Cashmere Crew", sold: 213, rev: "$136K" },
  { img: p5, name: "Olive Silk Scarf", sold: 178, rev: "$55K" },
];

function SellerDashboard() {
  return (
    <DashboardShell
      title="Atelier overview"
      subtitle="Seller workspace"
      user={{ name: "Maison Luca", role: "Verified Atelier", initials: "ML" }}
    >
      {/* Stat row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { l: "Revenue · Sep", v: "$624K", d: "+18.2%", up: true, icon: DollarSign },
          { l: "Units sold", v: "1,284", d: "+9.4%", up: true, icon: Package },
          { l: "Active buyers", v: "8,920", d: "+12%", up: true, icon: Users },
          { l: "Refund rate", v: "0.8%", d: "-0.3%", up: false, icon: TrendingUp },
        ].map((s) => (
          <div key={s.l} className="bg-card border border-border rounded-sm p-5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </div>
              <s.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
            </div>
            <div className="font-display text-4xl mt-3">{s.v}</div>
            <div
              className={`text-xs mt-1 inline-flex items-center gap-1 ${
                s.up ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {s.up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {s.d}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sales graph */}
        <section className="lg:col-span-2 bg-card border border-border rounded-sm p-6">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Performance
              </div>
              <h2 className="font-display text-2xl mt-1">Sales · last 9 months</h2>
            </div>
            <div className="flex gap-2 text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent" /> Revenue
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" /> Forecast
              </span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.72 0.13 75)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.72 0.13 75)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="olive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.32 0.04 130)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="oklch(0.32 0.04 130)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 4" stroke="oklch(0.85 0.02 85)" />
                <XAxis
                  dataKey="m"
                  stroke="oklch(0.45 0.02 90)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="oklch(0.45 0.02 90)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.97 0.018 85)",
                    border: "1px solid oklch(0.85 0.02 85)",
                    borderRadius: 4,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="p"
                  stroke="oklch(0.32 0.04 130)"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fill="url(#olive)"
                />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="oklch(0.72 0.13 75)"
                  strokeWidth={2.5}
                  fill="url(#gold)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* AI Trend Predictions */}
        <section className="bg-primary text-primary-foreground rounded-sm p-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">
                AI Forecast
              </div>
              <h2 className="font-display text-2xl mt-1">Trend predictions</h2>
            </div>
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <ul className="space-y-5">
            {trends.map((t) => (
              <li key={t.name} className="border-b border-sidebar-border pb-4 last:border-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-display text-lg flex items-center gap-2">
                      {t.name}
                      {t.hot && (
                        <span className="text-[9px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full uppercase tracking-widest">
                          Hot
                        </span>
                      )}
                    </div>
                    <div className="text-xs opacity-70 mt-1">{t.note}</div>
                  </div>
                  <div className="text-accent font-display text-xl shrink-0">{t.rise}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* Upload */}
        <section className="bg-card border border-border rounded-sm p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            New listing
          </div>
          <h2 className="font-display text-2xl mt-1 mb-5">Upload a product</h2>
          <label className="block border-2 border-dashed border-border rounded-sm p-8 text-center cursor-pointer hover:border-accent transition">
            <Upload className="h-8 w-8 mx-auto text-accent" strokeWidth={1.25} />
            <div className="mt-3 font-display text-lg">Drop images here</div>
            <div className="text-xs text-muted-foreground mt-1">PNG · JPG · up to 20MB each</div>
          </label>
          <div className="mt-4 space-y-3">
            <input
              placeholder="Product name"
              className="w-full bg-background border border-border rounded-sm px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Price"
                className="bg-background border border-border rounded-sm px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              <select className="bg-background border border-border rounded-sm px-4 py-2.5 text-sm outline-none focus:border-accent">
                <option>Bags</option>
                <option>Watches</option>
                <option>Knitwear</option>
                <option>Fragrance</option>
              </select>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-full text-sm hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              Publish to atelier <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Top products */}
        <section className="bg-card border border-border rounded-sm p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Bestsellers
          </div>
          <h2 className="font-display text-2xl mt-1 mb-5">Top products</h2>
          <ul className="space-y-4">
            {topProducts.map((p, i) => (
              <li key={p.name} className="flex items-center gap-4">
                <div className="font-display text-2xl text-muted-foreground w-6">
                  0{i + 1}
                </div>
                <div className="h-14 w-12 rounded-sm overflow-hidden bg-secondary shrink-0">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-base truncate">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.sold} sold</div>
                </div>
                <div className="text-sm">{p.rev}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Category breakdown */}
        <section className="bg-card border border-border rounded-sm p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Analytics
          </div>
          <h2 className="font-display text-2xl mt-1 mb-5">By category</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 4" stroke="oklch(0.85 0.02 85)" vertical={false} />
                <XAxis
                  dataKey="c"
                  stroke="oklch(0.45 0.02 90)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="oklch(0.45 0.02 90)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.97 0.018 85)",
                    border: "1px solid oklch(0.85 0.02 85)",
                    borderRadius: 4,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="v" fill="oklch(0.32 0.04 130)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
