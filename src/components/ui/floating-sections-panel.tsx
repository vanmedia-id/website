import { useState, useEffect } from 'react'
import { List, X, ChevronDown } from 'lucide-react'
import { Button } from './button'

export type FloatingSectionsItem = {
  id: string
  label: string
}

type FloatingSectionsPanelProps = {
  title?: string
  items?: FloatingSectionsItem[]
}

function FloatingSectionsPanel({
  title = document.title,
  items = [],
}: FloatingSectionsPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  // Highlight current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const item of items) {
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const scrollToSection = (id: string) => {
    // Update hash in URL without jumping abruptly
    window.history.pushState(null, '', `#${id}`)

    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })

    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* COLLAPSIBLE TOC PANEL */}
      {isOpen && (
        <div className="mb-3 w-64 sm:w-72 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 shadow-xl backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-3">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <List className="h-4 w-4 text-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {title}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Close table of contents"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Links List */}
          <nav className="space-y-1 max-h-80 overflow-y-auto">
            {items.map((item) => {
              const isActive = activeId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      )}

      {/* FLOATING TOGGLE BUTTON */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
            : 'shadow-primary/20'
        }`}
      >
        <List className="h-4 w-4" />
        <span className="hidden lg:block">Sections</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </Button>
    </div>
  )
}

export { FloatingSectionsPanel }
