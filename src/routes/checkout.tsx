import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Sparkles } from "lucide-react";
import { CustomerLayout } from "@/components/CustomerLayout";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — NovaCartAI" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  return (
    <CustomerLayout>
      <section className="mx-auto max-w-[1100px] px-5 py-14 lg:px-10 lg:py-18">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Checkout</div>
        <h1 className="mt-3 font-display text-5xl font-light">Elegant checkout</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-sm border border-border bg-card p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input placeholder="First name" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
              <input placeholder="Last name" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
              <input placeholder="Email" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent md:col-span-2" />
              <input placeholder="Shipping address" className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent md:col-span-2" />
            </div>
          </div>
          <aside className="rounded-sm border border-border bg-primary p-6 text-primary-foreground">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
              <ShieldCheck className="h-4 w-4" /> Secure payment
            </div>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/75">
              AI-guided checkout with premium fraud protection, concierge support, and luxury order handling.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sidebar-border px-4 py-2 text-xs uppercase tracking-[0.24em]">
              <Sparkles className="h-4 w-4 text-accent" /> AI optimized delivery
            </div>
          </aside>
        </div>
      </section>
    </CustomerLayout>
  );
}