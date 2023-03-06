import { useMutation } from "react-query";
import { useLoginService } from "./useLoginService";
import { useLoginStore } from "./useLoginStore";

export const useloginAPI = ()=>{
const loginStore = useLoginStore()
const loginService = useLoginService()

    return useMutation<any | unknown,any,any>(loginService.loginAPI,{
    onSuccess: (data)=>{
        loginStore.onLoginApiSuccess(data.jwt_token)
    }
    })
}

