import Sidebar from "./Sidebar.tsx"
import Header from "./Header.tsx"
import { Outlet } from "react-router-dom"

function Layout() {
	return (
		<div className={"relative flex min-h-screen w-full items-start justify-start"}>
			<Sidebar />
			<div>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
