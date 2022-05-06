import { render } from "@testing-library/react"
import { EventMarket } from '../../types'
import MarketOportunity from "./MarketOportunity"

describe("<MarketOportunity />", () => {
  const mockMarketOportunity: EventMarket = {
    id: 'mock-id-market',
    name: 'mock name market',
    selections: [
      { id: 'selection-id', name: 'selection-name', price: 200 },
    ]
  }

  it("should render the market info correctly", () => {
    const { queryByText } = render(<MarketOportunity market={mockMarketOportunity} />)
    expect(queryByText(mockMarketOportunity.name)).toBeInTheDocument()
    expect(queryByText(mockMarketOportunity.selections[0].price)).toBeInTheDocument()
  })
})
