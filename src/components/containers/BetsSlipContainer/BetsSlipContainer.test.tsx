import { render } from "@testing-library/react"
import { StoreProvider } from "../../../store"
import BetsSlipContainer from "./BetsSlipContainer"

describe("<BetsSlipContainer />", () => {
  it("should render empty component if not detect bets", () => {
    const { queryByText } = render(
      <BetsSlipContainer emptyListComponent={<p>empty</p>} />,
      { wrapper: StoreProvider }
    )
    expect(queryByText("empty")).toBeInTheDocument()
  })
})
