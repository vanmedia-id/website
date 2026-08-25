import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

function NotFoundPage() {
  const { t } = useTranslation('not-found-page')
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="p-12 w-full max-w-md text-center shadow-lg border-border">
        <CardHeader className="space-y-2">
          <CardTitle className="text-7xl font-extrabold text-primary/20 select-none">
            404
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-2xl font-bold tracking-tight pt-2 pb-4">
            {t('heading')}
          </p>
          <p className="text-sm text-muted-foreground">{t('caption')}</p>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center pt-4">
          <Button
            variant="outline"
            className="cursor-pointer w-full sm:w-auto gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            {t('action.go-back')}
          </Button>

          <Button
            className="cursor-pointer w-full sm:w-auto gap-2"
            onClick={() => navigate('/')}
          >
            <Home className="h-4 w-4" />
            {t('action.go-home')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NotFoundPage
