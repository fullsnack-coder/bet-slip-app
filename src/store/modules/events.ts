import { Event } from "../../types"
import { AppDispatch, StoreAction } from "../index"
import { eventsAPI } from "../../services"

export const actionTypes = {
  GET_EVENTS_START: "events/get-events-start",
  GET_EVENTS_SUCCESS: "events/get-events-success",
  GET_EVENTS_FAILURE: "events/get-events-failure",
}

type State = {
  events: Event[]
  status: "idle" | "pending" | "completed" | "failure"
}

const initialState: State = {
  events: [],
  status: "idle",
}

// action creators
const getEventsStart = (): StoreAction => ({
  type: actionTypes.GET_EVENTS_START,
})
const getEventsFailure = (): StoreAction => ({
  type: actionTypes.GET_EVENTS_FAILURE,
})
const getEventsSuccess = (events: Event[]): StoreAction => ({
  type: actionTypes.GET_EVENTS_SUCCESS,
  payload: { events },
})

type GetEventsOptions = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const getEventsAction =
  (options: GetEventsOptions = {}) =>
  async (dispatch: AppDispatch) => {
    const { onError, onSuccess } = options
    try {
      dispatch(getEventsStart())
      const events = await eventsAPI().getEvents()
      dispatch(getEventsSuccess(events))
      onSuccess?.()
    } catch (error) {
      dispatch(getEventsFailure())
      onError?.(error as Error)
    }
  }

// module reducer
const eventsReducer = (
  state: State = initialState,
  action: StoreAction
): State => {
  switch (action.type) {
    case actionTypes.GET_EVENTS_START:
      return { ...state, status: "pending" }
    case actionTypes.GET_EVENTS_SUCCESS: {
      const {
        payload: { events },
      } = action
      return { ...state, events, status: "completed" }
    }
    case actionTypes.GET_EVENTS_FAILURE: {
      return { ...state, status: "failure" }
    }
    default:
      return state
  }
}

export default eventsReducer
