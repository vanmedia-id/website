import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type HomeSectionProps = ComponentProps<'section'>

function HomeSection({ className, ...props }: HomeSectionProps) {
  return <section {...props} className={cn('scroll-mt-12', className)} />
}

export { HomeSection }
