import { act, render, RenderResult, waitFor } from "@testing-library/react"
import App from "./App"
import { StoreProvider } from "./store"
import { Event } from "./types"
import { mockFetchAPI } from "./utils/tools"

const mockEventsData: Event[] = Array.from({ length: 10 }).map((_, idx) => ({
  id: `${idx}`,
  markets: [{ id: 'market-id', name: 'market name', selections: [] }],
  name: `name ${idx}`,
}))

describe("<App />", () => {
  let api: RenderResult;
  beforeAll(() => {
    mockFetchAPI(true, mockEventsData)
  })

  it("renders without crashing", async () => {
    await act(async () => {
      api = render(<App />, { wrapper: StoreProvider })
    })
    await waitFor(() => expect(api.queryByText(mockEventsData[0].name)).toBeInTheDocument())
  })
})
