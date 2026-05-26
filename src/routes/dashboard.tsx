import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Sparkles, Heart, History, TrendingUp, ArrowUpRight, Eye } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your Boutique — NovaCartAI" },
      { name: "description", content: "AI picks, saved pieces and your browsing history." },
    ],
  }),
  component: CustomerDashboard,
});

const aiPicks = [
  { img: p1, name: "Sienna Leather Tote", reason: "Matches your bag history", match: 96 },
  { img: p2, name: "Solis Gold Watch", reason: "Worn by stylists you follow", match: 92 },
  { img: p5, name: "Olive Silk Scarf", reason: "Complements last week's order", match: 88 },
  { img: p4, name: "Amber 07 Eau de Parfum", reason: "Warm notes you love", match: 84 },
];

const saved = [
  { img: p3, name: "Cashmere Crew", price: "$640" },
  { img: p6, name: "Tan Leather Loafers", price: "$890" },
  { img: p5, name: "Olive Silk Scarf", price: "$310" },
];

const history = [
  { img: p2, name: "Solis Gold Watch", time: "2h ago", cat: "Timepieces" },
  { img: p1, name: "Sienna Leather Tote", time: "Yesterday", cat: "Bags" },
  { img: p4, name: "Amber 07", time: "2 days ago", cat: "Fragrance" },
  { img: p6, name: "Tan Loafers", time: "3 days ago", cat: "Footwear" },
  { img: p3, name: "Cashmere Crew", time: "Last week", cat: "Knitwear" },
];

function CustomerDashboard() {
  return (
    <DashboardShell
      title="Good evening, Amara"
      subtitle="Your private boutique"
      user={{ name: "Amara K.", role: "Member · Gold", initials: "AK" }}
    >
      {/* Stat row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { l: "AI Match score", v: "94", sub: "+6 this week", icon: Sparkles },
          { l: "Saved pieces", v: "28", sub: "3 new arrivals", icon: Heart },
          { l: "Browsing minutes", v: "142", sub: "Last 7 days", icon: Eye },
          { l: "Trend alignment", v: "A+", sub: "Top 4% of members", icon: TrendingUp },
        ].map((s) => (
          <div
            key={s.l}
            className="bg-card border border-border rounded-sm p-5 hover:border-accent/50 transition"
          >
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </div>
              <s.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
            </div>
            <div className="font-display text-4xl mt-3">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Picks - wide */}
        <section className="lg:col-span-2 bg-card border border-border rounded-sm p-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">
                The Algorithm
              </div>
              <h2 className="font-display text-2xl mt-1">AI picks for you</h2>
            </div>
            <button className="text-xs border-b border-accent pb-0.5">Refresh edit</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {aiPicks.map((p) => (
              <article
                key={p.name}
                className="group flex gap-4 p-3 rounded-sm hover:bg-secondary transition"
              >
                <div className="h-24 w-20 rounded-sm overflow-hidden shrink-0 bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg truncate">{p.name}</h3>
                    <span className="text-[10px] bg-primary text-accent px-2 py-0.5 rounded-full">
                      {p.match}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{p.reason}</p>
                  <button className="mt-3 text-[10px] uppercase tracking-widest inline-flex items-center gap-1 hover:text-accent">
                    View piece <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Saved */}
        <section className="bg-primary text-primary-foreground rounded-sm p-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Wishlist</div>
              <h2 className="font-display text-2xl mt-1">Saved pieces</h2>
            </div>
            <Heart className="h-4 w-4 text-accent" />
          </div>
          <ul className="space-y-4">
            {saved.map((s) => (
              <li key={s.name} className="flex gap-4 items-center">
                <div className="h-16 w-14 rounded-sm overflow-hidden shrink-0">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-base truncate">{s.name}</div>
                  <div className="text-xs opacity-70">{s.price}</div>
                </div>
                <button className="text-accent text-xs">→</button>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full border border-sidebar-border rounded-full py-2.5 text-xs uppercase tracking-widest hover:bg-sidebar-accent transition">
            View all 28 saved
          </button>
        </section>
      </div>

      {/* Browsing history */}
      <section className="mt-6 bg-card border border-border rounded-sm p-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Recently viewed
            </div>
            <h2 className="font-display text-2xl mt-1 flex items-center gap-3">
              <History className="h-5 w-5 text-accent" strokeWidth={1.5} />
              Browsing history
            </h2>
          </div>
          <button className="text-xs text-muted-foreground hover:text-foreground">Clear</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {history.map((h) => (
            <article key={h.name + h.time} className="group">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-secondary">
                <img
                  src={h.img}
                  alt={h.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {h.cat}
                </div>
                <div className="font-display text-sm truncate">{h.name}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{h.time}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
