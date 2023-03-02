import { useRef } from 'react'

import LoginServiceAPI from '../services/LoginService/index.api'

const useLoginService = (): LoginServiceAPI => {
   const loginServiceRef = useRef(new LoginServiceAPI())

   return loginServiceRef.current
}

export { useLoginService }