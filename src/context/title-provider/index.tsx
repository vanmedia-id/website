import { useMatches } from 'react-router'
import { useTranslation } from 'react-i18next'

function TitleProvider() {
  const { t } = useTranslation('title-provider')
  const matches = useMatches()

  const routeId = matches.at(-1)?.id
  const defaultValue = t('_defaultValue')
  const title = routeId ? t(routeId, defaultValue) : defaultValue

  return <title>{title}</title>
}

export default TitleProvider
