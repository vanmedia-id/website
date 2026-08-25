import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MessageSquare,
  Phone,
  Smartphone,
  Send,
  Calculator,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { calcPrice } from '@/utils/pricing'
import { AsyncState } from '@/model/data'
import type { Availability, Pricing } from '@/model/rules'
import { Skeleton } from '@/components/ui/skeleton'

type MessageBlastModel = {
  sms: {
    availability: Availability
    pricing: Pricing
  }
  whatsapp: {
    availability: Availability
    pricing: Pricing
  }
}

type CallSpamModel = {
  cellular: {
    availability: Availability
    pricing: Pricing
  }
  whatsapp: {
    availability: Availability
    pricing: Pricing
  }
}

type Model = {
  mb: MessageBlastModel
  cs: CallSpamModel
}

type CallChannel = 'whatsapp' | 'cellular'

type MessageChannel = 'whatsapp' | 'sms'

type MessageBlastProps = {
  model: MessageBlastModel
  count: number
  channel: MessageChannel
}

type CallSpamProps = {
  model: CallSpamModel
  count: number
  channel: CallChannel
}

type MessageBlastCardProps = MessageBlastProps & {
  setCount: React.Dispatch<React.SetStateAction<number>>
  setChannel: React.Dispatch<React.SetStateAction<MessageChannel>>
}

type MessageBlastPriceCardProps = MessageBlastProps

type CallSpamCardProps = CallSpamProps & {
  setCount: React.Dispatch<React.SetStateAction<number>>
  setChannel: React.Dispatch<React.SetStateAction<CallChannel>>
}

type CallSpamPriceCardProps = CallSpamProps

function MessageBlastView({ model }: { model: MessageBlastModel }) {
  const [count, setCount] = useState<number>(-1)
  const [channel, setChannel] = useState<MessageChannel>('whatsapp')
  const props: MessageBlastProps = { model, count, channel }

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <MessageBlastCard props={{ ...props, setCount, setChannel }} />
      <MessageBlastPriceCard props={props} />
    </div>
  )
}

