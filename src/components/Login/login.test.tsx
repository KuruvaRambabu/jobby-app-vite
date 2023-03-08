import { fireEvent, getByPlaceholderText, getByText, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Login from ".";
import { LoginFormContainer } from "./styledComponents";

const routerWrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

describe("Login component Test", () => {

    const username = "test-user"
    const password = "test"
    const setPassword = () => { }
    const setUsername = () => { }
    const isLoading = false
    const isError = false
    const onSubmitForm = () => { }
    const errorMessage = ""

    const props = {}
    it("should test jobby app username input", () => {
        const { getByPlaceholderText } = render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={isLoading}
            isError={isError}
            onSubmitForm={onSubmitForm}
            errorMessage={errorMessage}
        />, { wrapper: routerWrapper });

        const inputNode = screen.getByPlaceholderText('Username')
        expect(inputNode.value).toEqual(username)
    })


    it("should test jobby app password input", () => {
        render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={isLoading}
            isError={isError}
            onSubmitForm={onSubmitForm}
            errorMessage={errorMessage}
        />, { wrapper: routerWrapper });

        const inputNode = screen.getByPlaceholderText('Password')

        expect(inputNode.value).toEqual(password)
    })
    it("should test jobby app login logo", () => {
        render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={isLoading}
            isError={isError}
            onSubmitForm={onSubmitForm}
            errorMessage={errorMessage}
        />, { wrapper: routerWrapper });

        const loginLogo = screen.getByTestId('login-logo')
        expect(loginLogo).toBeInTheDocument()
    })


    it("should test jobby app Login Button", () => {
        const { getByRole } = render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={false}
            isError="true"
            onSubmitForm={onSubmitForm}
            errorMessage="Invalid username"
        />, { wrapper: routerWrapper });
        const buttonEl = getByRole("button", { name: "Login" })
        expect(buttonEl).toBeInTheDocument()
    })

    it("should test jobby app Loading view ", () => {
        const { getByRole } = render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={true}
            isError="true"
            onSubmitForm={onSubmitForm}
            errorMessage="Invalid username"
        />, { wrapper: routerWrapper });
        const buttonEl = getByRole("button")
        fireEvent.click(buttonEl)
        const loadingView = screen.getByTestId("login-loader")
        expect(loadingView).toBeInTheDocument()
    })

    it("should test jobby app error message", () => {
        const { getByText } = render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={false}
            isError={true}
            onSubmitForm={onSubmitForm}
            errorMessage={{ message: "Invalid username" }}
        />, { wrapper: routerWrapper });
        const errorMsg = getByText("Invalid username")
        expect(errorMsg).toBeInTheDocument()
    })

    it("should test login username", () => {
        const { getByLabelText } = render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={false}
            isError={true}
            onSubmitForm={onSubmitForm}
            errorMessage={{ message: "Invalid username" }}
        />, { wrapper: routerWrapper });
        const labelText = getByLabelText(/USERNAME/i)
        expect(labelText).toBeInTheDocument()
    })

    it("should test login password", () => {
        const { getByLabelText } = render(<Login
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={false}
            isError={true}
            onSubmitForm={onSubmitForm}
            errorMessage={{ message: "Invalid username" }}
        />, { wrapper: routerWrapper });
        const labelText = getByLabelText(/PASSWORD/i)
        expect(labelText).toBeInTheDocument()
    })

    // it("should test login userName change", () => {
    //     const { getByLabelText } = render(<Login
    //         username=""
    //         password=""
    //         setPassword={setPassword}
    //         setUsername={setUsername}
    //         isLoading={false}
    //         isError={true}
    //         onSubmitForm={onSubmitForm}
    //         errorMessage={{ message: "Invalid username" }}
    //     />, { wrapper: routerWrapper });

    //     const input = getByLabelText('USERNAME');
    //     fireEvent.change(input, { target: { value: 'Rambabu' } });
    //     expect(input.value).toBe("Rambabu")
    // })

    // it("should test login password change", () => {
    //     const { getByLabelText } = render(<Login
    //         username=""
    //         password=""
    //         setPassword={setPassword}
    //         setUsername={setUsername}
    //         isLoading={false}
    //         isError={true}
    //         onSubmitForm={onSubmitForm}
    //         errorMessage={{ message: "Invalid username" }}
    //     />, { wrapper: routerWrapper });

    //     const input = getByLabelText('PASSWORD');
    //     fireEvent.change(input, { target: { value: 'Rambabu' } });
    //     const inputNode = screen.getByPlaceholderText('Password')
    //     expect(input).toBeInTheDocument()
    //     console.log(inputNode)
    // })

})