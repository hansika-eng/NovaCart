import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Package } from "lucide-react";
import { CustomerLayout } from "@/components/CustomerLayout";

export const Route = createFileRoute("/orders")({
  head: () => ({ meta: [{ title: "Orders — NovaCartAI" }] }),
  component: OrdersPage,
});

function OrdersPage() {
  return (
    <CustomerLayout>
      <section className="mx-auto max-w-[1100px] px-5 py-14 lg:px-10 lg:py-18">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Orders</div>
        <h1 className="mt-3 font-display text-5xl font-light">Your order history</h1>
        <div className="mt-8 space-y-4">
          {[
            ["Solis Gold Watch", "Delivered", "$2,890"],
            ["Cashmere Crew", "In transit", "$640"],
          ].map(([name, status, price]) => (
            <div key={name} className="flex items-center justify-between rounded-sm border border-border bg-card p-5">
              <div>
                <div className="font-display text-2xl">{name}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><Package className="h-4 w-4" /> {status}</div>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl">{price}</div>
                <div className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground"><Clock3 className="h-3 w-3" /> 2 weeks ago</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </CustomerLayout>
  );
}