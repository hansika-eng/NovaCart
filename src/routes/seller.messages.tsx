import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/messages")({
  head: () => ({ meta: [{ title: "Seller Messages — NovaCartAI" }] }),
  component: SellerMessages,
});

function SellerMessages() {
  return (
    <section className="mt-6 rounded-sm border border-border bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Messages</div>
      <h2 className="mt-2 font-display text-3xl">Customer messages</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Reply to pre-sale questions and after-purchase support from your customer inbox.
      </p>
    </section>
  );
}