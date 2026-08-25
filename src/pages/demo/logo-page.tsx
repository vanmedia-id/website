import { Logo } from "@/components/ui/logo"
import { LogoDownloadDropdown } from "@/components/ui/logo-download-dropdown"

const VARIANTS = [
  {
    variant: "default" as const,
    description: "Primary branding featuring full icon and typography. Ideal for main navigation bars and footers.",
  },
  {
    variant: "compact" as const,
    description: "Streamlined horizontal layout designed for dense toolbars or mobile headers.",
  },
  {
    variant: "icon" as const,
    description: "Standalone brand mark. Best suited for favicons, avatars, or tight square spaces.",
  },
  {
    variant: "icon-rounded" as const,
    description: "Standalone brand mark. Best suited for favicons, avatars, or tight square spaces.",
  },
]

export default function LogoPage() {
  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-5xl space-y-8">
        {/* Component Header Information & Global Action */}
        <div className="border-b pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            {/* Title & Description Column */}
            <div className="flex-1 space-y-2 text-left">
              <span className="block text-2xl font-bold tracking-tight">
                Logo Component
              </span>
              <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
                The core identity component used across web properties. Supports multiple
                layout modes and responsive variants.
              </p>
            </div>

            {/* Action Dropdown */}
            <div className="shrink-0 self-start sm:self-auto">
              <LogoDownloadDropdown />
            </div>
          </div>
        </div>

        {/* Variants Showcase */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {VARIANTS.map((item) => (
            <div
              key={item.variant}
              className="group relative flex flex-col items-center rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition-all hover:border-foreground/20 hover:shadow-md"
            >
              {/* Preview Area */}
              <div className="relative flex h-44 w-full items-center justify-center rounded-lg border border-dashed bg-muted/30 p-4 transition-colors group-hover:bg-muted/50">
                <Logo variant={item.variant} />
              </div>

              {/* Variant Details */}
              <div className="mt-4 flex flex-1 flex-col justify-between w-full space-y-3 text-center">
                <div className="space-y-2">
                  <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs font-medium text-foreground">
                    variant="{item.variant}"
                  </code>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}