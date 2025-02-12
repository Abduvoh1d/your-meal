import LanguageCom from "./LanguageCom.tsx"

function Header() {
    return (
        <header className={"w-[calc(100vw-300px)] h-[80px] px-[20px] border-l-[2px] border-[#EDEFF3] shadow-md flex items-center justify-between"}>
            <img src="/img/logo_transparent.png" alt="" className={'size-20'} />
            
            <LanguageCom/>
        </header>
    )
}

export default Header
