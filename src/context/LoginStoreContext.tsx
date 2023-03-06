import { createContext } from 'react'

import LoginStore from '../stores/LoginStore'



const LoginStoreContext = createContext<LoginStore | null>(null)

export default LoginStoreContext
