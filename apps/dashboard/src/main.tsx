import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css"
import "@repo/ui/styles/shared-globals.css"
import { RouterProvider, createRouter, ErrorComponent } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Spinner } from '@/components/spinner/spinner'

export const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <Spinner />
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultPreload: 'intent',
  context: {
    queryClient,
  },
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
