import { render } from "@testing-library/react"
import App from "./App"

describe("<App />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<App />)
    expect(getByText("Learn React")).toBeInTheDocument()
  })
})
