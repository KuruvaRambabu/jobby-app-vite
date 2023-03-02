import {makeAutoObservable} from 'mobx'
import Cookies from "js-cookie"


class LoginStore {
 
  constructor() {
    makeAutoObservable(this)
  }

  onLoginApiSuccess(jwtToken: string) {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
  }
}

export default LoginStore
