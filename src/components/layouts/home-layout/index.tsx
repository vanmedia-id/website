import { Outlet } from 'react-router'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import {
  Send,
  PhoneCall,
  UserPlus,
  MessageSquare,
  CreditCard,
  Menu,
  Monitor,
  Moon,
  Sun,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Account from '@/assets/strings/account.json'
import Languages from '@/assets/strings/languages.json'
import { cn } from '@/lib/utils'
import { useTheme, type Theme } from '@/context/theme-provider/use-theme'
import { getHeaderStyles } from './header-styles'
import { getFooterStyles } from './footer-styles'
import { Logo } from '@/components/ui/logo'

// prettier-ignore
const links = [
  { to: '/message-blast', key: 'form-message-blast' },
  { to: '/call-blast'   , key: 'form-spam-call'     },
  { to: '/live-order'   , key: 'live-order'         },
  { to: '/calculator'   , key: 'price-calculator'   },
  { to: '/join-us'      , key: 'join-us'            },
] as const

// prettier-ignore
const themes = [
  { value: 'light' , label: 'Light' , icon: Sun    , iconColor: 'text-amber-500'  },
  { value: 'dark'  , label: 'Dark'  , icon: Moon   , iconColor: 'text-indigo-400' },
  { value: 'system', label: 'System', icon: Monitor, iconColor: 'text-slate-400'  },
] as const

function Header() {
  const { t } = useTranslation('home-layout')
  const { resolvedTheme } = useTheme()

  const styles = getHeaderStyles(resolvedTheme)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-200 backdrop-blur',
        styles.header,
      )}
    >
      <div className="container mx-auto flex h-12 items-center justify-between px-6">
        {/* Brand */}
        <Link
          to="/"
          className={cn('flex items-center gap-2', styles.brand)}
        >
          <Logo variant='compact' size='sm' />
        </Link>

        {/* Long Header Menu (Desktop) */}
        <div className="hidden flex-1 justify-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[12px]">
                  {t('navbar.service.title')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={cn(
                      'grid w-[400px] gap-2 p-2 md:w-[480px] md:grid-cols-2',
                      styles.dropdownMenu,
                    )}
                  >
                    <li>
                      <NavigationMenuLink>
                        <Link
                          to="/message-blast"
                          className={cn(
                            'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors',
                            styles.dropdownItem,
                          )}
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none whitespace-nowrap">
                            <Send
                              className={cn('h-4 w-4 shrink-0', styles.icon)}
                            />
                            <span>
                              {t('navbar.service.message-blast.title')}
                            </span>
                          </div>
                          <p
                            className={cn(
                              'line-clamp-2 text-xs leading-snug mt-1.5',
                              styles.dropdownDesc,
                            )}
                          >
                            {t('navbar.service.message-blast.description')}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link
                          to="/call-blast"
                          className={cn(
                            'block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors',
                            styles.dropdownItem,
                          )}
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none whitespace-nowrap">
                            <PhoneCall
                              className={cn('h-4 w-4 shrink-0', styles.icon)}
                            />
                            <span>{t('navbar.service.spam-call.title')}</span>
                          </div>
                          <p
                            className={cn(
                              'line-clamp-2 text-xs leading-snug mt-1.5',
                              styles.dropdownDesc,
                            )}
                          >
                            {t('navbar.service.spam-call.description')}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/live-order">
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'text-[12px]')}
                  >
                    {t('navbar.live-order')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/calculator">
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'text-[12px]')}
                  >
                    {t('navbar.price-calculator')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Join Button */}
        <div className="hidden items-center lg:flex">
          <Button
            variant="link"
            size="sm"
            className={cn('px-4 text-[12px]', styles.joinBtn)}
          >
            <Link to="/join-us" className="inline-flex items-center gap-1.5">
              <UserPlus className="!h-3.5 !w-3.5" />
              <span>{t('navbar.join')}</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className={cn('h-9 w-9', styles.mobileTrigger)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn('w-[300px] sm:w-[350px]', styles.sheetContent)}
            >
              <SheetHeader
                className={cn('text-left border-b pb-4', styles.sheetBorder)}
              >
                <SheetTitle className={cn('text-lg font-bold', styles.brand)}>
                  {t('brand')}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-4 py-4">
                <div className="space-y-2">
                  <span
                    className={cn(
                      'text-xs font-semibold uppercase tracking-wider',
                      styles.sheetSubtext,
                    )}
                  >
                    {t('navbar.service.title')}
                  </span>
                  <div className="flex flex-col space-y-1 pl-2">
                    <Link
                      to="/message-blast"
                      className={cn(
                        'flex items-center gap-2 rounded-md p-2 text-sm transition-colors',
                        styles.sheetLink,
                      )}
                    >
                      <Send className={cn('h-4 w-4 shrink-0', styles.icon)} />
                      <span>{t('navbar.service.message-blast.title')}</span>
                    </Link>
                    <Link
                      to="/call-blast"
                      className={cn(
                        'flex items-center gap-2 rounded-md p-2 text-sm transition-colors',
                        styles.sheetLink,
                      )}
                    >
                      <PhoneCall
                        className={cn('h-4 w-4 shrink-0', styles.icon)}
                      />
                      <span>{t('navbar.service.spam-call.title')}</span>
                    </Link>
                  </div>
                </div>

                <div
                  className={cn('border-t pt-2 space-y-1', styles.sheetBorder)}
                >
                  <Link
                    to="/live-order"
                    className={cn(
                      'block rounded-md p-2 text-sm font-medium transition-colors',
                      styles.sheetLink,
                    )}
                  >
                    {t('navbar.live-order')}
                  </Link>
                  <Link
                    to="/calculator"
                    className={cn(
                      'block rounded-md p-2 text-sm font-medium transition-colors',
                      styles.sheetLink,
                    )}
                  >
                    {t('navbar.price-calculator')}
                  </Link>
                </div>

                <div className="pt-4">
                  <Button
                    className={cn('w-full gap-2 text-sm', styles.sheetCtaBtn)}
                  >
                    <Link
                      to="/join-us"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span>{t('navbar.join')}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  const { t, i18n } = useTranslation('home-layout')
  const { resolvedTheme, theme, setTheme } = useTheme()

  const styles = getFooterStyles(resolvedTheme)

  const account = Account as Record<string, string>
  const languages = Languages as Record<string, string>
  const themepref = themes.find((item) => item.value === theme)

  const supported = (
    (i18n.options.supportedLngs as readonly string[]) ?? []
  ).filter((lang) => lang !== 'cimode')

  const onValueChangeLanguage = (value: string | null) => {
    i18n.changeLanguage(value ?? undefined)
  }

  const onValueChangeTheme = (value: Theme | null) => {
    if (value) setTheme(value)
  }

  return (
    <footer className={styles.footer}>
      {/* Main Content Wrapper */}
      <div className="container mx-auto max-w-5xl px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* 1. Brand Info & Language / Theme Selectors */}
          <div className="flex flex-col space-y-4">
            <div className="space-y-1">
              <Logo variant='compact' size='sm' />
              <p className={`text-xs leading-relaxed ${styles.textMuted}`}>
                {t('footer.brand.caption')}
              </p>
            </div>

            {/* Language & Theme Pickers */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Language Picker */}
              <Select
                value={i18n.language}
                onValueChange={onValueChangeLanguage}
              >
                <SelectTrigger
                  className={`h-8 w-35 text-xs ${styles.selectTrigger}`}
                >
                  <SelectValue>{languages[i18n.language]}</SelectValue>
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                  <SelectGroup>
                    {supported.map((e) => (
                      <SelectItem
                        key={e}
                        value={e}
                        className="cursor-pointer text-xs"
                      >
                        {languages[e]}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Theme Picker */}
              <Select value={theme} onValueChange={onValueChangeTheme}>
                <SelectTrigger className={`h-8 w-16 ${styles.selectTrigger}`}>
                  {themepref?.icon && (
                    <themepref.icon
                      className={`!h-3.5 !w-3.5 shrink-0 ${themepref?.iconColor}`}
                    />
                  )}
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                  <SelectGroup>
                    {themes.map(({ value, label, icon: Icon, iconColor }) => (
                      <SelectItem
                        key={value}
                        value={value}
                        className="cursor-pointer text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <Icon
                            className={`!h-3.5 !w-3.5 shrink-0 ${iconColor}`}
                          />
                          <span>{label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 2. Official Account Info */}
          <div className="space-y-4">
            <span
              className={`block text-xs font-semibold uppercase tracking-wider ${styles.headingSecondary}`}
            >
              {t('footer.account.title')}
            </span>
            <ul className="space-y-3 text-xs">
              <li
                className={`flex items-start gap-2.5 rounded-lg border p-2.5 ${styles.card}`}
              >
                <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <div className="flex flex-col">
                  <span className={`text-[10px] ${styles.textMuted}`}>
                    WhatsApp
                  </span>
                  <span
                    className={`font-mono text-[10px] ${styles.cardTextPrimary}`}
                  >
                    {account['whatsapp']}
                  </span>
                </div>
              </li>
              <li
                className={`flex items-start gap-2.5 rounded-lg border p-2.5 ${styles.card}`}
              >
                <CreditCard className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />
                <div className="flex flex-col">
                  <span className={`text-[10px] ${styles.textMuted}`}>
                    BCA Transfer
                  </span>
                  <span
                    className={`font-mono text-[10px] ${styles.cardTextPrimary}`}
                  >
                    {account['bca-account-number']}
                  </span>
                  <span className={`text-[10px] ${styles.textMuted}`}>
                    a.n. {account['bca-account-name']}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="space-y-4">
            <span
              className={`block text-xs font-semibold uppercase tracking-wider ${styles.headingSecondary}`}
            >
              {t('footer.navigation.title')}
            </span>
            <nav className="flex flex-col space-y-2.5 text-xs">
              {links.map((e) => (
                <Link
                  key={e.to}
                  to={e.to}
                  className={`transition-colors duration-150 ${styles.link}`}
                >
                  {t(`footer.navigation.options.${e.key}`)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Full-width Copyright Bar */}
      <div className={`border-t py-4 text-center text-xs ${styles.bottomBar}`}>
        <div className="container mx-auto px-4">{t('footer.copyright')}</div>
      </div>
    </footer>
  )
}

function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default HomeLayout