function MessageBlastCard({ props }: { props: MessageBlastCardProps }) {
  const { t } = useTranslation('calculator-page')
  const { model, count, channel, setCount, setChannel } = props

  const order = () => {
    switch (channel) {
      case 'sms':
        return model.sms.availability.order
      case 'whatsapp':
        return model.whatsapp.availability.order
    }
  }

  const { min, max } = order()

  if (count < min) setCount(min)
  if (count > max) setCount(max)

  return (
    <Card className="lg:col-span-7 flex flex-col">
      <CardHeader>
        <CardTitle className="text-[14px] font-semibold">
          {t('message-blast.title')}
        </CardTitle>
        <CardDescription className="text-[12px]">
          {t('message-blast.description')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 flex-1">
        {/* Delivery Channel Selection */}
        <div>
          <span className="mb-2.5 text-[12px] font-semibold tracking-wider uppercase text-muted-foreground block">
            {t('message-blast.channel')}
          </span>

          <div className="grid grid-cols-1 gap-3">
            {/* WhatsApp Option */}
            <button
              type="button"
              onClick={() => props.setChannel('whatsapp')}
              aria-pressed={props.channel === 'whatsapp'}
              className={`w-full text-left flex items-start gap-3 rounded-lg border p-3 transition-all cursor-pointer ${
                props.channel === 'whatsapp'
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent/50'
              }`}
            >
              <div
                className={`p-2 rounded-md transition-colors shrink-0 ${
                  props.channel === 'whatsapp'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-500/10 text-green-600 dark:bg-green-500/20'
                }`}
              >
                <MessageSquare className="h-4 w-4" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-[12px]">
                  {t('channels.whatsapp.title')}
                </span>

                <span className="text-[12px] text-muted-foreground whitespace-pre-line leading-normal">
                  {t('channels.whatsapp.description.message-blast')}
                </span>
              </div>
            </button>

            {/* SMS Option */}
            <button
              type="button"
              onClick={() => setChannel('sms')}
              aria-pressed={props.channel === 'sms'}
              className={`w-full text-left flex items-start gap-3 rounded-lg border p-3 transition-all cursor-pointer ${
                props.channel === 'sms'
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent/50'
              }`}
            >
              <div
                className={`p-2 rounded-md transition-colors shrink-0 ${
                  props.channel === 'sms'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20'
                }`}
              >
                <Smartphone className="h-4 w-4" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-[12px]">
                  {t('channels.sms.title')}
                </span>

                <span className="text-[12px] text-muted-foreground whitespace-pre-line leading-normal">
                  {t('channels.sms.description')}
                </span>
              </div>
            </button>
          </div>
        </div>

        <Separator />

        {/* Quantity Input & Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[12px] font-semibold block">
                {t('message-blast.volume.title')}
              </span>
              <span className="text-[12px] text-muted-foreground block leading-normal">
                {t('message-blast.volume.description')}
              </span>
            </div>

            <div className="w-24">
              <Input
                id="message-input"
                type="number"
                min={min}
                max={max}
                value={count}
                onChange={(e) => setCount(Number(e.target.value) || 0)}
                className="text-right font-mono text-xs h-8"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Slider
              min={min}
              max={max}
              step={1}
              value={count}
              onValueChange={(vals: number | readonly number[]) => {
                const val = typeof vals === 'number' ? vals : vals[0]
                if (typeof val === 'number') setCount(val)
              }}
              className="py-1 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
              <span>
                {min.toLocaleString()} {t('message-blast.unit')}
              </span>
              <span>
                {max.toLocaleString()} {t('message-blast.unit')}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MessageBlastPriceCard({
  props,
}: {
  props: MessageBlastPriceCardProps
}) {
  const { t } = useTranslation('calculator-page')
  const { model, count, channel } = props

  const pricing = () => {
    switch (channel) {
      case 'sms':
        return model.sms.pricing
      case 'whatsapp':
        return model.whatsapp.pricing
    }
  }

  const price = calcPrice({ pricing: pricing(), quantity: count })

  return (
    <Card className="lg:col-span-5 flex flex-col border-dashed bg-muted/20">
      <CardHeader>
        <CardTitle className="text-[14px] font-semibold">
          <div className="flex justify-between items-start gap-2">
            <span>{t('cost-summary.title')}</span>
            <Badge className="text-[12px] font-mono px-2 py-0.5 shrink-0">
              {t(`channels.${channel}.title`)}
            </Badge>
          </div>
        </CardTitle>
        <CardDescription className="text-[12px]">
          {t('cost-summary.subtitle')}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-6">
        {/* Cost Breakdown */}
        <div className="flex-1">
          <span className="mb-2.5 text-[12px] font-semibold tracking-wider uppercase text-muted-foreground block">
            {t('cost-summary.breakdown')}
          </span>

          <div className="space-y-3">
            {price.charges.map((b, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-md border text-xs transition-all bg-card border-border shadow-xs"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-semibold text-foreground">
                    {b.name}
                  </span>

                  <span className="text-[12px] text-muted-foreground">
                    {b.quantity.toLocaleString()} {t('message-blast.unit')} × Rp{' '}
                    {b.unit.toLocaleString()}
                  </span>
                </div>

                <span className="text-[12px] font-mono font-semibold text-foreground">
                  Rp {b.subtotal.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Total */}
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[12px] font-semibold block">
              {t('cost-summary.total.title')}
            </span>

            <span className="text-[12px] text-muted-foreground block leading-normal">
              {t('cost-summary.total.subtitle')}
            </span>
          </div>

          <span className="text-[20px] font-bold text-primary font-mono tracking-tight leading-none shrink-0 whitespace-nowrap">
            Rp {price.total.toLocaleString()}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function CallSpamView({ model }: { model: CallSpamModel }) {
  const [count, setCount] = useState<number>(-1)
  const [channel, setChannel] = useState<CallChannel>('whatsapp')
  const props: CallSpamProps = { model, count, channel }

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <CallSpamCard props={{ ...props, setCount, setChannel }} />
      <CallSpamPriceCard props={props} />
    </div>
  )
}

function CallSpamCard({ props }: { props: CallSpamCardProps }) {
  const { t } = useTranslation('calculator-page')
  const { model, count, channel, setCount, setChannel } = props

  const order = () => {
    switch (channel) {
      case 'cellular':
        return model.cellular.availability.order
      case 'whatsapp':
        return model.whatsapp.availability.order
    }
  }

  const { min, max } = order()

  if (count < min) setCount(min)
  if (count > max) setCount(max)

  return (
    <Card className="lg:col-span-7 flex flex-col">
      <CardHeader>
        <CardTitle className="text-[14px] font-semibold">
          {t('call-spam.title')}
        </CardTitle>
        <CardDescription className="text-[12px]">
          {t('call-spam.description')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 flex-1">
        {/* Delivery Channel Selection */}
        <div>
          <span className="mb-2.5 text-[12px] font-semibold tracking-wider uppercase text-muted-foreground block">
            {t('call-spam.channel')}
          </span>

          <div className="grid grid-cols-1 gap-3">
            {/* WhatsApp Option */}
            <button
              type="button"
              onClick={() => props.setChannel('whatsapp')}
              aria-pressed={props.channel === 'whatsapp'}
              className={`w-full text-left flex items-start gap-3 rounded-lg border p-3 transition-all cursor-pointer ${
                props.channel === 'whatsapp'
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent/50'
              }`}
            >
              <div
                className={`p-2 rounded-md transition-colors shrink-0 ${
                  props.channel === 'whatsapp'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-500/10 text-green-600 dark:bg-green-500/20'
                }`}
              >
                <MessageSquare className="h-4 w-4" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-[12px]">
                  {t('channels.whatsapp.title')}
                </span>

                <span className="text-[12px] text-muted-foreground whitespace-pre-line leading-normal">
                  {t('channels.whatsapp.description.message-blast')}
                </span>
              </div>
            </button>

            {/* SMS Option */}
            <button
              type="button"
              onClick={() => setChannel('cellular')}
              aria-pressed={props.channel === 'cellular'}
              className={`w-full text-left flex items-start gap-3 rounded-lg border p-3 transition-all cursor-pointer ${
                props.channel === 'cellular'
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent/50'
              }`}
            >
              <div
                className={`p-2 rounded-md transition-colors shrink-0 ${
                  props.channel === 'cellular'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20'
                }`}
              >
                <Phone className="h-4 w-4" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-[12px]">
                  {t('channels.cellular.title')}
                </span>

                <span className="text-[12px] text-muted-foreground whitespace-pre-line leading-normal">
                  {t('channels.cellular.description')}
                </span>
              </div>
            </button>
          </div>
        </div>

        <Separator />

        {/* Quantity Input & Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[12px] font-semibold block">
                {t('call-spam.volume.title')}
              </span>
              <span className="text-[12px] text-muted-foreground block leading-normal">
                {t('call-spam.volume.description')}
              </span>
            </div>

            <div className="w-24">
              <Input
                id="message-input"
                type="number"
                min={min}
                max={max}
                value={count}
                onChange={(e) => setCount(Number(e.target.value) || 0)}
                className="text-right font-mono text-xs h-8"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Slider
              min={min}
              max={max}
              step={1}
              value={count}
              onValueChange={(vals: number | readonly number[]) => {
                const val = typeof vals === 'number' ? vals : vals[0]
                if (typeof val === 'number') setCount(val)
              }}
              className="py-1 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
              <span>
                {min.toLocaleString()} {t('call-spam.unit')}
              </span>
              <span>
                {max.toLocaleString()} {t('call-spam.unit')}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CallSpamPriceCard({ props }: { props: CallSpamPriceCardProps }) {
  const { t } = useTranslation('calculator-page')
  const { model, count, channel } = props

  const pricing = () => {
    switch (channel) {
      case 'cellular':
        return model.cellular.pricing
      case 'whatsapp':
        return model.whatsapp.pricing
    }
  }

  const price = calcPrice({ pricing: pricing(), quantity: count })

  return (
    <Card className="lg:col-span-5 flex flex-col border-dashed bg-muted/20">
      <CardHeader>
        <CardTitle className="text-[14px] font-semibold">
          <div className="flex justify-between items-start gap-2">
            <span>{t('cost-summary.title')}</span>
            <Badge className="text-[12px] font-mono px-2 py-0.5 shrink-0">
              {t(`channels.${channel}.title`)}
            </Badge>
          </div>
        </CardTitle>
        <CardDescription className="text-[12px]">
          {t('cost-summary.subtitle')}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-6">
        {/* Cost Breakdown */}
        <div className="flex-1">
          <span className="mb-2.5 text-[12px] font-semibold tracking-wider uppercase text-muted-foreground block">
            {t('cost-summary.breakdown')}
          </span>

          <div className="space-y-3">
            {price.charges.map((b, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-md border text-xs transition-all bg-card border-border shadow-xs"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-semibold text-foreground">
                    {b.name}
                  </span>

                  <span className="text-[12px] text-muted-foreground">
                    {b.quantity.toLocaleString()} {t('call-spam.unit')} × Rp{' '}
                    {b.unit.toLocaleString()}
                  </span>
                </div>

                <span className="text-[12px] font-mono font-semibold text-foreground">
                  Rp {b.subtotal.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Total */}
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[12px] font-semibold block">
              {t('cost-summary.total.title')}
            </span>

            <span className="text-[12px] text-muted-foreground block leading-normal">
              {t('cost-summary.total.subtitle')}
            </span>
          </div>

          <span className="text-[20px] font-bold text-primary font-mono tracking-tight leading-none shrink-0 whitespace-nowrap">
            Rp {price.total.toLocaleString()}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function ContentData({ data }: { data: Model }) {
  const { t } = useTranslation('calculator-page')

  return (
    <Tabs defaultValue="message-blast" className="w-full space-y-4">
      <TabsList className="grid w-full lg:w-auto inline-flex grid-cols-2">
        <TabsTrigger
          value="message-blast"
          className="flex items-center gap-2 text-xs"
        >
          <Send className="h-3.5 w-3.5" />
          {t('tabs.message-blast')}
        </TabsTrigger>
        <TabsTrigger
          value="call-spam"
          className="flex items-center gap-2 text-xs"
        >
          <Phone className="h-3.5 w-3.5" />
          {t('tabs.call-spam')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="message-blast">
        <MessageBlastView model={data.mb} />
      </TabsContent>
      <TabsContent value="call-spam">
        <CallSpamView model={data.cs} />
      </TabsContent>
    </Tabs>
  )
}

function ContentError() {
  return <div></div>
}

function ContentLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-full" />
      <div className="grid gap-6 md:grid-cols-12">
        <Skeleton className="md:col-span-7 h-103 rounded-xl" />
        <Skeleton className="md:col-span-5 h-103 rounded-xl" />
      </div>
    </div>
  )
}

function ContentLoader() {
  const [state, setState] = useState<AsyncState<Model>>(AsyncState.loading())

  useEffect(() => {
    let active = true
    async function run() {
      await new Promise((r) => setTimeout(r, 300))
      try {
        const fjson = async (url: string) => (await fetch(url)).json()
        const base0 = '/rules/message-blast'
        const base1 = '/rules/call-spam'
        const data: Model = {
          mb: {
            sms: {
              availability: await fjson(`${base0}/sms/availability.json`),
              pricing: await fjson(`${base0}/sms/pricing.json`),
            },
            whatsapp: {
              availability: await fjson(`${base0}/whatsapp/availability.json`),
              pricing: await fjson(`${base0}/whatsapp/pricing.json`),
            },
          },
          cs: {
            cellular: {
              availability: await fjson(`${base1}/cellular/availability.json`),
              pricing: await fjson(`${base1}/cellular/pricing.json`),
            },
            whatsapp: {
              availability: await fjson(`${base1}/whatsapp/availability.json`),
              pricing: await fjson(`${base1}/whatsapp/pricing.json`),
            },
          },
        }
        if (!active) return
        setState(AsyncState.data(data))
      } catch (error) {
        if (!active) return
        setState(AsyncState.errorTry(error))
      }
    }
    run()
    return () => {
      active = false
    }
  }, [])

  switch (state.status) {
    case 'data':
      return <ContentData data={state.data} />
    case 'error':
      return <ContentError />
    case 'loading':
      return <ContentLoading />
  }
}

function CalculatorPage() {
  const { t } = useTranslation('calculator-page')

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:p-10 space-y-5">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
          <Calculator className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <span className="block text-md font-semibold tracking-tight text-foreground leading-none">
            {t('heading')}
          </span>
          <p className="text-sm text-muted-foreground">{t('caption')}</p>
        </div>
      </div>
      <Separator />
      <ContentLoader />
    </div>
  )
}

export default CalculatorPage
