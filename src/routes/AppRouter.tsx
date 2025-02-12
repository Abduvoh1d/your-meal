import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AdminPagesConfig, AuthPagesConfig } from "../config/page.config.ts"
import Layout from "../components/Layout.tsx"
import { Loading } from "../components/Loading.tsx"
import Orders from "../pages/admin/Orders.tsx"
import PrivateRoute from "../components/PrivateRoute.tsx"

const SignIn = lazy(() => import("../pages/auth/SignIn"))
const SignUp = lazy(() => import("../pages/auth/SignUp"))
const Dashboard = lazy(() => import("../pages/admin/Report.tsx"))
const Products = lazy(() => import("../pages/admin/Products"))
const Categorys = lazy(() => import("../pages/admin/Categorys"))
const Filials = lazy(() => import("../pages/admin/Filials"))
const Customers = lazy(() => import("../pages/admin/Customers"))
const Main = lazy(() => import("../pages/user/Main"))
const NotFound = lazy(() => import("../pages/404/NotFound"))

const AppRoutes = () => {
	const location = useLocation()
	const currentLang = location.pathname.split("/")[1] || "uz"

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path={AuthPagesConfig.Login} element={<SignIn />} />
				<Route path={AuthPagesConfig.Register} element={<SignUp />} />

				<Route path={`/${currentLang}/admin`} element={<Layout />}>
					<Route
						path={AdminPagesConfig.Buyurtmalar}
						element={
							<PrivateRoute>
								<Orders />
							</PrivateRoute>
						}
					/>
					<Route
						path={AdminPagesConfig.Maxsulotlar}
						element={
							<PrivateRoute>
								<Products />
							</PrivateRoute>
						}
					/>
					<Route
						path={AdminPagesConfig.Kategorylar}
						element={
							<PrivateRoute>
								<Categorys />
							</PrivateRoute>
						}
					/>
					<Route
						path={AdminPagesConfig.Filialar}
						element={
							<PrivateRoute>
								<Filials />
							</PrivateRoute>
						}
					/>
					<Route
						path={AdminPagesConfig.Mijozlar}
						element={
							<PrivateRoute>
								<Customers />
							</PrivateRoute>
						}
					/>
					<Route
						path={AdminPagesConfig.Xisobot}
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
				</Route>

				<Route path="/" element={<Navigate to={`/${currentLang}/main`} replace />} />

				<Route path={`/${currentLang}/main`} element={<Main />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	)
}

const AppRouter = () => {
	return (
		<Router>
			<AppRoutes />
		</Router>
	)
}

export default AppRouter
