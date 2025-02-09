import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 daqiqa - yangi so'rovlar olish uchun vaqtni belgilaydi

            retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // maksimal 30 soniya

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
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<>Hello</>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App