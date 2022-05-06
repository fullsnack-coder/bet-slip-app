export type EventMarket = {
  id: string
  name: string
  price: number
}

export type Event = {
  id: string
  name: string
  markets: EventMarket[]
}
