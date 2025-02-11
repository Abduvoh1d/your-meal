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

function Sidebar() {
    const location = useLocation()
    const navigate = useNavigate()

    type MenuItem = Required<MenuProps>["items"][number]

    const items: MenuItem[] = [
        {
            key: AdminPagesConfig.Buyurtmalar,
            label: "Buyurtmalar",
            icon: (
                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                    <img src={checkIcon} alt="check" style={{ width: 16, height: 16 }} />
                </div>
            ),
        },
        {
            key: AdminPagesConfig.Maxsulotlar,
            label: "Maxsulotlar",
            icon: (
                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                    <img src={boxIcon} alt="box" style={{ width: 16, height: 16 }} />
                </div>
            ),
        },
        {
            key: AdminPagesConfig.Kategorylar,
            label: "Kategorylar",
            icon: (
                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                    <img src={layersIcon} alt="layers" style={{ width: 16, height: 16 }} />
                </div>
            ),
        },
        {
            key: AdminPagesConfig.Filialar,
            label: "Filialar",
            icon: (
                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                    <img src={locationIcon} alt="location" style={{ width: 16, height: 16 }} />
                </div>
            ),
        },
        {
            key: AdminPagesConfig.Mijozlar,
            label: "Mijozlar",
            icon: (
                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                    <img src={usersIcon} alt="users" style={{ width: 16, height: 16 }} />
                </div>
            ),
        },
        {
            key: AdminPagesConfig.Xisobot,
            label: "Xisobot",
            icon: (
                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                    <img src={chartIcon} alt="chart" style={{ width: 16, height: 16 }} />
                </div>
            ),
        },
    ]

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key)
    }

    return (
        <div className="sticky top-0 left-0 w-[300px] h-[100vh] bg-white shadow-md">
            <div className="flex items-center gap-[20px] ps-6 pt-7 pb-[50px]">
                <img src="/img/sidebarLogo.svg" alt="Logo" className="w-20 h-20 rounded-full object-cover mb-2" />
                <div>
                    <h2 className="text-lg font-[700]">Fast Food</h2>
                    <p className="text-[#959CA1] text-sm">Online maxsulot sotuvi</p>
                </div>
            </div>

            <Menu
                onClick={onClick}
                className={"top-0 left-0 w-[100%]"}
                selectedKeys={[location.pathname.substring(7)]}
                mode="inline"
                items={items}
            />

            <div className="absolute bottom-5 w-full">
                <Menu
                    mode="inline"
                    items={[
                        {
                            type: "divider",
                        },
                        {
                            key: AuthPagesConfig.Login,
                            label: "Chiqish",
                            icon: (
                                <div className="p-[10px] bg-[#F6F6F6] rounded-[6px]">
                                    <img src={logOutIcon} alt="logout" width={16} height={16} />
                                </div>
                            ),
                            onClick: () => {
                                localStorage.removeItem("token")
                                navigate(`/${AuthPagesConfig.Login}`)
                            },
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default Sidebar
