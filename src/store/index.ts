export { default as StoreProvider } from "./Provider"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import appStore from "./app"

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export type StoreAction<P = any> = { type: string; payload?: P }

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => Dispatch<any> = () =>
  useDispatch<AppDispatch>()

export { appStore }
