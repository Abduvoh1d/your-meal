import axios from "axios"
import { useNavigate } from "react-router-dom"

const BASE_URL = "https://your-meal-rwy5.onrender.com"

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
})

// Access tokenni olish va har bir so'rovga qo'shish uchun interseptor
api.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem("accessToken") // access tokenni localStorage'dan olish
		if (accessToken) {
			config.headers["Authorization"] = `Bearer ${accessToken}`
		}

		return config
	},
	error => {
		return Promise.reject(error)
	}
)

// Javobda xato bo'lsa, tokenni yangilash uchun interseptor
api.interceptors.response.use(
	response => {
		return response
	},
	async error => {
		const originalRequest = error.config

		// Agar xato 401 bo'lsa va bu yangilangan token so'rovi bo'lmasa:
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			try {
				// refresh token yordamida yangi access token olish
				const refreshToken = localStorage.getItem("refreshToken")
				const accessToken = localStorage.getItem("accessToken")
				const response = await axios.post(`${BASE_URL}/auth/refresh`, {
					refreshToken: refreshToken,
					accessToken: accessToken,
				})

				// Yangi access tokenni saqlash
				const newAccessToken = response.data.accessToken
				localStorage.setItem("accessToken", newAccessToken)

				// Oldingi so'rovni yangi token bilan qayta yuborish
				api.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`
				originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`

				return api(originalRequest)
			} catch (err) {
				localStorage.removeItem("accessToken")
				localStorage.removeItem("refreshToken")
				localStorage.removeItem("role")
				window.location.href = "/login"
			}
		}

		// Agar 401 bo'lsa va refresh token ham ishlamasa, foydalanuvchini login sahifasiga yo'naltirish
		if (error.response.status === 401) {
			// Foydalanuvchini login sahifasiga yo'naltirish
			const navigate = useNavigate()
			localStorage.removeItem("accessToken")
			localStorage.removeItem("refreshToken")
			navigate("/login")
		}

		return Promise.reject(error)
	}
)

export default api
