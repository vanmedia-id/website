import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import {
  Smartphone,
  Send,
  PhoneCall,
  Activity,
  Calculator,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useTheme } from '@/context/theme-provider/use-theme'
import { FloatingSectionsPanel } from '@/components/ui/floating-sections-panel'
import { FragmentAutoScroll } from '@/components/ui/fragment-auto-scroll'
import { HomeSection } from '@/components/layouts/home-layout/home-section'

type FeatureVariant = 'primary' | 'emerald' | 'amber'

const SECTION_IDS = ['hero', 'feature', 'faq']

// prettier-ignore
const FEATURE_CONFIGS = [
  { icon: Send      , variant: 'primary', route: '/message-blast' },
  { icon: PhoneCall , variant: 'primary', route: '/call-blast'    },
  { icon: Activity  , variant: 'emerald', route: '/live-order'    },
  { icon: Calculator, variant: 'amber'  , route: '/calculator'    },
] as Array<{ icon: typeof Send, variant: FeatureVariant, route: string }>

function getFeatureVariantStyles(
  variant: FeatureVariant,
  resolvedTheme?: string,
) {
  switch (resolvedTheme) {
    case 'dark':
      switch (variant) {
        case 'primary':
          return { bg: 'bg-emerald-950/60', color: 'text-emerald-400' }
        case 'emerald':
          return { bg: 'bg-emerald-950/60', color: 'text-emerald-400' }
        case 'amber':
          return { bg: 'bg-amber-950/60', color: 'text-amber-400' }
      }
      break

    case 'light':
    default:
      switch (variant) {
        case 'primary':
          return { bg: 'bg-emerald-100', color: 'text-emerald-700' }
        case 'emerald':
          return { bg: 'bg-emerald-100', color: 'text-emerald-700' }
        case 'amber':
          return { bg: 'bg-amber-100', color: 'text-amber-700' }
      }
      break
  }
}

function getPageStyles(resolvedTheme?: string) {
  const featureItems = FEATURE_CONFIGS.map(({ variant, ...feature }) => {
    const { bg, color } = getFeatureVariantStyles(variant, resolvedTheme)
    return {
      ...feature,
      iconBg: bg,
      iconColor: color,
    }
  })

  switch (resolvedTheme) {
    case 'dark':
      return {
        wrapper:
          'min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950',
        hero: {
          section:
            'relative overflow-hidden border-b border-slate-800/80 py-20 md:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950',
          badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
          caption: 'text-slate-400',
        },
        gradientText:
          'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200',
        features: {
          section:
            'py-16 md:py-20 border-b border-slate-800/60 bg-slate-900/30',
          caption: 'text-slate-400',
          card: 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xs',
          description: 'text-slate-400',
          items: featureItems,
        },
        faq: {
          section: 'py-16 md:py-20 border-b border-slate-800/60',
          caption: 'text-slate-400',
          accordionItem: 'border-slate-800 bg-slate-900/50',
          accordionTrigger: 'text-slate-200 hover:text-emerald-400',
          accordionContent: 'text-slate-400',
        },
      }

    case 'light':
    default:
      return {
        wrapper:
          'min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white',
        hero: {
          section:
            'relative overflow-hidden border-b border-slate-200 py-20 md:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-white',
          badge: 'border-emerald-500/30 bg-emerald-50 text-emerald-700',
          caption: 'text-slate-600',
        },
        gradientText:
          'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500',
        features: {
          section: 'py-16 md:py-20 border-b border-slate-200 bg-slate-100/60',
          caption: 'text-slate-500',
          card: 'bg-white border-slate-200 shadow-xs hover:border-slate-300',
          description: 'text-slate-500',
          items: featureItems,
        },
        faq: {
          section: 'py-16 md:py-20 border-b border-slate-200',
          caption: 'text-slate-500',
          accordionItem: 'border-slate-200 bg-white shadow-xs',
          accordionTrigger: 'text-slate-800 hover:text-emerald-600',
          accordionContent: 'text-slate-600',
        },
      }
  }
}

