import Excel from "../../components/Excel.tsx"
import { useTranslation } from "react-i18next"
import { Button, Drawer, FormProps, Table, TableProps } from "antd"
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

	const onFinish: FormProps["onFinish"] = (values: unknown) => {
		console.log(values)
		onClose()
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
			label: t("Maxsulot nomi"),
			name: "product",
			type: "input",
			size: "large",
			span: 24,
			className: "ps-[15px]",
			required: [{ required: true, message: "Maxsulot nomini kiriting!" }],
		},
		{
			label: t("Kategoriya"),
			name: "category",
			type: "select",
			size: "large",
			selectOption: [
				{ value: "Lavash1", label: "Lavash" },
				{ value: "Lavash2", label: "Lavash2" },
			],
			span: 24,
			required: [{ required: true, message: "Maxsulot kategoriyasini tanlang!" }],
		},
		{
			label: t("Narxi"),
			name: "price",
			type: "number",
			size: "large",
			span: 24,
			className: "ps-[15px]",
			required: [{ required: true, message: "Maxsulot narxini kiriting!" }],
		},
		{
			label: t("Qo’shimcha ma’lumot"),
			name: "comment",
			type: "input",
			size: "large",
			span: 24,
			className: "ps-[15px]",
			required: [{ required: true, message: "Qo'shimcha ma'lumot kiriting!" }],
		}
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
				footer={
					<Button
						type="primary"
						htmlType={"submit"}
						size="large"
						className="w-full py-[9px]"
						onClick={() => form.submit()}
					>
						{query.add ? t("Qo’shish") : t("O’zgartirish")}
					</Button>
				}
			>
				<AutoForm data={AutoFormData} form={form} onFinish={onFinish} layout="vertical" loading={false}/>
			</Drawer>
		</div>
	)
}

export default Orders
