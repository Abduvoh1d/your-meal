import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppRouter from "./routes/AppRouter.tsx"
import { ConfigProvider } from "antd"
import "./i18n/i18n.ts"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 daqiqa - yangi so'rovlar olish uchun vaqtni belgilaydi

			retryDelay: attempt => Math.min(1000 * 2 ** attempt, 30000), // maksimal 30 soniya

			refetchOnWindowFocus: true,
			refetchOnReconnect: true,

			gcTime: 1000 * 60 * 10, // 10 daqiqa davomida keshda qoladi
		},
		mutations: {
			retry: 1,
		},
	},
})

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "Montserrat",
				},
				components: {
					Input: {
						hoverBorderColor: "#F7DA8F",
						activeBorderColor: "#FCB600",
						activeShadow: "",
						lineWidth: 2,
					},
					Menu: {
						colorText: "#000",
						itemMarginBlock: 5,
						itemActiveBg: "#FFF",
						itemSelectedBg: "#FCB600",
						itemSelectedColor: "#FFF",
					},
					Select: {
						lineWidth: 2,
						controlOutlineWidth: 0,
						colorBorder: "#9ca3af",
						hoverBorderColor: "#9ca3af",
						activeBorderColor: "#9ca3af",
						optionSelectedBg: "#d1d5db",
						optionSelectedColor: "#000",
					},
					Button: {
						lineWidth: 0,
						colorPrimary: "#20D472",
						colorPrimaryHover: "#20D472",
					},
				},
			}}
		>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<AppRouter />
			</QueryClientProvider>
		</ConfigProvider>
	)
}

export default App
