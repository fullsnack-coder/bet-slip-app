import getConfigKeys from "../../config/keys"
import { Event } from "../../types"

const EventsAPI = (errorMessage = "failed to connect with the API") => {
  const baseURL = getConfigKeys().serverAPI.url

  return {
    getEvents: async (): Promise<Event[]> => {
      const response = await fetch(baseURL)
      if (!response.ok || response.status !== 200) throw new Error(errorMessage)
      const respJSON: Event[] = await response.json()
      return respJSON
    },
  }
}

export default EventsAPI
