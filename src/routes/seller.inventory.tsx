import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/seller/inventory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/seller/inventory"!</div>
}
