import { createBrowserRouter } from 'react-router'

import RootLayout from './components/layouts/root-layout'
import HomeLayout from './components/layouts/home-layout'

type Importer = () => Promise<{ default: React.ComponentType }>

const lazyRoute = (importer: Importer) => {
  return async () => {
    const { default: Component } = await importer()
    return { Component }
  }
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        Component: HomeLayout,
        children: [
          {
            id: 'landing',
            path: '/',
            lazy: lazyRoute(() => import('./pages/landing-page')),
          },
          {
            id: 'services',
            path: 'services',
            lazy: lazyRoute(() => import('./pages/services-page')),
          },
          {
            id: 'calculator',
            path: 'calculator',
            lazy: lazyRoute(() => import('./pages/calculator-page')),
          },
          {
            id: 'live-order',
            path: 'live-order',
            lazy: lazyRoute(() => import('./pages/live-order-page')),
          },
          {
            id: 'join-us',
            path: 'join-us',
            lazy: lazyRoute(() => import('./pages/join-us-page')),
          },
        ],
      },
      {
        id: 'call-blast',
        path: 'call-blast',
        lazy: lazyRoute(
          () => import('./pages/call-blast/available-soon-page'),
        ),
      },
      {
        id: 'message-blast',
        path: 'message-blast',
        lazy: lazyRoute(() => import('./pages/message-blast/index-page')),
      },
      {
        id: 'error',
        path: 'error',
        lazy: lazyRoute(() => import('./pages/generic-error-page')),
      },
      {
        id: 'not-found',
        path: '*',
        lazy: lazyRoute(() => import('./pages/not-found-page')),
      },
    ],
  },
])