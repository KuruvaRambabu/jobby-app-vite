import { userDetailsRequestObj } from "../../stores/types";

interface LoginServiceInterface{
    loginAPI:(requestObject:userDetailsRequestObj)=>Promise<any>
}

export default LoginServiceInterface