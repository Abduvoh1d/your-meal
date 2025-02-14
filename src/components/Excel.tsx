import { saveAs } from "file-saver"
import * as XLSX from "xlsx"
import { RiFileExcel2Line } from "react-icons/ri"
import { ErrorToast, InfoToast } from "./toastify/Toastify.tsx"

interface ExcelProps {
	disable?: boolean
	className?: string
	iconClassName?: string
	name: string
}

function Excel({
	disable,
	className = "me-4 px-[10px] py-[9px] border-2 rounded border-[#20D472] bg-[#20D472]/10",
	iconClassName = "text-[#20D472] size-[18px]",
	name,
}: ExcelProps) {
	const handleExport = () => {
		const table = document.getElementById(name || "")
		if (table) {
			const ws = XLSX.utils.table_to_sheet(table)
			const wb = XLSX.utils.book_new()
			XLSX.utils.book_append_sheet(wb, ws, "Table")
			const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" })
			saveAs(new Blob([wbout], { type: "application/octet-stream" }), `${name}.xlsx`)
			InfoToast("Exel file download")
		} else {
			ErrorToast("Something went wrong in excel")
		}
	}

	return (
		<button disabled={disable} onClick={handleExport} className={className}>
			<RiFileExcel2Line className={iconClassName} />
		</button>
	)
}

export default Excel
