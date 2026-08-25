import type { Pricing } from '@/model/rules'

export type ChargeBracket = {
  name: string
  from: number
  to: number
  quantity: number
  unit: number
  subtotal: number
}

export type PricingResult = {
  quantity: number
  total: number
  charges: ChargeBracket[]
}

export function calcPrice({
  pricing,
  quantity,
}: {
  pricing: Pricing
  quantity: number
}): PricingResult {
  const qty = quantity
  if (qty <= 0) return { quantity: 0, total: 0, charges: [] }

  const tiers = [...pricing.tiers].sort((a, b) => a.step - b.step)
  const brackets: ChargeBracket[] = []

  let rem = qty
  let step = 0

  for (const tier of tiers) {
    if (rem <= 0) break

    const quantity = Math.min(rem, tier.step)
    const subtotal = quantity * tier.unit

    brackets.push({
      name: tier.name,
      from: step + 1,
      to: tier.step,
      quantity: quantity,
      unit: tier.unit,
      subtotal,
    })

    rem -= quantity
    step = tier.step
  }

  const total = brackets.reduce((sum, b) => sum + b.subtotal, 0)
  return { quantity: qty, total, charges: brackets }
}
