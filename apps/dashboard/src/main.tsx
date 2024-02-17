import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css"
import "@repo/ui/styles/shared-globals.css"
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { getUsers } from './axios'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    getUsers,
  }
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
