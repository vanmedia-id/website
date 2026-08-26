import { cva, type VariantProps } from "class-variance-authority"
import { useTheme, type ResolvedTheme } from "@/context/theme-provider/use-theme"
import { cn } from "@/lib/utils"

export type BrandVariant = 'default' | 'compact' | 'icon' | 'icon-rounded'

// CVA definitions for sizes across each variant layout
const defaultContainerVariants = cva("leading-none font-sora text-center space-y-1", {
  variants: {
    size: {
      sm: "[&_div:first-child]:text-[20px] [&_div:last-child]:text-[10px]",
      md: "[&_div:first-child]:text-[28px] [&_div:last-child]:text-[12px]",
      lg: "[&_div:first-child]:text-[36px] [&_div:last-child]:text-[14px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const compactVariants = cva("font-sora font-[700] tracking-tight leading-none", {
  variants: {
    size: {
      sm: "text-[20px]",
      md: "text-[28px]",
      lg: "text-[36px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const iconVariants = cva("flex pt-0.5 items-center justify-center rounded-full shrink-0", {
  variants: {
    size: {
      sm: "size-8 [&_span]:text-[18px]",
      md: "size-12 [&_span]:text-[32px]",
      lg: "size-16 [&_span]:text-[48px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const iconRoundedVariants = cva("flex pt-0.5 items-center justify-center shrink-0", {
  variants: {
    size: {
      sm: "size-8 rounded-[8px] [&_span]:text-[16px]",
      md: "size-12 rounded-[12px] [&_span]:text-[32px]",
      lg: "size-16 rounded-[16px] [&_span]:text-[48px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type LogoSize = VariantProps<typeof compactVariants>["size"]

interface LogoProps {
  variant?: BrandVariant
  size?: LogoSize
  theme?: ResolvedTheme
  className?: string
}

function useStyle(theme: ResolvedTheme) {
  switch (theme) { 
    case 'light':
      return {
        text: {
          w0: "text-black",
          w1: "text-primary",
          tl: "text-primary",
        },
        icon: {
          bg: "bg-primary",
          tt: "text-white",
        }
      }
    case 'dark':
      return {
        text: {
          w0: "text-white",
          w1: "text-primary",
          tl: "text-primary",
        },
        icon: {
          bg: "bg-primary",
          tt: "text-white",
        }
      }
  }
}

function Default({ theme, size, className }: { theme: ResolvedTheme; size?: LogoSize; className?: string }) {
  const style = useStyle(theme)

  return (
    <div className={cn(defaultContainerVariants({ size }), className)}>
      <div className="font-sora font-[700] tracking-tight">
        <span className={style.text.w0}>van</span>
        <span className={style.text.w1}>wave</span>
      </div>
      <div className={cn("font-[600]", style.text.tl)}>
        <span>send. reach. grow.</span>
      </div>
    </div>
  )
}

function Compact({ theme, size, className }: { theme: ResolvedTheme; size?: LogoSize; className?: string }) {
  const style = useStyle(theme)
  
  return (
    <div className={cn(compactVariants({ size }), className)}>
      <span className={style.text.w0}>van</span>
      <span className={style.text.w1}>wave</span>
    </div>
  )
}

function Icon({ theme, size, className }: { theme: ResolvedTheme; size?: LogoSize; className?: string }) {
  const style = useStyle(theme)

  return (
    <div className={cn(iconVariants({ size }), style.icon.bg, className)}>
      <span className={cn("font-sora font-[700] leading-none", style.icon.tt)}>
        V
      </span>
    </div>
  )
}

function IconRounded({ theme, size, className }: { theme: ResolvedTheme; size?: LogoSize; className?: string }) {
  const style = useStyle(theme)

  return (
    <div className={cn(iconRoundedVariants({ size }), style.icon.bg, className)}>
      <span className={cn("font-sora font-[700] leading-none", style.icon.tt)}>
        V
      </span>
    </div>
  )
}

function Logo({ variant = 'default', size = 'md', theme, className }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const activeTheme = theme ?? resolvedTheme

  switch (variant) {
    case 'default'     : return <Default     theme={activeTheme} size={size} className={className} />
    case 'compact'     : return <Compact     theme={activeTheme} size={size} className={className} />
    case 'icon'        : return <Icon        theme={activeTheme} size={size} className={className} />
    case 'icon-rounded': return <IconRounded theme={activeTheme} size={size} className={className} />
  }
}

export { Logo }