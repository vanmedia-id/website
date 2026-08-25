import './i18n'
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Toaster } from '@/components/ui/sonner'
import { router } from '@/router'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Application */}
    <RouterProvider router={router} />
    <Toaster position="top-center" />
    {/* Deployment Services */}
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
