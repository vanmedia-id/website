import {
  CheckCircle2,
  UserCheck,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  useTheme,
  type ResolvedTheme,
} from '@/context/theme-provider/use-theme'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { TranslationIcon } from '@/components/ui/translation-icon'
import { FloatingSectionsPanel } from '@/components/ui/floating-sections-panel'
import { FragmentAutoScroll } from '@/components/ui/fragment-auto-scroll'
import { HomeSection } from '@/components/layouts/home-layout/home-section'

const whatsappUrl =
  "https://wa.me/yournumberhere?text=Hi,%20I'm%20interested%20in%20joining%20as%20an%20agent!"

const sectionKeys: string[] = [
  'hero',
  'opportunity',
  'requirements',
  'hustle',
  'payout',
  'target',
  'how-to',
  'faq',
  'final',
]

function getPageStyles(theme: ResolvedTheme) {
  switch (theme) {
    case 'light':
      return {
        wrapper:
          'min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white',
        hero: {
          section:
            'relative overflow-hidden border-b border-slate-200 py-20 md:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-white',
        },
        sectionAltBg:
          'py-16 md:py-20 border-b border-slate-200 bg-slate-100/60',
        sectionBorderBg: 'py-16 md:py-20 border-b border-slate-200',
        ctaSectionBg:
          'py-20 md:py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-100/40 via-slate-50 to-white',

        textPrimary: 'text-slate-900',
        textSecondary: 'text-slate-600',
        textMuted: 'text-slate-500',
        gradientText:
          'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500',

        cardBg: 'bg-white border-slate-200 shadow-xs hover:border-slate-300',
        listCardBg: 'bg-slate-100/70 border-slate-200/80',
        payoutBannerBg:
          'bg-gradient-to-br from-white via-slate-50 to-slate-100 border-emerald-500/30 shadow-sm',
        payoutBoxBg: 'bg-white border-slate-200',

        badge: 'border-emerald-500/30 bg-emerald-50 text-emerald-700',
        badgePayout: 'bg-emerald-100 text-emerald-700 border-emerald-500/30',
        ctaButton:
          'bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-600/10',

        accordionItem: 'border-slate-200 bg-white shadow-xs',
        accordionTrigger: 'text-slate-800 hover:text-emerald-600',
      }

    case 'dark':
    default:
      return {
        wrapper:
          'min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950',

        hero: {
          section:
            'relative overflow-hidden border-b border-slate-800/80 py-20 md:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950',
        },
        sectionAltBg:
          'py-16 md:py-20 border-b border-slate-800/60 bg-slate-900/30',
        sectionBorderBg: 'py-16 md:py-20 border-b border-slate-800/60',
        ctaSectionBg:
          'py-20 md:py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950 to-slate-950',

        textPrimary: 'text-white',
        textSecondary: 'text-slate-300',
        textMuted: 'text-slate-400',
        gradientText:
          'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200',

        cardBg: 'bg-slate-900/80 border-slate-800 hover:border-slate-700',
        listCardBg: 'bg-slate-900/40 border-slate-800/80',
        payoutBannerBg:
          'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 border-emerald-500/20',
        payoutBoxBg: 'bg-slate-950/80 border-slate-800',

        badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
        badgePayout: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        ctaButton:
          'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/10',

        accordionItem: 'border-slate-800 bg-slate-900/50',
        accordionTrigger: 'text-slate-200 hover:text-emerald-400',
      }
  }
}

