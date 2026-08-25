import { Outlet } from 'react-router'
import TitleProvider from '@/context/title-provider'
import ThemeProvider from '@/context/theme-provider/theme-provider'

function RootLayout() {
  return (
    <>
      <TitleProvider />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default RootLayout
