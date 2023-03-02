import LoginServiceInterface from ".";
import { userDetailsRequestObj } from "../../stores/types";

class LoginServiceAPI implements LoginServiceInterface{

    api:string
    constructor(){
        this.api = "https://apis.ccbp.in/login"
    }

    loginAPI = async(userDetails:userDetailsRequestObj) =>{
       const url = 'https://apis.ccbp.in/login'
       const options = {
         method: 'POST',
         body: JSON.stringify(userDetails),
       }
   
       const response = await fetch(url, options)
       const data = await response.json()
       if (!response.ok) {
        throw new Error(data.error_msg);
      }
      return data
}
}

export default LoginServiceAPI