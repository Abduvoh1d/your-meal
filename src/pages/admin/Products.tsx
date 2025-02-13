import { useTranslation } from "react-i18next"
import Excel from "../../components/Excel.tsx"

function Products() {
	const { t } = useTranslation()

	return (
		<div className={"min-h-[calc(100vh-80px)] bg-[#EDEFF3] p-[20px]"}>
			<div className={"flex items-center justify-between"}>
				<p className={"text-[28px] font-semibold"}>{t("Maxsulotlar")}</p>

				<Excel name={"orders"} />
			</div>
		</div>
	)
}

export default Products
