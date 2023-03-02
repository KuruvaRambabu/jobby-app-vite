import { observer } from "mobx-react";
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

import { JOBBY_APP_HOME_PATH } from '../../constants/navigationConstants'
import LoginController from "../../controllers/LoginContoller";


const LoginRoute = observer(() => {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
        return <Navigate to={JOBBY_APP_HOME_PATH} replace />
    }
    return (<LoginController />)
})

export default LoginRoute