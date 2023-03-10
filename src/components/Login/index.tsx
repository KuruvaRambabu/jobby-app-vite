import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { Oval } from "react-loader-spinner";

import {
  MainContainer,
  LoginFormContainer,
  WebisteLogoContainer,
  Form,
  ErrorMessageText,
  WebisteImg,
  LoginBtn,
  InputLabel,
  Input,
} from "./styledComponents";

interface LoginPropTypes {
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  isError: any;
  isLoading: string | boolean;
  username: string | undefined;
  password: string | undefined;
  setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: any;
}

const Login = observer((props: LoginPropTypes) => {
  const { t, i18n } = useTranslation();

  const {
    onSubmitForm,
    isLoading,
    username,
    password,
    setUsername,
    setPassword,
    isError,
    errorMessage,
  } = props;

  const renderUsernameInput = () => (
    <>
      <InputLabel htmlFor="username">{t('loginModule:userNameLabel')}</InputLabel>
      <Input
        type={t('loginModule:usernameInputPlaceholderText')}
        id="username"
        value={username}
        placeholder={t('loginModule:usernameInputPlaceholderText')}
        onChange={setUsername}
      />
    </>
  );

  const renderPasswordInput = () => (
    <>
      <InputLabel className="input-lable" htmlFor="password">
        {t('loginModule:passwordLabel')}
      </InputLabel>
      <Input
        type={t('loginModule:')}
        id="password"
        value={password}
        placeholder={t('loginModule:passwordInputPlaceholderText')}
        onChange={setPassword}
      />
    </>
  );

  return (
    <MainContainer>
      <LoginFormContainer>
        <WebisteLogoContainer>
          <WebisteImg
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            data-testid="login-logo"
          />
        </WebisteLogoContainer>
        <Form onSubmit={onSubmitForm}>
          {renderUsernameInput()}
          {renderPasswordInput()}
          {isError && (
            <ErrorMessageText>{errorMessage.message}</ErrorMessageText>
          )}
          {isLoading ? (
            <LoginBtn data-testid="login-loader">
              <Oval
                height={30}
                width={30}
                color="#ffffff"
                visible={true}
                ariaLabel="oval-loading"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </LoginBtn>
          ) : (
            <LoginBtn type={t('loginModule:passwordInputPlaceholderText')}>{t('loginModule:loginButtonName')}</LoginBtn>
          )}
        </Form>
      </LoginFormContainer>
    </MainContainer>
  );
});

export default Login;
