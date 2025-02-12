import { observer } from "mobx-react-lite"
import { authStore } from "../store/authStore"
import { JSX } from "react"

export const useAuth = () => {
    return { isAuthenticated: authStore.isAuthenticated }
}

export const AuthObserver = observer(({ children }: { children: JSX.Element }) => {
    return authStore.isAuthenticated ? children : null
})
