import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

import { JOBBY_APP_LOGIN_PATH } from '../../constants/navigationConstants'

const ProtectedRoute = (props: any) => {

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to={JOBBY_APP_LOGIN_PATH} replace />
  }
  return <Outlet {...props} />
}

export default ProtectedRoute