function Hero() {
  const { t } = useTranslation('landing-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto flex flex-col items-center text-center gap-6 px-8 py-10 lg:gap-8 lg:px-16 lg:py-30">
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${styles.hero.badge}`}
      >
        <Smartphone className="h-4 w-4 shrink-0 text-emerald-500" />
        <span>{t('hero.phone-badge')}</span>
      </div>

      <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]">
        {t('hero.heading.prefix')}
        <br />
        <span className={styles.gradientText}>
          {t('hero.heading.emphasis')}
        </span>{' '}
        {t('hero.heading.suffix')}
      </p>

      <p
        className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${styles.hero.caption}`}
      >
        {t('hero.caption')}
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4 mt-2">
        <Button
          size="sm"
          className="h-10 w-full px-4 text-xs sm:h-12 sm:w-auto sm:px-6 sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-600/10"
        >
          <Link
            to="/join-us"
            className="inline-flex items-center justify-center gap-2"
          >
            <span>{t('hero.action.join-now')}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-10 w-full px-4 text-xs sm:h-12 sm:w-auto sm:px-6 sm:text-sm border-slate-300 dark:border-slate-800"
        >
          <Link
            to="/calculator"
            className="inline-flex items-center justify-center"
          >
            {t('hero.action.service-price-check')}
          </Link>
        </Button>
      </div>
    </div>
  )
}

function Feature() {
  const { t } = useTranslation('landing-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-7xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="text-center">
        <span>{t('feature.heading')}</span>
        <p className={`text-sm sm:text-base ${styles.features.caption}`}>
          {t('feature.caption')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {styles.features.items.map(
          ({ icon: Icon, iconBg, iconColor, route }, index) => (
            <Card
              key={route}
              className={`flex flex-col justify-between p-5 transition-all ${styles.features.card}`}
            >
              <div className="space-y-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 ${iconBg} ${iconColor}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-base font-semibold">
                    {t(`feature.options.${index}.title`)}
                  </CardTitle>
                  <CardDescription
                    className={`text-xs sm:text-sm leading-relaxed ${styles.features.description}`}
                  >
                    {t(`feature.options.${index}.description`)}
                  </CardDescription>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="mt-6 w-full text-xs"
              >
                <Link
                  to={route}
                  className="flex w-full items-center justify-between"
                >
                  <span>{t(`feature.options.${index}.action`)}</span>
                  <ChevronRight className="h-4 w-4 shrink-0" />
                </Link>
              </Button>
            </Card>
          ),
        )}
      </div>
    </div>
  )
}

function Faq() {
  const { t } = useTranslation('landing-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)
  const content = t('faq.content', { returnObjects: true })

  return (
    <div className="container mx-auto max-w-3xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="text-center">
        <span>{t('faq.heading')}</span>
        <p className={`text-sm sm:text-base ${styles.faq.caption}`}>
          {t('faq.caption')}
        </p>
      </div>

      <Accordion className="w-full space-y-3">
        {(content as Array<{ q: string; a: string }>).map((e, index) => (
          <AccordionItem
            key={index}
            value={String(index)}
            className={`border rounded-xl px-4 py-0.5 ${styles.faq.accordionItem}`}
          >
            <AccordionTrigger
              className={`text-sm font-medium py-3.5 text-left ${styles.faq.accordionTrigger}`}
            >
              {e.q}
            </AccordionTrigger>
            <AccordionContent
              className={`text-xs sm:text-sm leading-relaxed pb-3.5 ${styles.faq.accordionContent}`}
            >
              {e.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

function LandingPage() {
  const { t } = useTranslation('landing-page')
  const items = SECTION_IDS.map((e) => ({ id: e, label: t(`sections.${e}`) }))

  return (
    <FragmentAutoScroll>
      <div className="min-h-screen antialiased scroll-smooth transition-colors duration-200">
        <FloatingSectionsPanel items={items} />
        <HomeSection id="hero" className="border-b">
          <Hero />
        </HomeSection>
        <HomeSection id="feature" className="border-b">
          <Feature />
        </HomeSection>
        <HomeSection id="faq" className="border-0">
          <Faq />
        </HomeSection>
      </div>
    </FragmentAutoScroll>
  )
}

export default LandingPage
