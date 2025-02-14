import LanguageCom from "./LanguageCom.tsx"
import FullScreen from "./FullScreen.tsx"

function Header() {
	return (
		<header
			className={
				"flex h-[80px] min-w-[calc(100vw-300px)] items-center justify-between border-l-[2px] border-[#EDEFF3] px-[20px] shadow-md"
			}
		>
			<img src="/img/logo_transparent.png" alt="" className={"size-20 select-none"} />

			<div className={"flex items-center gap-3"}>
				<LanguageCom />
				<FullScreen />
			</div>
		</header>
	)
}

export default Header
