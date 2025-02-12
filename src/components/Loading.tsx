import { Riple } from "react-loading-indicators"

export function Loading() {
	return (
		<div className={"flex h-[100vh] w-[100%] items-center justify-center"}>
			<Riple color="#0ea5e9" size="medium" text="" textColor="" />
		</div>
	)
}
