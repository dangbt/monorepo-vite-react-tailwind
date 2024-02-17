/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutunauthorizeImport } from './routes/_layout_unauthorize'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutUserIndexImport } from './routes/_layout/user/index'
import { Route as LayoutUserCreateImport } from './routes/_layout/user/create'
import { Route as LayoutUserUserIdImport } from './routes/_layout/user/$userId'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()
const LayoutunauthorizeLoginLazyImport = createFileRoute(
  '/_layout_unauthorize/login',
)()
const LayoutAboutLazyImport = createFileRoute('/_layout/about')()

// Create/Update Routes

const LayoutunauthorizeRoute = LayoutunauthorizeImport.update({
  id: '/_layout_unauthorize',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutunauthorizeLoginLazyRoute = LayoutunauthorizeLoginLazyImport.update(
  {
    path: '/login',
    getParentRoute: () => LayoutunauthorizeRoute,
  } as any,
).lazy(() =>
  import('./routes/_layout_unauthorize/login.lazy').then((d) => d.Route),
)

const LayoutAboutLazyRoute = LayoutAboutLazyImport.update({
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/about.lazy').then((d) => d.Route))

const LayoutUserIndexRoute = LayoutUserIndexImport.update({
  path: '/user/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserCreateRoute = LayoutUserCreateImport.update({
  path: '/user/create',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutUserUserIdRoute = LayoutUserUserIdImport.update({
  path: '/user/$userId',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout_unauthorize': {
      preLoaderRoute: typeof LayoutunauthorizeImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      preLoaderRoute: typeof LayoutAboutLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout_unauthorize/login': {
      preLoaderRoute: typeof LayoutunauthorizeLoginLazyImport
      parentRoute: typeof LayoutunauthorizeImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/$userId': {
      preLoaderRoute: typeof LayoutUserUserIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/create': {
      preLoaderRoute: typeof LayoutUserCreateImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/user/': {
      preLoaderRoute: typeof LayoutUserIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutAboutLazyRoute,
    LayoutIndexLazyRoute,
    LayoutUserUserIdRoute,
    LayoutUserCreateRoute,
    LayoutUserIndexRoute,
  ]),
  LayoutunauthorizeRoute.addChildren([LayoutunauthorizeLoginLazyRoute]),
])

/* prettier-ignore-end */
