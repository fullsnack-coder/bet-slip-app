import { render } from "@testing-library/react"
import App from "./App"
import { mockFetchAPI } from "./utils/tools"

describe("<App />", () => {
  it("renders correctly", () => {
    mockFetchAPI(true)
    const { getByText } = render(<App />)
    expect(getByText("Learn React")).toBeInTheDocument()
  })
})
