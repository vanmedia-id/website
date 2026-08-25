import { useTheme } from '@/context/theme-provider/use-theme'
import { useTranslation } from 'react-i18next'

function LiveOrderPage() {
  useTheme().setTheme('light')
  const { t } = useTranslation('live-order-page')

  return <div>{t('title')}</div>
}

export default LiveOrderPage
