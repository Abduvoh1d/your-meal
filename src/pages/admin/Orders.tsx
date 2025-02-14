import Excel from "../../components/Excel.tsx"
import { useTranslation } from "react-i18next"
import { Button, Drawer, Table, TableProps } from "antd"
import { LuPencil, LuTrash2 } from "react-icons/lu"
import { useRouterPush } from "../../hooks/use-router-push.ts"
import { useLocationParams } from "../../hooks/use-location-params.ts"
import { AutoForm, IAutoForm } from "../../components/auto-form"
import { useForm } from "antd/es/form/Form"

function Orders() {
	const { t } = useTranslation()
	const { push } = useRouterPush()
	const [form] = useForm()
	const { query } = useLocationParams()

	function onClose() {
		push({ query: { ...query, add: undefined, edit: undefined } })
		form.resetFields()
	}

	function editeOrder(product: unknown) {
		push({ query: { ...query, edit: true } })
		form.setFieldsValue(product)
	}

	function addOrder() {
		push({ query: { ...query, add: true } })
	}

	const columns: TableProps["columns"] = [
		{
			title: t("Maxsulot"),
			dataIndex: "product",
			key: "1",
			width: 150,
		},
		{
			title: t("Kategoriya"),
			dataIndex: "category",
			key: "2",
			width: 150,
		},
		{
			title: t("Narxi"),
			dataIndex: "price",
			key: "3",
			width: 150,
		},
		{
			title: t("Qo’shimcha"),
			dataIndex: "comment",
			key: "4",
			width: 150,
		},
		{
			title: t("Hodisa"),
			key: "action",
			width: 10,
			render: (_, record: unknown) => (
				<div className={"flex items-center gap-3"}>
					<div
						onClick={() => editeOrder(record)}
						className={"cursor-pointer rounded-full border-[4px] border-[#EDEFF3] p-2"}
					>
						<LuPencil className={"size-5"} />
					</div>
					<div className={"cursor-pointer rounded-full border-[4px] border-[#EDEFF3] p-2"}>
						<LuTrash2 className={"size-5"} />
					</div>
				</div>
			),
		},
	]

	const data = [
		{
			key: "1",
			product: "Lavash Mini",
			category: "Lavash",
			price: 18.5,
			comment: "Kichkina lavash",
		},
		{
			key: "2",
			product: "Lavash Mini",
			category: "Lavash",
			price: 18.5,
			comment: "Kichkina lavash",
		},
		{
			key: "3",
			product: "Lavash Mini",
			category: "Lavash",
			price: 18.5,
			comment: "Kichkina lavash",
		},
	]

	const AutoFormData: IAutoForm[] = [
		{
			name: "product",
			label: t("Maxsulot nomi"),
			type: "input",
			required: true,
			span: 24,
			className: "!h-[45px] ps-[15px]",
			// placeholder: t("Maxsulot nomini kiriting"),
		},
		{
			name: "category",
			label: t("Kategoriya"),
			type: "input",
			required: true,
			span: 24,
			className: "!h-[45px] ps-[15px]",
			// placeholder: t("Kategoriya nomini kiriting"),
		},
		{
			name: "price",
			label: t("Narxi"),
			type: "input",
			required: true,
			span: 24,
			className: "!h-[45px] ps-[15px]",
			// placeholder: t("Narxi kiriting"),
		},
		{
			name: "comment",
			label: t("Qo’shimcha ma’lumot"),
			type: "input",
			required: true,
			span: 24,
			className: "!h-[45px] ps-[15px]",
			// placeholder: t("Qo’shimcha kiriting"),
		},
	]

	return (
		<div className={"min-h-[calc(100vh-80px)] bg-[#EDEFF3] p-[20px]"}>
			<div className={"mb-5 flex items-center justify-between"}>
				<p className={"text-[28px] font-semibold"}>{t("Buyurtmalar")}</p>

				<div className={"flex items-center gap-1"}>
					<Excel name={"orders"} />

					<div
						onClick={() => addOrder()}
						className={"cursor-pointer select-none rounded border-2 border-[#9CA3AF] px-3 py-[6px]"}
					>
						{t("Maxsulot qo'shish")}
					</div>
				</div>
			</div>

			<Table
				id={"orders"}
				columns={columns}
				dataSource={data}
				size={"middle"}
				pagination={false}
				rowHoverable={false}
			/>

			<Drawer
				title={query.add ? t("Yangi maxsulot qo’shish") : t("Maxsulotni o'zgartirish")}
				onClose={onClose}
				open={Boolean(query.edit) || Boolean(query.add)}
				width={500}
			>
				<AutoForm data={AutoFormData} form={form} layout={"vertical"} />

				<Button type={"primary"} className={"px-[35px] py-[9px]"} size={"large"} onClick={() => form.submit()}>
					{query.add ? t("Qo’shish") : t("O’zgartirish")}
				</Button>
			</Drawer>
		</div>
	)
}

export default Orders
