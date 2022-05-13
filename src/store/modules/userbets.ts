import { UserBet } from "../../types"
import { AppDispatch, RootState, StoreAction } from "../index"

export const actionTypes = {
  USERBETS_ADD: "userbets/add",
  USERBETS_REMOVE: "userbets/remove",
}

type State = {
  userBets: UserBet[]
}

const initialState: State = {
  userBets: [],
}

// action creators
export const userbetsAdd = (selection: UserBet): StoreAction => ({
  type: actionTypes.USERBETS_ADD,
  payload: { selection },
})

export const userbetsRemove = (selection: UserBet): StoreAction => ({
  type: actionTypes.USERBETS_REMOVE,
  payload: { selection },
})

type ToggleSelectionOptions = {
  bet: UserBet
  onCommitChanges?: () => void
}

export const userbetsToggleSelection =
  (options: ToggleSelectionOptions) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const { onCommitChanges, bet } = options
    const currentBets = getState().betsSlip.userBets
    const isEventMarked = currentBets.some(
      ({ eventId, marketName }) =>
        bet.eventId === eventId && bet.marketName === marketName
    )

    const currentBetsIds = currentBets.map(({ id }) => id)
    const isInCurrentList = currentBetsIds.includes(bet.id)

    if (isEventMarked && !isInCurrentList) return
    if (isInCurrentList) {
      dispatch(userbetsRemove(bet))
    } else {
      dispatch(userbetsAdd(bet))
    }
    onCommitChanges?.()
  }

// module reducer
const userBetsReducer = (
  state: State = initialState,
  action: StoreAction
): State => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.USERBETS_ADD: {
      const { selection } = payload
      const hasMarketSelected = state.userBets.some(
        ({ eventId, marketName }) =>
          marketName === selection.marketName && eventId === selection.eventId
      )

      if (hasMarketSelected) return state
      return {
        ...state,
        userBets: state.userBets.concat(payload.selection),
      }
    }
    case actionTypes.USERBETS_REMOVE:
      return {
        ...state,
        userBets: state.userBets.filter(
          (oldBet) => oldBet.id !== payload.selection.id
        ),
      }
    default:
      return state
  }
}

export default userBetsReducer
