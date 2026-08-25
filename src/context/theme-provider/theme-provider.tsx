import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { ThemeContext, type ResolvedTheme, type Theme } from './use-theme'

const STORAGE_KEY = 'theme'
const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)'

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(SYSTEM_THEME_QUERY).matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme {
  const storedTheme = localStorage.getItem(STORAGE_KEY)

  if (
    storedTheme === 'light' ||
    storedTheme === 'dark' ||
    storedTheme === 'system'
  ) {
    return storedTheme
  }

  return 'system'
}

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)
  const [themeOverride, setThemeOverride] = useState<ResolvedTheme | null>(null)

  const resolvedTheme =
    themeOverride ?? (theme === 'system' ? systemTheme : theme)

  const setTheme = useCallback((theme: Theme) => {
    setThemeState(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(SYSTEM_THEME_QUERY)

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        themeOverride,
        setTheme,
        setThemeOverride,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
