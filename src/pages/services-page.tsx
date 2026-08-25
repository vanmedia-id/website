import { useTheme } from '@/context/theme-provider/use-theme'
import { useTranslation } from 'react-i18next'

function ServicesPage() {
  useTheme().setTheme('light')
  const { t } = useTranslation('services-page')

  return <div>{t('title')}</div>
}

export default ServicesPage
