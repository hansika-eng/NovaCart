import { Outlet, createFileRoute } from "@tanstack/react-router";
import { CustomerLayout } from "@/components/CustomerLayout";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [{ title: "Shop — NovaCartAI" }, { name: "description", content: "Luxury AI storefront." }],
  }),
  component: ShopLayout,
});

function ShopLayout() {
  return (
    <CustomerLayout>
      <div className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Shop</div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-primary-foreground/75">
            Explore a luxury storefront shaped by AI recommendations, editorial curation, and
            cinematic product storytelling.
          </p>
        </div>
      </div>
      <Outlet />
    </CustomerLayout>
  );
}