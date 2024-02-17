import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout_unauthorize/login')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome login!</h3>
    </div>
  )
}