import {createContext} from 'react'

import stores from '../stores/index'
import JobsStore from '../stores/JobStore'
import LoginStore from '../stores/LoginStore'


interface contextTypes {
loginStore:LoginStore
jobStore:JobsStore
}

const StoresContext = createContext<contextTypes>(stores)

export default StoresContext
