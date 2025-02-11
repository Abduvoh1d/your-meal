import Sidebar from "./Sidebar.tsx"
import Header from "./Header.tsx"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className={"relative flex items-start justify-start w-full min-h-screen"}>
            <Sidebar />
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
