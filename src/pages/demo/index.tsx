import { Link } from "react-router"
import { ArrowRight, Image, LayoutGrid } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const routes = [
  {
    path: "/demo/logo",
    label: "Logo",
    description: "Brand logo showcase, scaling, and variation playground.",
    icon: Image,
    badge: "UI Component",
  },
  {
    path: "/demo/catalogue",
    label: "Catalogue",
    description: "Product catalogue layout featuring grid filters and card items.",
    icon: LayoutGrid,
    badge: "Page Layout",
  },
]

export default function DemoPage() {
  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-5xl space-y-8">
        {/* Component Header Information & Global Action */}
        <div className="border-b pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            {/* Title & Description Column */}
            <div className="flex-1 space-y-2 text-left">
              <span className="block text-2xl font-bold tracking-tight">
                Demo Showcase
              </span>
              <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
                The core identity component used across web properties. Supports multiple
                layout modes and responsive variants.
              </p>
            </div>
          </div>
        </div>

        {/* Grid of Navigation Cards inside the max-w-5xl wrapper */}
        <div className="grid w-full gap-4 sm:grid-cols-2">
          {routes.map(({ path, label, description, icon: Icon, badge }) => (
            <Link key={path} to={path} className="group outline-none">
              <Card className="h-full transition-all hover:border-foreground/25 hover:shadow-md">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {badge}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <CardTitle className="flex items-center justify-between text-lg">
                      {label}
                      <ArrowRight className="text-muted-foreground h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}