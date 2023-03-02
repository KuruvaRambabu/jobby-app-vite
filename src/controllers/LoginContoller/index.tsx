import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer, useLocalObservable } from 'mobx-react'

import StoresContext from '../../context/StoreContext'
import { JOBBY_APP_HOME_PATH } from '../../constants/navigationConstants'
import Login from '../../components/Login'


interface localStateTypes {
    username: string
    password: string
    setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void
    setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginController = observer(() => {

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
    const navigate = useNavigate()

    const onSubmitSuccess = () => {
        navigate(JOBBY_APP_HOME_PATH, { replace: true })
    }


    const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { username, password } = localState
        const userDetails: any = { username, password }

        onClickLogin(userDetails, onSubmitSuccess)
    }

    const { username, password, setPassword, setUsername } = localState

    return (<Login
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
        apiStatus={apiStatus}
        errorMessage={errorMessage}
        onSubmitForm={onSubmitForm}
    />)
})


export default LoginController