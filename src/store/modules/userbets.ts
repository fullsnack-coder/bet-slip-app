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
    const currentBetsIds = getState().betsSlip.userBets.map(({ id }) => id)
    const isInCurrentList = currentBetsIds.includes(bet.id)
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
