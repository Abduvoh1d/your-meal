import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { JSX } from "react"

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const { isAuthenticated } = useAuth()

	return isAuthenticated ? children : <Navigate to="/sign-in" replace />
}

export default PrivateRoute
