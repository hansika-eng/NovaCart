import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Minus, Plus, ShoppingBag } from "lucide-react";
import { CustomerLayout } from "@/components/CustomerLayout";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — NovaCartAI" }] }),
  component: CartPage,
});

function CartPage() {
  return (
    <CustomerLayout>
      <section className="mx-auto max-w-[1100px] px-5 py-14 lg:px-10 lg:py-18">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cart</div>
        <h1 className="mt-3 font-display text-5xl font-light">Your curated basket</h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="rounded-sm border border-border bg-card p-6">
            {["Solis Gold Watch", "Olive Silk Scarf"].map((item, index) => (
              <div key={item} className={`flex items-center justify-between py-5 ${index ? "border-t border-border/60" : ""}`}>
                <div>
                  <div className="font-display text-2xl">{item}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Luxury piece · one size</div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="grid h-9 w-9 place-items-center rounded-full border border-border"><Minus className="h-4 w-4" /></button>
                  <span className="w-6 text-center text-sm">1</span>
                  <button className="grid h-9 w-9 place-items-center rounded-full border border-border"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-sm border border-border bg-primary p-6 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Summary</div>
            <div className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <div className="flex justify-between"><span>Subtotal</span><span>$3,200</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Complimentary</span></div>
              <div className="flex justify-between"><span>AI concierge</span><span>Included</span></div>
            </div>
            <div className="mt-6 border-t border-sidebar-border pt-4 flex justify-between text-lg font-display">
              <span>Total</span>
              <span>$3,200</span>
            </div>
            <Link to="/checkout" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90">
              Proceed to checkout <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </CustomerLayout>
  );
}