import * as React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import Layout from '@/components/layout/layout'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
