import { createBrowserRouter } from 'react-router'

import RootLayout from './components/layouts/root-layout'
import HomeLayout from './components/layouts/home-layout'
import LandingPage from './pages/landing-page'
import NotFoundPage from './pages/not-found-page'
import GenericErrorPage from './pages/generic-error-page'
import ServicesPage from './pages/services-page'
import CalculatorPage from './pages/calculator-page'
import JoinUsPage from './pages/join-us-page'
import LiveOrderPage from './pages/live-order-page'
import AvailableSoonPage from './pages/call-blast/available-soon-page'
import IndexPage from './pages/message-blast/index-page'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            id: 'landing',
            path: '/',
            element: <LandingPage />,
          },
          {
            id: 'services',
            path: 'services',
            element: <ServicesPage />,
          },
          {
            id: 'calculator',
            path: 'calculator',
            element: <CalculatorPage />,
          },
          {
            id: 'live-order',
            path: 'live-order',
            element: <LiveOrderPage />,
          },
          {
            id: 'join-us',
            path: 'join-us',
            element: <JoinUsPage />,
          },
        ],
      },
      {
        id: 'call-blast',
        path: 'call-blast',
        element: <AvailableSoonPage />,
      },
      {
        id: 'message-blast',
        path: 'message-blast',
        element: <IndexPage />,
      },
      {
        id: 'error',
        path: 'error',
        element: <GenericErrorPage />,
      },
      {
        id: 'not-found',
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
