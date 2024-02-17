import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/about')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome about!</h3>
    </div>
  )
}