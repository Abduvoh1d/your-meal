import { Menu, MenuProps } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import checkIcon from "../assets/icons/check-circle.svg"
import boxIcon from "../assets/icons/box.svg"
import chartIcon from "../assets/icons/chart.svg"
import layersIcon from "../assets/icons/layers.svg"
import locationIcon from "../assets/icons/location.svg"
import usersIcon from "../assets/icons/users.svg"
import logOutIcon from "../assets/icons/log-out.svg"
import { AdminPagesConfig, AuthPagesConfig } from "../config/page.config.ts"
import { useTranslation } from "react-i18next"

function Sidebar() {
	const { t } = useTranslation()
	const location = useLocation()
	const navigate = useNavigate()

	type MenuItem = Required<MenuProps>["items"][number]

	const items: MenuItem[] = [
		{
			key: AdminPagesConfig.Buyurtmalar,
			label: t("Buyurtmalar"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={checkIcon} alt="check" style={{ width: 16, height: 16 }} />
				</div>
			),
		},
		{
			key: AdminPagesConfig.Maxsulotlar,
			label: t("Maxsulotlar"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={boxIcon} alt="box" style={{ width: 16, height: 16 }} />
				</div>
			),
		},
		{
			key: AdminPagesConfig.Kategorylar,
			label: t("Kategorylar"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={layersIcon} alt="layers" style={{ width: 16, height: 16 }} />
				</div>
			),
		},
		{
			key: AdminPagesConfig.Filialar,
			label: t("Filiallar"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={locationIcon} alt="location" style={{ width: 16, height: 16 }} />
				</div>
			),
		},
		{
			key: AdminPagesConfig.Mijozlar,
			label: t("Mijozlar"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={usersIcon} alt="users" style={{ width: 16, height: 16 }} />
				</div>
			),
		},
		{
			key: AdminPagesConfig.Xisobot,
			label: t("Xisobot"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={chartIcon} alt="chart" style={{ width: 16, height: 16 }} />
				</div>
			),
		},
	]

	const logOutItem: MenuItem[] = [
		{
			type: "divider",
		},
		{
			key: AuthPagesConfig.Login,
			label: t("Chiqish"),
			icon: (
				<div className="rounded-[6px] bg-[#F6F6F6] p-[10px]">
					<img src={logOutIcon} alt="logout" width={16} height={16} />
				</div>
			),
			onClick: () => {
				localStorage.removeItem("token")
				navigate(`/${AuthPagesConfig.Login}`)
			},
		},
	]

	const onClick: MenuProps["onClick"] = e => {
		navigate(e.key)
	}

	return (
		<div className="sticky left-0 top-0 h-[100vh] w-[300px] bg-white shadow-md">
			<div className="flex items-center justify-between px-6 pb-[50px] pt-7">
				<img src="/img/sidebarLogo.svg" alt="Logo" className="mb-2 h-20 w-20 rounded-full object-cover" />
				<div>
					<h2 className="font-[Nunito Sans] text-lg font-[700]">Fast Food</h2>
					<p className="font-[Nunito Sans] text-sm text-[#959CA1]">Online maxsulot sotuvi</p>
				</div>
			</div>

			<Menu
				onClick={onClick}
				className={"left-0 top-0 w-[100%]"}
				selectedKeys={[location.pathname.substring(10)]}
				mode="inline"
				items={items}
			/>

			<div className="absolute bottom-5 w-full">
				<Menu mode="inline" items={logOutItem} />
			</div>
		</div>
	)
}

export default Sidebar
