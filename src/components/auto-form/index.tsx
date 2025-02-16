import {
	Checkbox,
	CheckboxOptionType,
	Col,
	ColorPicker,
	ConfigProvider,
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
import { FaPlus } from "react-icons/fa6"
import Search from "antd/es/input/Search"

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
	skeleton?: boolean
	skeletonSize?: "small" | "large" | "default"
	variant?: "filled" | "borderless" | "outlined"
	required?: { required: boolean; message: string }[]
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
		| "search"
}

// const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-_]+)(\.[a-zA-Z]{2,})(\/[^\s]*)?$/
// const phoneRegex = /^(\+998)[0-9]{9}$/

interface AutoFormProps<T = unknown> {
	data: IAutoForm[]
	form: FormInstance
	loading?: boolean
	className?: string
	gutter?: [number, number]
	onFinish?: (values: T) => void
	onFinishFailed?: (values: T) => void
	onValuesChange?: (values: T) => void
	layout?: "vertical" | "horizontal"
	variant?: "filled" | "borderless" | "outlined"
}

const getSkeletonSize = (props: IAutoForm) => {
	if (props.skeletonSize) return props.skeletonSize
	switch (props.size) {
		case "small":
			return "small"
		case "middle":
			return "default"
		case "large":
			return "large"
		default:
			return "large"
	}
}

function getInput(props: IAutoForm, loading?: boolean) {
	if (loading || props.skeleton) {
		switch (props.type) {
			case "checkbox":
				return (
					<div className="flex items-center gap-2">
						<Skeleton.Avatar active size={16} shape="square" className="h-4 w-4 min-w-4" />
						<Skeleton.Input active size="small" className="h-4 w-20" />
					</div>
				)
			case "radio":
				return (
					<div className="flex gap-4">
						{[...Array(props.radioOption?.length || 2)].map((_, i) => (
							<div key={i} className="flex items-center gap-2">
								<Skeleton.Avatar active size={16} shape="circle" className="h-4 w-4 min-w-4" />
								<Skeleton.Input active size="small" className="h-4 w-12" />
							</div>
						))}
					</div>
				)
			case "upload":
				return <Skeleton.Image active />
			case "colorPicker":
				return <Skeleton.Avatar active size={32} shape="square" className="h-8 w-8" />
			case "textarea":
				return (
					<Skeleton.Input
						active
						block
						size={getSkeletonSize(props)}
						style={{ height: (props.rows || 3) * 24 }}
					/>
				)
			case "rangePicker":
				return <Skeleton.Input active block size={getSkeletonSize(props)} />
			default:
				return <Skeleton.Input active block size={getSkeletonSize(props)} />
		}
	}

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

	switch (props.type) {
		case "input":
			return <Input {...commonProps} {...length} />
		case "search":
			return <Search {...commonProps} {...length} loading={loading} />
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
			return (
				<Upload action="/upload.do" listType="picture-card">
					<button style={{ border: 0, background: "none" }} type="button">
						<FaPlus />
						<div style={{ marginTop: 8 }}>Upload</div>
					</button>
				</Upload>
			)
		case "select":
			return <Select options={props.selectOption} {...commonProps} size={props.size} />
		case "colorPicker":
			return <ColorPicker {...commonProps} size={props.size} className={"p-1"} />
		default:
			return <Input {...commonProps} {...length} size={props.size} className={"w-[100%]"} />
	}
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
	return (
		<ConfigProvider
			theme={{
				components: {
					Input: {
						lineWidth: 2,
						activeShadow: "",
						hoverBorderColor: "#F7DA8F",
						activeBorderColor: "#FCB600",
					},
					InputNumber: {
						lineWidth: 2,
						activeShadow: "",
						hoverBorderColor: "#F7DA8F",
						activeBorderColor: "#FCB600",
					},
					DatePicker: {
						lineWidth: 2,
						activeShadow: "",
						hoverBorderColor: "#F7DA8F",
						activeBorderColor: "#FCB600",
						controlItemBgActive: "#F7DA8F",
					},
					Select: {
						lineWidth: 2,
						optionSelectedBg: "#FCB600",
						activeOutlineColor: "none",
						hoverBorderColor: "#F7DA8F",
						activeBorderColor: "#FCB600",
						optionSelectedColor: "#FFF",
					},
				},
			}}
		>
			<Form
				form={form}
				layout={layout}
				variant={variant}
				onFinish={onFinish}
				className={className}
				onFinishFailed={onFinishFailed}
				onValuesChange={onValuesChange}
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
								rules={item.required}
							>
								{getInput(item, loading)}
							</Form.Item>
						</Col>
					))}
				</Row>
			</Form>
		</ConfigProvider>
	)
}
