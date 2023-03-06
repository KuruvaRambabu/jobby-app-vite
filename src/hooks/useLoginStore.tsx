import { createContext, ReactElement, useContext } from "react";
import LoginStore from "../stores/LoginStore";



const LoginStoreContext = createContext<LoginStore | null>(null)

export const LoginStoreProvider = (props: { children: ReactElement }) => {
    const { children } = props
    const loginStore = new LoginStore()

    return (<LoginStoreContext.Provider value={loginStore}>{children}</LoginStoreContext.Provider>
    )
}


const useLoginStore = () => {
    const loginStore = useContext(LoginStoreContext)

    if (!loginStore) {
        throw new Error('Provide store in Provider')
    }
    return loginStore
}

export { useLoginStore }