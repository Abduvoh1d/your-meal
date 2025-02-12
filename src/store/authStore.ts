import { makeAutoObservable } from "mobx"

class AuthStore {
	token = localStorage.getItem("token") || ""

	constructor() {
		makeAutoObservable(this)
	}

	get isAuthenticated() {
		return !!this.token
	}

	setToken(newToken: string) {
		this.token = newToken
		localStorage.setItem("token", newToken)
	}

	clearToken() {
		this.token = ""
		localStorage.removeItem("token")
	}
}

const authStore = new AuthStore()
export { authStore }
