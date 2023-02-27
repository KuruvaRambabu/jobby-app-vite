import Cookies from 'js-cookie'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = (props:any) => {

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace   />
  }
  return <Outlet {...props} />
}

export default ProtectedRoute
