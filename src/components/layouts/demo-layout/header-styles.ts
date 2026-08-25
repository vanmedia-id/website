import type { ResolvedTheme } from "@/context/theme-provider/use-theme"

// prettier-ignore
export function getThemePickerStyles(theme: ResolvedTheme) {
  switch (theme) {
    case 'dark':
      return {
        selectTrigger: 'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800',
      }

    case 'light':
    default:
      return {
        selectTrigger: 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100',
      }
  }
}