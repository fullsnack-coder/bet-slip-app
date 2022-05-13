import { fireEvent, render } from "@testing-library/react"
import { UserBet } from "../../types"
import UserBetItem from "./UserBetItem"

describe("<UserBetItem />", () => {
  const mockBetInfo: UserBet = {
    id: "mock_bet_id",
    marketName: "mocked market name",
    name: "mock name of selection",
    price: 200,
    eventId: "event-id",
  }

  it("should render the user bet info correctly", () => {
    const { queryByText } = render(<UserBetItem bet={mockBetInfo} />)
    expect(queryByText(mockBetInfo.name)).toBeInTheDocument()
    expect(queryByText(mockBetInfo.marketName)).toBeInTheDocument()
    expect(queryByText(mockBetInfo.price)).toBeInTheDocument()
  })

  it("should execute the delete callback when press the delete button", () => {
    const handleDelete = jest.fn()
    const { queryByText } = render(
      <UserBetItem bet={mockBetInfo} onTapDeleteButton={handleDelete} />
    )
    const deleteButton = queryByText("Delete")
    fireEvent.click(deleteButton!)
    expect(handleDelete).toHaveBeenLastCalledWith(mockBetInfo)
  })
})
