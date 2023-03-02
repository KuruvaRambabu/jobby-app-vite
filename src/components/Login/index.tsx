import { observer } from 'mobx-react'
import { Oval } from 'react-loader-spinner'
import apiConstants from '../../constants/apiConstants'

import './index.css'


interface LoginPropTypes {
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void
  apiStatus: string
  errorMessage: string | null
  username: string | undefined
  password: string | undefined
  setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Login = observer((props: LoginPropTypes) => {

  const {
    onSubmitForm,
    apiStatus,
    errorMessage,
    username,
    password,
    setUsername,
    setPassword
  } = props

  const renderUsernameInput = () => (
    <>
      <label className="input-lable " htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        className=" input username-input "
        id="username"
        value={username}
        placeholder="Username"
        onChange={setUsername}
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
        value={password}
        placeholder="Password"
        onChange={setPassword}
      />
    </>
  )


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
