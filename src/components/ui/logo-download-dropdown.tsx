import { useRef, useState } from "react"
import { ChevronDown, Download, Sparkles } from "lucide-react"
import { toPng } from "html-to-image"
import JSZip from "jszip"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Logo, type BrandVariant } from "@/components/ui/logo"

const variants: BrandVariant[] = [ "default", "compact", "icon", "icon-rounded"]

function LogoDownloadDropdown() {
  const [isExporting, setIsExporting] = useState(false)

  const refs = {
    default: {
      light: useRef<HTMLDivElement>(null),
      dark: useRef<HTMLDivElement>(null),
    },
    compact: {
      light: useRef<HTMLDivElement>(null),
      dark: useRef<HTMLDivElement>(null),
    },
    icon: {
      light: useRef<HTMLDivElement>(null),
      dark: useRef<HTMLDivElement>(null),
    },
    "icon-rounded": {
      light: useRef<HTMLDivElement>(null),
      dark: useRef<HTMLDivElement>(null),
    },
  }

  const generatePng = async (
    ref: React.RefObject<HTMLDivElement | null>,
  ) => {
    if (!ref.current) return null

    return toPng(ref.current, {
      pixelRatio: 3,
      cacheBust: true,
    })
  }

  const downloadFile = (dataUrl: string, filename: string) => {
    const link = document.createElement("a")
    link.download = filename
    link.href = dataUrl
    link.click()
  }

  // Download a single variant for one theme
  const downloadSingle = async (
    variant: BrandVariant,
    theme: "light" | "dark",
  ) => {
    try {
      setIsExporting(true)

      const dataUrl = await generatePng(refs[variant][theme])

      if (dataUrl) {
        downloadFile(
          dataUrl,
          `vanwave-${variant}-${theme}.png`,
        )
      }
    } catch (err) {
      console.error("Export error:", err)
    } finally {
      setIsExporting(false)
    }
  }

  // Download one variant with both themes
  const downloadVariantBothThemes = async (
    variant: BrandVariant,
  ) => {
    try {
      setIsExporting(true)

      const zip = new JSZip()

      const lightData = await generatePng(refs[variant].light)
      const darkData = await generatePng(refs[variant].dark)

      if (lightData) {
        zip.file(
          `vanwave-${variant}-light.png`,
          lightData.split(",")[1],
          { base64: true },
        )
      }

      if (darkData) {
        zip.file(
          `vanwave-${variant}-dark.png`,
          darkData.split(",")[1],
          { base64: true },
        )
      }

      const content = await zip.generateAsync({
        type: "blob",
      })

      const zipUrl = URL.createObjectURL(content)

      downloadFile(
        zipUrl,
        `vanwave-${variant}-all-themes.zip`,
      )

      URL.revokeObjectURL(zipUrl)
    } catch (err) {
      console.error("Zip export error:", err)
    } finally {
      setIsExporting(false)
    }
  }

  // Download every variant and theme
  const downloadAllBundle = async () => {
    try {
      setIsExporting(true)

      const zip = new JSZip()

      for (const variant of variants) {
        const lightData = await generatePng(refs[variant].light)
        const darkData = await generatePng(refs[variant].dark)

        if (lightData) {
          zip.file(
            `vanwave-${variant}-light.png`,
            lightData.split(",")[1],
            { base64: true },
          )
        }

        if (darkData) {
          zip.file(
            `vanwave-${variant}-dark.png`,
            darkData.split(",")[1],
            { base64: true },
          )
        }
      }

      const content = await zip.generateAsync({
        type: "blob",
      })

      const zipUrl = URL.createObjectURL(content)

      downloadFile(
        zipUrl,
        "vanwave-logo-brandpack.zip",
      )

      URL.revokeObjectURL(zipUrl)
    } catch (err) {
      console.error("Bundle export error:", err)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            disabled={isExporting}
            className="gap-2"
          >
            <Download className="size-4" />

            {isExporting
              ? "Generating..."
              : "Download Assets"}

            <ChevronDown className="size-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-56"
        >
          {/* This group provides the required MenuGroupContext */}
          <DropdownMenuGroup>
            <DropdownMenuLabel>
              Logo Exports
            </DropdownMenuLabel>

            {variants.map((variant) => (
              <DropdownMenuSub key={variant}>
                <DropdownMenuSubTrigger className="capitalize">
                  {variant} Logo
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent>
                  <DropdownMenuItem
                    onClick={() =>
                      downloadSingle(variant, "light")
                    }
                  >
                    Light Mode (.png)
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() =>
                      downloadSingle(variant, "dark")
                    }
                  >
                    Dark Mode (.png)
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={() =>
                      downloadVariantBothThemes(variant)
                    }
                  >
                    Both Themes (.zip)
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={downloadAllBundle}
              className="font-semibold text-primary"
            >
              <Sparkles className="mr-2 size-4" />
              Download All (.zip)
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Hidden render targets for html-to-image */}
      <div className="pointer-events-none absolute -left-[9999px] -top-[9999px] select-none">
        {variants.map((variant) => (
          <div key={variant} className="flex gap-4">
            <div
              ref={refs[variant].light}
              className="inline-flex items-center justify-center p-8"
            >
              <Logo variant={variant} theme='light' />
            </div>

            <div
              ref={refs[variant].dark}
              className="inline-flex items-center justify-center p-8"
            >
              <Logo variant={variant} theme='dark' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { LogoDownloadDropdown }