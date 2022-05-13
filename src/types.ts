export type MarketSelection = {
  id: string
  name: string
  price: number
}

export type EventMarket = {
  id: string
  name: string
  selections: MarketSelection[]
}

export type Event = {
  id: string
  name: string
  markets: EventMarket[]
}

export type UserBet = MarketSelection & {
  marketName: string
  eventId: string
}
