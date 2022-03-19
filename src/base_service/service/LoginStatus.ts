import CookieService from './CookieService'
import { Constants } from '../../domain/constants'

class LoginStatus {
    private static instance: LoginStatus

    public static getInstance(): LoginStatus {
        this.instance || (this.instance = new LoginStatus())
        return this.instance
    }


    public isLoginSuccess() {
        const loginStatus: string | null = CookieService.getCookie(Constants.LOGIN_STATUS)
        console.log(loginStatus)
        return loginStatus !== null
    }

    public logOut() {
        CookieService.delCookie(Constants.LOGIN_STATUS)
    }

    public setlogInSuccess() {
        CookieService.setCookie(Constants.LOGIN_STATUS, Constants.LOGIN_STATUS, 10000)
    }

}

export default LoginStatus.getInstance()
