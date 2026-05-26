import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Admin Settings — NovaCartAI" }] }),
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Settings</div>
      <h2 className="mt-2 font-display text-3xl">Platform settings</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Configure security, brand settings, notifications, and admin permissions.
      </p>
    </section>
  );
}