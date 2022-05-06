import { render, waitFor } from "@testing-library/react"
import { StoreProvider } from "../../../store"
import { mockFetchAPI } from "../../../utils/tools"
import EventListContainer from "./EventsListContainer"

describe("<EventListContainer />", () => {

  beforeAll(() => {
    mockFetchAPI(true, [])
  })

  it("render empty list and loader component", async () => {
    const { queryByText } = render(<EventListContainer emptyListComponent={<p>empty</p>} />, {
      wrapper: StoreProvider,
    })

    await waitFor(() => expect(queryByText('Loading...')).toBeInTheDocument())
    await waitFor(() => expect(queryByText('empty')).toBeInTheDocument())

  })
})
