import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({ meta: [{ title: "Admin Analytics — NovaCartAI" }] }),
  component: AdminAnalytics,
});

function AdminAnalytics() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Analytics</div>
      <h2 className="mt-2 font-display text-3xl">Platform analytics</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        View revenue, seller growth, customer cohorts, and operational performance at platform level.
      </p>
    </section>
  );
}