import { observer } from 'mobx-react'
import { Oval } from 'react-loader-spinner'

import './index.css'
import { MainContainer, LoginFormContainer, WebisteLogoContainer, Form, ErrorMessageText, WebisteImg, LoaderContainer, LoginBtn, InputLabel, Input } from './styledComponents'

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
      <InputLabel htmlFor="username">
        USERNAME
      </InputLabel>
      <Input
        type="text"
        id="username"
        value={username}
        placeholder="Username"
        onChange={setUsername}
      />
    </>
  )

  const renderPasswordInput = () => (
    <>
      <InputLabel className="input-lable" htmlFor="password">
        PASSWORD
      </InputLabel>
      <Input
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
    <MainContainer>
      <LoginFormContainer>
        <WebisteLogoContainer>
          <WebisteImg
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </WebisteLogoContainer>
        <Form onSubmit={onSubmitForm}>
          {renderUsernameInput()}
          {renderPasswordInput()}
          {isError && <ErrorMessageText>{errorMessage.message}</ErrorMessageText>}
          {isLoading ? (
            <LoaderContainer data-testid="loader">
              <Oval
                height={30}
                width={30}
                color="#ffffff"
                visible={true}
                ariaLabel='oval-loading'
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </LoaderContainer>
          ) : (
            <LoginBtn type="submit">
              Login
            </LoginBtn>
          )}
        </Form>
      </LoginFormContainer>
    </MainContainer>
  )
})

export default Login
