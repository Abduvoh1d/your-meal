import { MdFullscreen, MdFullscreenExit } from "react-icons/md"
import { useFullscreen } from "ahooks"

function FullScreen() {
	const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.documentElement)

	return (
		<div
			onClick={toggleFullscreen}
			className={
				"cursor-pointer rounded-md border-2 border-gray-400 px-[10px] py-[8.4px] text-gray-400 transition hover:bg-gray-400 hover:text-white"
			}
		>
			{isFullscreen ? <MdFullscreenExit className={"size-5"} /> : <MdFullscreen className={"size-5"} />}
		</div>
	)
}

export default FullScreen
