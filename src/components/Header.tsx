import LanguageCom from "./LanguageCom.tsx"
import { MdFullscreen } from "react-icons/md"

function Header() {
	return (
		<header
			className={
				"flex h-[80px] w-[calc(100vw-300px)] items-center justify-between border-l-[2px] border-[#EDEFF3] px-[20px] shadow-md"
			}
		>
			<img src="/img/logo_transparent.png" alt="" className={"size-20"} />

			<div className={"flex items-center gap-3"}>
				<LanguageCom />

				<div
					className={
						"cursor-pointer rounded-md border-2 border-gray-400 px-[10px] py-[8.4px] text-gray-400 transition hover:bg-gray-400 hover:text-white"
					}
				>
					<MdFullscreen className={"size-5"} />
				</div>
			</div>
		</header>
	)
}

export default Header
