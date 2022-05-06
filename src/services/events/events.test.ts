import { Event } from "../../types"
import { mockFetchAPI } from "../../utils/tools"
import eventsAPI from "../events"

const mockEventsData: Event[] = Array.from({ length: 20 }).map((_, idx) => ({
  id: `event_${idx}`,
  markets: [],
  name: `event_name_${idx}`,
}))

const mockErrorMessage = "This is a mocked error message"

describe("events service", () => {
  let api: ReturnType<typeof eventsAPI>

  beforeEach(() => {
    api = eventsAPI(mockErrorMessage)
  })

  afterAll(() => jest.clearAllMocks())

  it("should get the events correctly when status is success", async () => {
    mockFetchAPI(true, mockEventsData)
    const events = await api.getEvents()
    expect(events.length).toBe(mockEventsData.length)
  })

  it("should throw the error message when status is failed", async () => {
    try {
      mockFetchAPI(false, mockEventsData)
      await api.getEvents()
    } catch (error) {
      const { message } = error as Error
      expect(message).toBe(mockErrorMessage)
    }
  })
})
