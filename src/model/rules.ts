export interface Availability {
  account: {
    size: number
  }
  load: {
    duration: number
    amount: number
  }
  order: {
    min: number
    max: number
  }
  online: TimeRange
  offlines: TimeRange[]
}

export interface Pricing {
  unit: string
  model: string
  tiers: {
    name: string
    step: number
    unit: number
  }[]
}

export interface TimeRange {
  from: string
  to: string
}
