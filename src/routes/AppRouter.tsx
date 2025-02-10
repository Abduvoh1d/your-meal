import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "../pages/auth/SignIn"
import SignUp from "../pages/auth/SignUp"
import Dashboard from "../pages/admin/Dashboard.tsx"
import Products from "../pages/admin/Products.tsx"
import Categorys from "../pages/admin/Categorys.tsx"
import Filials from "../pages/admin/Filials.tsx"
import Customers from "../pages/admin/Customers.tsx"
import Main from "../pages/user/Main.tsx"
import PrivateRoute from "../components/PrivateRoute.tsx"
import NotFound from "../pages/404/NotFound.tsx"
import { AdminPagesConfig } from "../config/page.config.ts"
// import { useTranslation } from "react-i18next"
import Sidebar from "../components/Sidebar.tsx"

const AppRouter = () => {
    // const { i18n } = useTranslation()

    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path={`/admin`} element={<Sidebar />}>
                    <Route path={AdminPagesConfig.Dashboard} element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path={AdminPagesConfig.Maxsulotlar} element={<PrivateRoute><Products /></PrivateRoute>} />
                    <Route path={AdminPagesConfig.Kategorylar} element={<PrivateRoute><Categorys /></PrivateRoute>} />
                    <Route path={AdminPagesConfig.Filialar} element={<PrivateRoute><Filials /></PrivateRoute>} />
                    <Route path={AdminPagesConfig.Mijozlar} element={<PrivateRoute><Customers /></PrivateRoute>} />
                </Route>

                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Main />
                        </PrivateRoute>
                    }
                />

                {/* Default redirect */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
