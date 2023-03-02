import { useContext } from "react";
import { useMutation } from "react-query";
import { useLoginService } from "./loginServiceHook";
import StoresContext from "./storeHook";

export const useloginAPI = ()=>{
const stores = useContext(StoresContext)
const loginService = useLoginService()
const {loginStore} = stores

    return useMutation<any | unknown,any,any>(loginService.loginAPI,{
    onSuccess: (data)=>{
        loginStore.onLoginApiSuccess(data.jwt_token)
    }
    })
}

