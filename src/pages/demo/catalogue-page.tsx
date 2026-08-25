import { Card } from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"
import { MessageSquare, Calculator, Rocket, ShieldCheck, TrendingUp, Globe, Phone, Link } from 'lucide-react'

function Dot() {
  return (
    <svg className="h-2 w-2 block fill-current text-primary/30">
      <circle cx="4" cy="4" r="1.5" />
    </svg>
  )
}

function DotGrid() {
  const size = 4

  return (
    <div
      className="grid leading-none"
      style={{ gridTemplateColumns: `repeat(${size}, min-content)` }}
    >
      {Array.from({ length: size * size }).map((_, index) => (
        <Dot key={index} />
      ))}
    </div>
  )
}

function Catalogue() {
  return (
    <div className="w-[460px] mx-auto p-4 space-y-2.5 bg-gray-50 text-slate-800 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <Logo variant="icon" size="sm" theme="light" />
        <Logo variant="default" size="md" theme="light" />
        <DotGrid />
      </div>

      {/* Card 1: Simulation Breakdown */}
      <Card className="p-4 bg-white rounded-xl shadow-sm">
        <div className="space-y-2.5">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-base font-bold text-slate-900 leading-tight">
                SIMULASI PAKET <span className="text-emerald-700">5 PESAN</span>
              </span>
              <p className="text-[11px] font-semibold text-gray-500">Perhitungan mengikuti rate tiap tier.</p>
            </div>
            <button className="flex items-center gap-1 px-2.5 py-1 bg-emerald-800 text-white rounded-full text-[10px] font-medium hover:bg-emerald-900 transition">
              <MessageSquare className="w-3 h-3 fill-current" />
              WhatsApp
            </button>
          </div>

          {/* Section Header */}
          <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>RINCIAN BIAYA</span>
          </div>

          {/* Tier Pricing Box */}
          <div className="bg-gray-50/90 rounded-lg p-3 flex items-center justify-between border border-gray-100">
            <div>
              <h3 className="font-bold text-slate-900 text-xs">Tier 1</h3>
              <p className="text-[11px] text-gray-500">5 Pesan × Rp 1,500</p>
            </div>
            <span className="font-bold text-slate-900 text-sm">Rp 7,500</span>
          </div>

          <div className="flex border-b border-gray-300" />

          {/* Total & Discount Breakdown */}
          <div className="pt-1 flex items-end justify-between">
            <div className="space-y-0.5">
              <p className="text-[11px] font-semibold text-slate-700">Total Sebelum Diskon</p>
              <p className="text-[12px] font-semibold text-gray-500 line-through">Rp 7,500</p>
              <div className="pt-1.5">
                <p className="text-[12px] font-bold text-emerald-700 tracking-wide">DISKON 30%</p>
                <p className="text-[11px] text-emerald-700 font-medium">Hemat Rp 2,250</p>
              </div>
            </div>

            <div className="text-right space-y-1">
              <span className="inline-block bg-emerald-50 text-emerald-800 text-[9px] font-semibold px-2 rounded-full">
                Total Setelah Diskon
              </span>
              <div className="text-2xl font-extrabold text-emerald-700 tracking-tight leading-none">
                Rp 5,250
              </div>
              <p className="text-[9px] text-gray-500">Harga final tanpa biaya tambahan.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 2: Features Grid */}
      <Card className="p-3 bg-white rounded-xl shadow-sm">
        <div className="grid grid-cols-3 gap-2 text-center divide-x divide-gray-300">
          <div className="flex flex-col items-center px-1">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 mb-1.5">
              <Rocket className="w-4 h-4" />
            </div>
            <h4 className="text-[11px] font-bold text-emerald-800">Fleksibel</h4>
            <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">Pilih paket sesuai kebutuhanmu.</p>
          </div>

          <div className="flex flex-col items-center px-1">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 mb-1.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-[11px] font-bold text-emerald-800">Transparan</h4>
            <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">Harga jelas tanpa biaya tersembunyi.</p>
          </div>

          <div className="flex flex-col items-center px-1">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 mb-1.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h4 className="text-[11px] font-bold text-emerald-800">Berkembang</h4>
            <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">Dukung bisnismu untuk terus tumbuh.</p>
          </div>
        </div>
      </Card>

      {/* Card 3: Call to Action Banner */}
      <Card className="p-3 bg-emerald-900 text-white rounded-xl overflow-hidden relative shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-start gap-2.5 z-10 flex-1">
            <div className="p-1.5 rounded-full border border-emerald-700 bg-emerald-800/50 shrink-0 mt-0.5">
              <Globe className="w-4 h-4 text-emerald-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-[10px] leading-tight tracking-wide">
                PENGEN JUMLAH YANG LAIN?
              </h3>
              <p className="text-[9px] text-emerald-100/80 leading-normal max-w-[200px]">
                Bisa visit link web kami untuk hitung harga secara real sesuai kebutuhan.
              </p>
            </div>
          </div>

          <div className="pt-0">
            <a
              href="https://vanwave.vercel.app/calculator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white text-emerald-900 rounded-full text-[9px] font-bold shadow-sm"
            >
              <Link className="w-2.5 h-2.5 text-emerald-700" />
              vanwave.vercel.app/calculator
            </a>
          </div>
        </div>
      </Card>

      {/* Card 4: Contact Footer */}
      <Card className="p-2.5 bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-center gap-4">
          {/* Column 1: Phone Info */}
          <div className="flex items-center gap-1.5 border-r border-gray-300 pr-4">
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 font-semibold leading-tight">Butuh bantuan? Hubungi CS kami</p>
              <p className="pt-0.5 font-bold text-emerald-800 text-xs">0851 2120 3300</p>
            </div>
          </div>

          {/* Column 2: Web Info */}
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 font-semibold leading-tight">Jelajahi Site Kami</p>
              <span className="pt-0.5 font-bold text-emerald-800 text-xs">vanwave.vercel.app</span>
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}

export function CataloguePage() {
  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-5xl space-y-8">
        {/* Component Header Information & Global Action */}
        <div className="border-b pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            {/* Title & Description Column */}
            <div className="flex-1 space-y-2 text-left">
              <span className="block text-2xl font-bold tracking-tight">
                Catalogue
              </span>
              <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
                The core identity component used across web properties. Supports multiple
                layout modes and responsive variants.
              </p>
            </div>

            {/* Action Dropdown */}
            <div className="shrink-0 self-start sm:self-auto">
            </div>
          </div>
        </div>

        {/* Variants Showcase */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
        </div>
      </div>
    </div>


  );
}

export default CataloguePage;