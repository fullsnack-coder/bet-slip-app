import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

const appStore = createStore(rootReducer, applyMiddleware(compose(thunk)))

export default appStore
