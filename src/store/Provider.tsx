import { Provider } from "react-redux"
import appStore from "./app"

const StoreProvider: React.FC<any> = ({ children }) => {
  return <Provider store={appStore}>{children}</Provider>
}

export default StoreProvider
