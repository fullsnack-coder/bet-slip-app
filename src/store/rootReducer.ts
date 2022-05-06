import { combineReducers } from "redux"
import eventsReducer from "./modules/events"
import userBetsReducer from "./modules/userbets"

const rootReducer = combineReducers({
  eventsModule: eventsReducer,
  betsSlip: userBetsReducer,
})

export default rootReducer
