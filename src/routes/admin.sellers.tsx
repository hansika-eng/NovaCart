import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/admin/sellers")({
  head: () => ({ meta: [{ title: "Admin Sellers — NovaCartAI" }] }),
  component: AdminSellers,
});

function AdminSellers() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Seller approvals</div>
      <h2 className="mt-2 font-display text-3xl">Approve or reject new sellers</h2>
      <div className="mt-6 space-y-4">
        {["Maison Atelier", "North Star Goods", "Olive House"].map((seller, index) => (
          <div key={seller} className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-border p-4">
            <div>
              <div className="font-display text-2xl">{seller}</div>
              <div className="text-sm text-muted-foreground">Pending approval · application #{index + 12}</div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"><CheckCircle2 className="h-4 w-4" /> Approve</button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"><XCircle className="h-4 w-4" /> Reject</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}