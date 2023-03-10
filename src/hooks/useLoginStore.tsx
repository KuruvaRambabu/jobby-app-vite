import { createContext, ReactElement, useContext, useRef } from "react";
import LoginStore from "../stores/LoginStore";

const LoginStoreContext = createContext<LoginStore | null>(null)

export const LoginStoreProvider = (props: { children: ReactElement }) => {
    const { children } = props
    const loginStore = useRef(new LoginStore())
    return (<LoginStoreContext.Provider value={loginStore.current}>{children}</LoginStoreContext.Provider>
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