import { observer } from 'mobx-react'
import { Oval } from 'react-loader-spinner'

import './index.css'

interface LoginPropTypes {
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void
  isError: any
  isLoading: string | boolean
  username: string | undefined
  password: string | undefined
  setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage: any
}

const Login = observer((props: LoginPropTypes) => {

  const {
    onSubmitForm,
    isLoading,
    username,
    password,
    setUsername,
    setPassword,
    isError,
    errorMessage
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
          {isError && <p className="error-message">{errorMessage.message}</p>}
          {isLoading ? (
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
