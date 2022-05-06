import { waitFor } from "@testing-library/react"
import { Event } from "../../../types"
import { mockFetchAPI } from "../../../utils/tools"
import appStore from "../../app"
import eventsReducer, { getEventsAction, actionTypes } from "../events"

describe("Events store module", () => {
  const mockEventsData: Event[] = Array.from({ length: 10 }).map((_, idx) => ({
    id: `${idx}`,
    markets: [],
    name: `name ${idx}`,
  }))

  beforeAll(() => {
    mockFetchAPI(true, mockEventsData)
  })

  afterAll(() => jest.clearAllMocks())

  it("should exec actions to get events", async () => {
    const onSuccess = jest.fn()
    getEventsAction({ onSuccess })(appStore.dispatch)
    await waitFor(() => expect(onSuccess).toBeCalled())
  })

  it("should exec actions to report error", async () => {
    mockFetchAPI(false, mockEventsData)
    const onError = jest.fn()
    getEventsAction({ onError })(appStore.dispatch)
    await waitFor(() => expect(onError).toBeCalled())
  })

  it("reducer should respond to actions passed", () => {
    const startedState = eventsReducer(undefined, {
      type: actionTypes.GET_EVENTS_START,
    })
    expect(startedState.status).toBe("pending")

    const successState = eventsReducer(undefined, {
      type: actionTypes.GET_EVENTS_SUCCESS,
      payload: { events: mockEventsData },
    })
    expect(successState.status).toBe("completed")
    expect(successState.events.length).toBe(mockEventsData.length)

    const failureState = eventsReducer(undefined, {
      type: actionTypes.GET_EVENTS_FAILURE,
    })
    expect(failureState.status).toBe("failure")
  })
})
