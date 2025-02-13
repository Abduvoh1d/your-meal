import Excel from "../../components/Excel.tsx"
import { useTranslation } from "react-i18next"
import { Table, TableProps } from "antd"

function Orders() {
	const { t } = useTranslation()

	const columns: TableProps["columns"] = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: text => <a>{text}</a>,
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
		// {
		// 	title: 'Action',
		// 	key: 'action',
		// 	render: (_, record) => (
		// 		<div>
		//
		// 		</div>
		// 	),
		// },
	]

	const data = [
		{
			key: "1",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
		},
		{
			key: "2",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
		},
		{
			key: "3",
			name: "Joe Black",
			age: 32,
			address: "Sydney No. 1 Lake Park",
		},
	]

	return (
		<div className={"min-h-[calc(100vh-80px)] bg-[#EDEFF3] p-[20px]"}>
			<div className={"mb-5 flex items-center justify-between"}>
				<p className={"text-[28px] font-semibold"}>{t("Buyurtmalar")}</p>

				<Excel name={"orders"} />
			</div>

			<Table id={"orders"} columns={columns} dataSource={data} />
		</div>
	)
}

export default Orders
