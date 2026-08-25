import { Outlet } from "react-router"
import { Monitor, Moon, Sun } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/components/ui/select"
import { getThemePickerStyles } from "./header-styles"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/theme-provider/use-theme"
import ThemeProvider from "@/context/theme-provider/theme-provider"
import TitleProvider from "@/context/title-provider"

const themes = [
  { value: 'light' , label: 'Light' , icon: Sun    , iconColor: 'text-amber-500'  },
  { value: 'dark'  , label: 'Dark'  , icon: Moon   , iconColor: 'text-indigo-400' },
  { value: 'system', label: 'System', icon: Monitor, iconColor: 'text-slate-400'  },
] as const

function ThemePicker() {
  const { resolvedTheme, theme, setTheme } = useTheme()

  const select = themes.find((item) => item.value === theme)
  const styles = getThemePickerStyles(resolvedTheme)

  return (
    <Select
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value)
      }}
    >
      <SelectTrigger className={cn('h-8 w-16', styles.selectTrigger)}>
        {select?.icon && (
          <select.icon
            className={`!h-3.5 !w-3.5 shrink-0 ${select?.iconColor}`}
          />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {themes.map(({ value, label, icon: Icon, iconColor }) => (
            <SelectItem
              key={value}
              value={value}
              className="cursor-pointer text-xs"
            >
              <div className="flex items-center gap-2">
                <Icon className={`!h-3.5 !w-3.5 shrink-0 ${iconColor}`} />
                <span>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        {/* Left Section: App Logo & Demo Indicator */}
        <div className="flex items-center gap-3">
          {/* Demo Indicator Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            </span>
            Demo
          </span>
        </div>

        {/* Right Section: Theme Picker */}
        <div className="flex items-center gap-2">
          <ThemePicker />
        </div>
      </div>
    </header>
  )
}

function DemoLayout() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <TitleProvider />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default DemoLayout