function JoinUsButton() {
  const { t } = useTranslation('join-us-page')

  return (
    <Button
      size="sm"
      className="h-10 w-full px-4 text-xs sm:h-12 sm:w-auto sm:px-6 sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-600/10"
    >
      <Link
        to={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2"
      >
        <MessageSquare className="h-4 w-4 shrink-0" />
        <span>{t('action.join-us')}</span>
      </Link>
    </Button>
  )
}

function JoinNowButton() {
  const { t } = useTranslation('join-us-page')

  return (
    <Button
      size="sm"
      className="h-10 w-full px-4 text-xs sm:h-12 sm:w-auto sm:px-6 sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-600/10"
    >
      <Link
        to={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2"
      >
        <span>{t('action.join-now')}</span>
        <ArrowRight className="h-4 w-4 shrink-0" />
      </Link>
    </Button>
  )
}

function Hero() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto flex flex-col items-center text-center gap-6 px-8 py-10 lg:gap-8 lg:px-16 lg:py-30">
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm border font-semibold rounded-full ${styles.badge}`}
      >
        <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
        <span>{t('hero.badge')}</span>
      </div>

      <p
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] ${styles.textPrimary}`}
      >
        {t('hero.heading.l1')} <br />
        <span className={styles.gradientText}>{t('hero.heading.l2')}</span>
      </p>

      <p
        className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${styles.textMuted}`}
      >
        {t('hero.caption')}
      </p>

      <JoinUsButton />
    </div>
  )
}

function Opportunity() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-4xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="text-center mb-10">
        <span>{t('opportunity.heading')}</span>
        <p
          className={`text-sm sm:text-base leading-relaxed mb-10 max-w-3xl mx-auto ${styles.textSecondary}`}
        >
          {t('opportunity.caption.p1')}{' '}
          <span className="text-emerald-500 font-medium">
            {t('opportunity.caption.e1')}
          </span>{' '}
          {t('opportunity.caption.p2')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {(
          t('opportunity.content', {
            returnObjects: true,
          }) as Array<{ $icon: string; title: string; description: string }>
        ).map((item, idx) => (
          <Card
            key={idx}
            className={`flex flex-col justify-between ${styles.cardBg}`}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0">
                  <TranslationIcon
                    name={item.$icon}
                    className="h-5 w-5 text-emerald-500"
                  />
                </div>
                <span
                  className={`text-base font-semibold ${styles.textPrimary}`}
                >
                  {item.title}
                </span>
              </div>
            </CardHeader>
            <CardContent
              className={`p-5 pt-0 text-sm leading-relaxed ${styles.textMuted}`}
            >
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Requirements() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-5xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="text-center mb-10">
        <span>{t('requirements.heading')}</span>
        <p className={`text-sm sm:text-base ${styles.textMuted}`}>
          {t('requirements.caption')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(
          t('requirements.content', {
            returnObjects: true,
          }) as Array<{ $icon: string; title: string; description: string }>
        ).map((item, idx) => (
          <Card
            key={idx}
            className={`transition flex flex-col justify-between ${styles.cardBg}`}
          >
            <CardHeader className="p-5 pb-2">
              <TranslationIcon
                name={item.$icon}
                className="h-6 w-6 text-emerald-500 mb-3"
              />
              <span
                className={`text-base font-semibold block ${styles.textPrimary}`}
              >
                {item.title}
              </span>
            </CardHeader>
            <CardContent
              className={`p-5 pt-0 text-xs sm:text-sm leading-relaxed ${styles.textMuted}`}
            >
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Hustle() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-3xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="inline-flex items-center justify-center p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-4 text-emerald-500">
        <TranslationIcon name={t('hustle.$icon')} className="h-5 w-5" />
      </div>
      <span
        className={`block text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${styles.textPrimary}`}
      >
        {t('hustle.heading')}
      </span>
      <p
        className={`text-base leading-relaxed max-w-2xl mx-auto ${styles.textSecondary}`}
      >
        {t('hustle.caption')}
      </p>
    </div>
  )
}

function Payout() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-4xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div
        className={`rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 ${styles.payoutBannerBg}`}
      >
        <div className="space-y-3 text-center md:text-left max-w-lg">
          <Badge
            className={`px-2.5 py-0.5 text-xs font-semibold ${styles.badgePayout}`}
          >
            {t('payout.badge')}
          </Badge>
          <span
            className={`block text-2xl sm:text-3xl font-bold tracking-tight ${styles.textPrimary}`}
          >
            {t('payout.heading')}
          </span>
          <p className={`text-sm leading-relaxed ${styles.textSecondary}`}>
            {t('payout.caption.p1')}
            <strong className="text-emerald-500 font-semibold">
              {t('payout.caption.e1')}
            </strong>
            {t('payout.caption.p2')}
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col gap-3 min-w-[220px]">
          {(
            t('payout.content', {
              returnObjects: true,
            }) as Array<{ $icon: string; param: string; value: string }>
          ).map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-3.5 flex items-center gap-3 ${styles.payoutBoxBg}`}
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                <TranslationIcon
                  name={item.$icon}
                  className="h-5 w-5 text-emerald-500"
                />
              </div>
              <div>
                <span
                  className={`block text-[11px] uppercase tracking-wider font-medium ${styles.textMuted}`}
                >
                  {item.param}
                </span>
                <span
                  className={`block text-xs font-semibold ${styles.textPrimary}`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Target() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-4xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* What You Need */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle2 className="text-emerald-500 h-5 w-5 shrink-0" />
            <span className={`text-xl font-bold ${styles.textPrimary}`}>
              {t('target.needs.heading')}
            </span>
          </div>
          <ul className="space-y-2.5">
            {(
              t('target.needs.content', { returnObjects: true }) as string[]
            ).map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-3 text-sm px-3.5 py-3 rounded-xl border ${styles.listCardBg} ${styles.textSecondary}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who Is This For */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <UserCheck className="text-emerald-500 h-5 w-5 shrink-0" />
            <span className={`text-xl font-bold ${styles.textPrimary}`}>
              {t('target.audience.heading')}
            </span>
          </div>
          <div className="space-y-2.5">
            {(
              t('target.audience.content', {
                returnObjects: true,
              }) as Array<{
                $icon: string
                title: string
                description: string
              }>
            ).map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-3.5 p-3.5 border rounded-xl items-start ${styles.listCardBg}`}
              >
                <TranslationIcon
                  name={item.$icon}
                  className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5"
                />
                <div>
                  <span
                    className={`block font-semibold text-xs sm:text-sm ${styles.textPrimary}`}
                  >
                    {item.title}
                  </span>
                  <p
                    className={`text-xs mt-0.5 leading-relaxed ${styles.textMuted}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function HowTo() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-3xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="text-center mb-10">
        <span>{t('how-to.heading')}</span>
        <p className={`text-sm sm:text-base mb-10 ${styles.textMuted}`}>
          {t('how-to.caption')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {(
          t('how-to.steps', {
            returnObjects: true,
          }) as Array<{ title: string; description: string }>
        ).map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center border p-5 rounded-xl ${styles.listCardBg}`}
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 mb-3 text-sm">
              {idx + 1}
            </div>
            <span
              className={`block font-semibold text-sm mb-1 ${styles.textPrimary}`}
            >
              {step.title}
            </span>
            <p className={`text-xs leading-relaxed ${styles.textMuted}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <JoinUsButton />
    </div>
  )
}

function Faq() {
  const { t } = useTranslation('join-us-page')
  const { resolvedTheme } = useTheme()

  const styles = getPageStyles(resolvedTheme)

  return (
    <div className="container mx-auto max-w-2xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="text-center mb-10">
        <TranslationIcon
          name={t('faq.$icon')}
          className="h-7 w-7 text-emerald-500 mx-auto mb-4"
        />
        <span>{t('faq.heading')}</span>
      </div>

      <Accordion className="w-full space-y-3">
        {(
          t('faq.content', { returnObjects: true }) as Array<{
            q: string
            a: string
          }>
        ).map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className={`border rounded-xl px-4 py-0.5 ${styles.accordionItem}`}
          >
            <AccordionTrigger
              className={`text-sm font-medium py-3.5 text-left ${styles.accordionTrigger}`}
            >
              {faq.q}
            </AccordionTrigger>
            <AccordionContent
              className={`text-xs sm:text-sm leading-relaxed pb-3.5 ${styles.textMuted}`}
            >
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

function Final() {
  const { t } = useTranslation('join-us-page')

  return (
    <div className="container mx-auto max-w-3xl space-y-6 px-8 py-10 lg:space-y-12 lg:px-16 lg:py-20">
      <div className="space-y-2">
        <span
          className={`block text-2xl sm:text-3xl font-bold tracking-tight text-primary-foreground`}
        >
          {t('final.heading')}
        </span>
        <p className={`text-base mb-8 text-muted`}>{t('final.caption')}</p>
      </div>
      <JoinNowButton />
    </div>
  )
}

function JoinUsPage() {
  const { t } = useTranslation('join-us-page')
  const items = sectionKeys.map((e) => ({ id: e, label: t(`sections.${e}`) }))

  return (
    <FragmentAutoScroll>
      <div className="min-h-screen antialiased scroll-smooth transition-colors duration-200">
        <FloatingSectionsPanel items={items} />
        <HomeSection id="hero" className="border-b">
          <Hero />
        </HomeSection>
        <HomeSection id="opportunity" className="border-b">
          <Opportunity />
        </HomeSection>
        <HomeSection id="requirements" className="border-b">
          <Requirements />
        </HomeSection>
        <HomeSection id="hustle" className="border-b">
          <Hustle />
        </HomeSection>
        <HomeSection id="payout" className="border-b">
          <Payout />
        </HomeSection>
        <HomeSection id="target" className="border-b">
          <Target />
        </HomeSection>
        <HomeSection id="how-to" className="border-b">
          <HowTo />
        </HomeSection>
        <HomeSection id="faq" className="border-b">
          <Faq />
        </HomeSection>
        <HomeSection id="final" className="border-0">
          <Final />
        </HomeSection>
      </div>
    </FragmentAutoScroll>
  )
}

export default JoinUsPage
