import { fireEvent, getByPlaceholderText, getByText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Login from ".";

const routerWrapper = ({ children }: any) => <BrowserRouter>{children}</BrowserRouter>

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

    it("should test on form submission", async () => {
        const submitFormFn = vi.fn()

        const { getByRole, getByLabelText } = render(<Login

            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            isLoading={false}
            isError={false}
            onSubmitForm={submitFormFn}
            errorMessage={""}
        />, {
            wrapper: routerWrapper,
        });


        const submitBtn = getByRole('button', { name: "Login" })
        fireEvent.submit(submitBtn);
        console.log(submitBtn)
        expect(submitFormFn).toBeCalledTimes(1);

    })
})