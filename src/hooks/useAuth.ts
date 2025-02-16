import { observer } from "mobx-react-lite"
import { JSX } from "react"
import AuthStore from "../store/authStore.ts"

export const useAuth = () => {
	return { isAuthenticated: AuthStore.isAuthenticated }
}

export const AuthObserver = observer(({ children }: { children: JSX.Element }) => {
	return AuthStore.isAuthenticated ? children : null
})
