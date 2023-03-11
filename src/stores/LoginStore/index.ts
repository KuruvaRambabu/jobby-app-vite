import {makeAutoObservable} from 'mobx'
import Cookies from "js-cookie"

import apiConstants from '../../constants/apiConstants'

import { userDetailsRequestObj } from '../types'



class LoginStore {
  apiStatus!:string
  errorMessage!:string|null

  constructor() {
    makeAutoObservable(this)
    this.init()
  }

  init(){
    this.apiStatus = apiConstants.initial
    this.errorMessage = null
  }

  onClickLogin = async (
     userDetails:userDetailsRequestObj, 
     onSubmitSuccess: () => void) => 
     {
    this.apiStatus = apiConstants.fetching
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginApiSuccess(data.jwt_token)
      onSubmitSuccess()
    } else {
      this.onLoginApiFailure(data.error_msg)
    }
  }

  onLoginApiSuccess(jwtToken: string) {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    this.apiStatus = apiConstants.success
  }

  onLoginApiFailure(errMsg: string|null) {
    this.apiStatus = apiConstants.failure
    this.errorMessage = errMsg
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
  }
}

export default LoginStore
