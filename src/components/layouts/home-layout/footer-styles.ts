import type { ResolvedTheme } from '@/context/theme-provider/use-theme'

export function getFooterStyles(theme: ResolvedTheme) {
  switch (theme) {
    case 'dark':
      return {
        footer: 'bg-slate-900 text-slate-300',
        headingPrimary: 'text-white',
        headingSecondary: 'text-slate-100',
        textMuted: 'text-slate-400',
        selectTrigger:
          'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800',
        selectContent: 'border-slate-700 bg-slate-800 text-slate-200',
        card: 'border-slate-800/80 bg-slate-800/40',
        cardTextPrimary: 'text-white',
        link: 'text-slate-400 hover:text-white',
        bottomBar: 'border-slate-800/80 bg-slate-950/40 text-slate-500',
      }

    case 'light':
    default:
      return {
        footer: 'bg-slate-100 text-slate-600 border-t border-slate-200',
        headingPrimary: 'text-slate-900',
        headingSecondary: 'text-slate-800',
        textMuted: 'text-slate-500',
        selectTrigger:
          'border-slate-300 bg-white text-slate-800 hover:bg-slate-100',
        selectContent: 'border-slate-200 bg-white text-slate-800',
        card: 'border-slate-200 bg-white shadow-xs',
        cardTextPrimary: 'text-slate-900',
        link: 'text-slate-600 hover:text-slate-900',
        bottomBar: 'border-slate-300 bg-slate-200/60 text-slate-500',
      }
  }
}
