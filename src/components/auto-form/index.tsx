import {
	Checkbox,
	CheckboxOptionType,
	Col,
	ColorPicker,
	DatePicker,
	Form,
	FormInstance,
	Input,
	InputNumber,
	Radio,
	Row,
	Select,
	SelectProps,
	Skeleton,
	TimePicker,
	Upload,
} from "antd"

export interface IAutoForm {
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	xxl?: number
	rows?: number
	span?: number
	label?: string
	message?: string
	minLength?: number
	maxLength?: number
	required?: boolean
	className?: string
	disabled?: boolean
	placeholder?: string
	skeletonBlock?: boolean
	name?: string | string[]
	skeletonClassName?: string
	labelAlign?: "left" | "right"
	selectOption?: SelectProps["options"]
	radioOption?: CheckboxOptionType[]
	size?: "small" | "middle" | "large"
	skeletonSize?: "small" | "large" | "default"
	variant?: "filled" | "borderless" | "outlined"
	type?:
		| "input"
		| "textarea"
		| "password"
		| "checkbox"
		| "datePicker"
		| "rangePicker"
		| "number"
		| "timePicker"
		| "radio"
		| "upload"
		| "url"
		| "select"
		| "phone"
		| "colorPicker"
}

const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-_]+)(\.[a-zA-Z]{2,})(\/[^\s]*)?$/
const phoneRegex = /^(\+998)[0-9]{9}$/

export interface AutoFormProps {
	data: IAutoForm[]
	form: FormInstance
	className?: string
	gutter?: [number, number]
	layout?: "vertical" | "horizontal"
	onFinish?: (values: unknown) => void
	onFinishFailed?: (values: unknown) => void
	onValuesChange?: (values: unknown) => void
	variant?: "filled" | "borderless" | "outlined"
	loading?: boolean
}

export function AutoForm({
	data,
	layout = "vertical",
	gutter = [20, 0],
	form,
	className,
	onFinish,
	variant,
	onFinishFailed,
	onValuesChange,
	loading,
}: AutoFormProps) {
	function getInput(props: IAutoForm) {
		const commonProps = {
			className: props.className,
			placeholder: props.placeholder,
			disabled: props.disabled,
		}

		const length = {
			minLength: props.minLength,
			maxLength: props.maxLength,
			size: props.size,
			variant: props.variant,
		}

		if (loading) {
			return (
				<Skeleton.Input
					active
					block={props.skeletonBlock}
					className={props.skeletonClassName}
					size={props.skeletonSize ?? "large"}
				/>
			)
		}

		switch (props.type) {
			case "input":
				return <Input {...commonProps} {...length} />
			case "password":
				return <Input.Password {...commonProps} {...length} />
			case "number":
				return <InputNumber {...commonProps} {...length} className={"w-[100%]"} />
			case "url":
				return <Input {...commonProps} {...length} />
			case "phone":
				return <Input {...commonProps} {...length} />
			case "textarea":
				return <Input.TextArea {...commonProps} {...length} rows={props.rows} />
			case "checkbox":
				return <Checkbox className={props.className}>{props.label}</Checkbox>
			case "datePicker":
				return <DatePicker {...commonProps} size={props.size} />
			case "rangePicker":
				return <DatePicker.RangePicker size={props.size} />
			case "timePicker":
				return <TimePicker {...commonProps} size={props.size} />
			case "radio":
				return <Radio.Group options={props.radioOption} {...commonProps} />
			case "upload":
				return <Upload multiple={false} maxCount={1} />
			case "select":
				return <Select options={props.selectOption} {...commonProps} size={props.size} />
			case "colorPicker":
				return <ColorPicker {...commonProps} size={props.size} className={"p-1"} />
			default:
				return <Input {...commonProps} {...length} size={props.size} className={"w-[100%]"} />
		}
	}

	return (
		<Form
			form={form}
			layout={layout}
			variant={variant}
			onFinish={onFinish}
			className={className}
			onFinishFailed={onFinishFailed}
			onValuesChange={onValuesChange}
			// initialValues={data.map(item => {
			//     item.name: query.name;
			// })}
		>
			<Row gutter={gutter}>
				{data?.map((item, index) => (
					<Col
						key={index}
						span={item.span ?? 12}
						xs={item.xs}
						sm={item.sm}
						md={item.md}
						lg={item.lg}
						xl={item.xl}
						xxl={item.xxl}
					>
						<Form.Item
							label={item.type === "checkbox" ? undefined : item.label}
							labelAlign={item.labelAlign}
							name={item.name}
							valuePropName={item.type === "checkbox" ? "checked" : "value"}
							rules={[
								{
									required: item.required,
									message: item.message,
								},
								...(item.type === "url"
									? [
											{
												validator: (_: unknown, value: string) => {
													if (!value || urlRegex.test(value)) {
														return Promise.resolve()
													}
													return Promise.reject(item.message)
												},
											},
										]
									: []),
								...(item.type === "phone"
									? [
											{
												validator: (_: unknown, value: string) => {
													if (!value || phoneRegex.test(value)) {
														return Promise.resolve()
													}
													return Promise.reject("Telefon raqam noto'g'ri kiritilgan")
												},
											},
										]
									: []),
							]}
						>
							{getInput(item)}
						</Form.Item>
					</Col>
				))}
			</Row>
		</Form>
	)
}
