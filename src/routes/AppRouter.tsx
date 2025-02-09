import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/admin/Dashboard.tsx"
import Products from "../pages/admin/Products.tsx"
import Categorys from "../pages/admin/Categorys.tsx"
import Filials from "../pages/admin/Filials.tsx"
import Customers from "../pages/admin/Customers.tsx"
import Main from "../pages/user/Main.tsx"
import PrivateRoute from "../components/PrivateRoute.tsx"
import NotFound from "../pages/404/NotFound.tsx"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Auth routes */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

                {/* Admin routes */}
                <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/admin/products" element={<PrivateRoute><Products /></PrivateRoute>} />
                <Route path="/admin/categorys" element={<PrivateRoute><Categorys /></PrivateRoute>} />
                <Route path="/admin/filials" element={<PrivateRoute><Filials /></PrivateRoute>} />
                <Route path="/admin/customers" element={<PrivateRoute><Customers /></PrivateRoute>} />

                {/* User routes */}
                <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>} />

                {/* Default redirect */}
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
