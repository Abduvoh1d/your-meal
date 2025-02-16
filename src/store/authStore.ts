import { makeAutoObservable } from "mobx"
import api from "../api"
import { ISignIn, ISignUp, IToken } from "../interface"
import { AxiosResponse } from "axios"
import { ErrorToast, SuccessToast } from "../components/toastify/Toastify.tsx"

class Auth {
	accessToken = localStorage.getItem("token") || ""

	constructor() {
		makeAutoObservable(this)
	}

	get isAuthenticated() {
		return !!this.accessToken
	}

	setToken(accessToken: string, refreshToken: string) {
		this.accessToken = accessToken
		localStorage.setItem("accessToken", accessToken)
		localStorage.setItem("refreshToken", refreshToken)
	}

	clearToken() {
		this.accessToken = ""
		localStorage.removeItem("accessToken")
		localStorage.removeItem("refreshToken")
	}

	async login(data: ISignIn) {
		try {
			const response: AxiosResponse<IToken> = await api.post("/auth/login", data)
			this.setToken(response.data.accessToken, response.data.refreshToken)
			SuccessToast("Xush kelibsiz")
		} catch (error) {
			ErrorToast("Login xatolik")
		}
	}

	async register(data: ISignUp) {
		try {
			const response: AxiosResponse<IToken> = await api.post("/auth/register", data)
			this.setToken(response.data.accessToken, response.data.refreshToken)
			SuccessToast("Xush kelibsiz")
		} catch (error) {
			ErrorToast("Registration xatolik")
		}
	}
}

const AuthStore = new Auth()
export default AuthStore
