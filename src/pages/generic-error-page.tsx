import { useTranslation } from 'react-i18next'

function GenericErrorPage() {
  const { t } = useTranslation('generic-error-page')

  return <div>{t('title')}</div>
}

export default GenericErrorPage
