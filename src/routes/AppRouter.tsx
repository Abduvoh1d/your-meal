import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AdminPagesConfig, AuthPagesConfig } from "../config/page.config.ts"
import Layout from "../components/Layout.tsx"
import { Loading } from "../components/Loading.tsx"
import Orders from "../pages/admin/Orders.tsx"

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
					<Route path={AdminPagesConfig.Buyurtmalar} element={<Orders />} />
					<Route path={AdminPagesConfig.Maxsulotlar} element={<Products />} />
					<Route path={AdminPagesConfig.Kategorylar} element={<Categorys />} />
					<Route path={AdminPagesConfig.Filialar} element={<Filials />} />
					<Route path={AdminPagesConfig.Mijozlar} element={<Customers />} />
					<Route path={AdminPagesConfig.Xisobot} element={<Dashboard />} />
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
