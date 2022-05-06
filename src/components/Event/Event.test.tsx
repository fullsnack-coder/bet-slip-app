import { render } from "@testing-library/react"
import { StoreProvider } from "../../store"
import { Event as EntityEvent } from "../../types"
import Event from "./Event"

describe("<Event />", () => {
  const mockedEvent: EntityEvent = {
    id: 'mock-id',
    markets: [],
    name: 'mocked name'
  }

  it("render the event info correctly", () => {
    const { queryByText } = render(<Event event={mockedEvent} />, { wrapper: StoreProvider })
    expect(queryByText(mockedEvent.name)).toBeInTheDocument()
  })
})
