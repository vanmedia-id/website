import type { ResolvedTheme } from '@/context/theme-provider/use-theme'

export function getHeaderStyles(theme: ResolvedTheme) {
  switch (theme) {
    case 'dark':
      return {
        header: 'border-slate-800 bg-slate-950/80 text-slate-100',
        brand: 'text-emerald-400',
        icon: 'text-emerald-400',
        dropdownMenu: 'bg-slate-900 text-slate-100',
        dropdownItem:
          'hover:bg-slate-800 hover:text-emerald-400 text-slate-100',
        dropdownDesc: 'text-slate-400',
        joinBtn: 'text-emerald-400 hover:text-emerald-300',
        mobileTrigger: 'text-slate-100 hover:bg-slate-800',
        sheetContent: 'bg-slate-950 border-slate-800 text-slate-100',
        sheetBorder: 'border-slate-800',
        sheetLink: 'hover:bg-slate-800 text-slate-200',
        sheetSubtext: 'text-slate-400',
        sheetCtaBtn:
          'bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold',
      }

    case 'light':
    default:
      return {
        header: 'border-slate-200 bg-white/80 text-slate-900',
        brand: 'text-primary',
        icon: 'text-primary',
        dropdownMenu: 'bg-white text-slate-900',
        dropdownItem:
          'hover:bg-accent hover:text-accent-foreground text-slate-900',
        dropdownDesc: 'text-muted-foreground',
        joinBtn: '',
        mobileTrigger: '',
        sheetContent: 'bg-white border-slate-200 text-slate-900',
        sheetBorder: 'border-slate-200',
        sheetLink: 'hover:bg-accent text-slate-900',
        sheetSubtext: 'text-muted-foreground',
        sheetCtaBtn: '',
      }
  }
}
