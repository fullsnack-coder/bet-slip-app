import { UserBet } from "../../../types"
import appStore from "../../app"
import userBetsReducer, {
  actionTypes,
  userbetsAdd,
  userbetsToggleSelection,
} from "../userbets"

const mockUserBets: UserBet[] = [
  {
    id: "whatever-id",
    marketName: "mocked market name (to WIN)",
    name: "mock name bet",
    price: 999,
    eventId: "event-id",
  },
  {
    id: "another-id",
    marketName: "mocked market name (to WIN)",
    name: "mock name bet 2",
    price: 999,
    eventId: "event-id",
  },
]

describe("userbets module", () => {
  it("reducer should add a selection when pass the action", () => {
    const { userBets } = userBetsReducer(undefined, {
      type: actionTypes.USERBETS_ADD,
      payload: { selection: mockUserBets[0] },
    })
    const [addedSelection] = userBets
    expect(addedSelection).toEqual(mockUserBets[0])
  })

  it("reducer should remove the selection when pass the action", () => {
    const { userBets } = userBetsReducer(
      {
        userBets: [mockUserBets[0]],
      },
      {
        type: actionTypes.USERBETS_REMOVE,
        payload: { selection: mockUserBets[0] },
      }
    )
    expect(userBets.length).toBe(0)
  })

  it("should toggle one existing selection and call callback function", () => {
    const onCommitChanges = jest.fn()
    userbetsToggleSelection({ bet: mockUserBets[0], onCommitChanges })(
      appStore.dispatch,
      appStore.getState
    )
    expect(onCommitChanges).toBeCalled()
  })

  it("should not add two selections with the same market in the same event", () => {
    const store = { ...appStore }
    store.dispatch(userbetsAdd(mockUserBets[0])) // added
    store.dispatch(userbetsAdd(mockUserBets[1])) // not added because both are in the same event market

    expect(store.getState().betsSlip.userBets.length).toBe(1)

    userbetsToggleSelection({
      bet: mockUserBets[1],
    })(store.dispatch, store.getState)

    expect(store.getState().betsSlip.userBets.length).toBe(1)
  })
})
