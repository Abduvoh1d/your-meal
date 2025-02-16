export interface IToken {
	accessToken: string
	refreshToken: string
}

export interface ISignUp {
	firstName: string
	lastName: string
	email: string
	password: string
}

export interface ISignIn {
	email: string
	password: string
}
