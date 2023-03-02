import LoginServiceInterface from ".";
import { userDetailsRequestObj } from "../../stores/types";

class LoginServiceAPI implements LoginServiceInterface{

    api:string
    constructor(){
        this.api = "https://apis.ccbp.in/login"
    }

    loginAPI = async(userDetails:userDetailsRequestObj) =>{
       const options = {
         method: 'POST',
         body: JSON.stringify(userDetails),
       }
   
       const response = await fetch(this.api, options)
       const data = await response.json()
       if (!response.ok) {
        throw new Error(data.error_msg);
      }
      return data
  }
}

export default LoginServiceAPI