import { useContext } from 'react'
import { useNavigate, Navigate, Params } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import { observer, useLocalObservable } from 'mobx-react'
import { useMutation } from 'react-query'

import StoresContext from '../../context/StoreContext'
import apiConstants from '../../constants/apiConstants'
import { JOBBY_APP_HOME_PATH } from '../../constants/navigationConstants'


import './index.css'


interface localStateTypes {
  username: string
  password: string
  setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Login = observer(() => {
  const localState = useLocalObservable<localStateTypes>(() => ({
    username: '',
    password: '',

    setUsername(event: React.ChangeEvent<HTMLInputElement>) {
      this.username = event.target.value
    },
    setPassword(event: React.ChangeEvent<HTMLInputElement>) {
      this.password = event.target.value
    }
  }))


  const store = useContext(StoresContext)
  const { loginStore } = store
  const { onClickLogin, apiStatus, errorMessage } = loginStore
  // const loginMutateFn = useMutation(onClickLogin): any
  const navigate = useNavigate()

  const renderUsernameInput = () => (
    <>
      <label className="input-lable " htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        className=" input username-input "
        id="username"
        value={localState.username}
        placeholder="Username"
        onChange={localState.setUsername}
      />
    </>
  )

  const renderPasswordInput = () => (
    <>
      <label className="input-lable" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        className="password-input input"
        id="password"
        value={localState.password}
        placeholder="Password"
        onChange={localState.setPassword}
      />
    </>
  )

  const onSubmitSuccess = () => {
    navigate(JOBBY_APP_HOME_PATH, { replace: true })
  }


  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { username, password } = localState
    const userDetails: any = { username, password }

    // loginMutateFn.mutate(userDetails, onSubmitSuccess): MutateOptions<unknown, unknown, void, unknown>
    onClickLogin(userDetails, onSubmitSuccess)
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Navigate to={JOBBY_APP_HOME_PATH} replace />
  }
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="website-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <form className="form-container" onSubmit={onSubmitForm}>
          {renderUsernameInput()}
          {renderPasswordInput()}
          {apiStatus === apiConstants.failure && <p className="error-message">{errorMessage}</p>}
          {apiStatus === apiConstants.fetching ? (
            <div className="loader-container login-button" data-testid="loader">
              <Oval
                height={30}
                width={30}
                color="#ffffff"
                visible={true}
                ariaLabel='oval-loading'
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <button className="login-button" type="submit">
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  )
})

export default Login
