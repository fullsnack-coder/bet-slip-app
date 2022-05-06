import { UserBet } from "../../../types"
import appStore from "../../app"
import userBetsReducer, {
  actionTypes,
  userbetsToggleSelection,
} from "../userbets"

const mockUserBet: UserBet = {
  id: "whatever-id",
  marketName: "mocked market name (to WIN)",
  name: "mock name bet",
  price: 999,
}

describe("userbets module", () => {
  it("reducer should add a selection when pass the action", () => {
    const { userBets } = userBetsReducer(undefined, {
      type: actionTypes.USERBETS_ADD,
      payload: { selection: mockUserBet },
    })
    const [addedSelection] = userBets
    expect(addedSelection).toEqual(mockUserBet)
  })

  it("reducer should remove the selection when pass the action", () => {
    const { userBets } = userBetsReducer(
      {
        userBets: [mockUserBet],
      },
      { type: actionTypes.USERBETS_REMOVE, payload: { selection: mockUserBet } }
    )
    expect(userBets.length).toBe(0)
  })

  it("should toggle one existing selection and call callback function", () => {
    const onCommitChanges = jest.fn()
    userbetsToggleSelection({ bet: mockUserBet, onCommitChanges })(
      appStore.dispatch,
      appStore.getState
    )
    expect(onCommitChanges).toBeCalled()
  })
})
