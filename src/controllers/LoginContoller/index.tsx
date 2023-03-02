import { useNavigate } from 'react-router-dom'
import { observer, useLocalObservable } from 'mobx-react'

import { JOBBY_APP_HOME_PATH } from '../../constants/navigationConstants'
import Login from '../../components/Login'

import { useloginAPI } from '../../hooks/loginApiHook'

interface localStateTypes {
    username: string
    password: string
    setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void
    setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginController = observer(() => {

    const { mutate, isLoading, isError, error } = useloginAPI()

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

    const navigate = useNavigate()

    const onSubmitSuccess = () => {
        navigate(JOBBY_APP_HOME_PATH, { replace: true })
    }

    const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { username, password } = localState
        const userDetails: any = { username, password }

        mutate(userDetails, {
            onSuccess: () => onSubmitSuccess()
        })
    }

    const { username, password, setPassword, setUsername } = localState

    return (<Login
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
        isLoading={isLoading}
        isError={isError}
        onSubmitForm={onSubmitForm}
        errorMessage={error}
    />)
})


export default LoginController

