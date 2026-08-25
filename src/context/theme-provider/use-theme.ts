import { createContext, useContext, useEffect } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export type ResolvedTheme = 'light' | 'dark'

export interface ThemeContextValue {
  theme: Theme
  resolvedTheme: ResolvedTheme
  themeOverride: ResolvedTheme | null
  setTheme: (theme: Theme) => void
  setThemeOverride: (theme: ResolvedTheme | null) => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function useThemeOverride(theme: ResolvedTheme) {
  const { setThemeOverride } = useTheme()

  useEffect(() => {
    setThemeOverride(theme)
    return () => {
      setThemeOverride(null)
    }
  }, [theme, setThemeOverride])
}
