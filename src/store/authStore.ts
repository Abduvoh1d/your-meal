import { makeAutoObservable } from "mobx"

class AuthStore {
    token = localStorage.getItem("token") || ""

    constructor() {
        makeAutoObservable(this);
    }
}

const authStore = new AuthStore();
export { authStore }