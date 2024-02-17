import * as React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout_unauthorize')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <Outlet />
  )
}
