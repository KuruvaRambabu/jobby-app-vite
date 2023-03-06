import {useContext } from "react";
import LoginStoreContext from "../context/LoginStoreContext";

const useLoginStore = ()=>{
    const loginStore = useContext(LoginStoreContext)

    if (!loginStore) {
        throw new Error('Provide store in Provider')
     }
    return loginStore
}

export {useLoginStore}