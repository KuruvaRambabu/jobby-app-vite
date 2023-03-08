import {
    fireEvent,
    renderHook,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, useNavigate } from "react-router-dom";
import LoginController from ".";

import { useloginAPI } from "../../hooks/useloginAPI";
import { LoginStoreProvider } from "../../hooks/useLoginStore";
import { vi } from "vitest";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <LoginStoreProvider>{children}</LoginStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Login Controller Tests", () => {
    it.skip("should test on Change username", () => {
        const { getByLabelText } = render(<LoginController />, {
            wrapper: routerWrapper,
        });

        const input = getByLabelText("USERNAME");
        fireEvent.change(input, {
            target: { value: "Rambabu" },
        });
        expect(input.value).toBe("Rambabu");
    });

    it.skip("should test on Change password", () => {
        const { getByLabelText } = render(<LoginController />, {
            wrapper: routerWrapper,
        });

        const input = getByLabelText("PASSWORD");
        fireEvent.change(input, {
            target: { value: "Rambabu" },
        });
        expect(input.value).toBe("Rambabu");
    });
    it.skip("should test on form submit loader view", async () => {
        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            queryByLabelText,
            getByTestId,
            debug,
            getByLabelText,
        } = render(<LoginController />, {
            wrapper: routerWrapper,
        });

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", {
            name: "Login",
        });
        fireEvent.change(usernameField, {
            target: { value: username },
        });
        fireEvent.change(passwordField, {
            target: { value: password },
        });
        fireEvent.click(signInButton);
        waitFor(() => getByLabelText("login-loader"));
    });

    it("should test on form submission success view", async () => {
        // const {
        //     getByPlaceholderText,
        //     getByRole,
        //     queryByRole,
        //     queryByLabelText,
        //     getByTestId,
        //     debug,
        //     getByLabelText,
        // } = render(

        //     <BrowserRouter>
        //         <QueryClientProvider client={queryClient}>
        //             <LoginStoreProvider>
        //                 <LoginController />
        //             </LoginStoreProvider>
        //         </QueryClientProvider>
        //     </BrowserRouter>);

        // const username = "test-user";
        // const password = "test-password";

        // const mockSuccessPromise = new Promise(function (resolve, reject) {
        //     resolve("");
        // });

        // const usernameField = getByPlaceholderText("Username");
        // const passwordField = getByPlaceholderText("Password");
        // const signInButton = getByRole("button", {
        //     name: "Login",
        // });
        // fireEvent.change(usernameField, {
        //     target: { value: username },
        // });
        // fireEvent.change(passwordField, {
        //     target: { value: password },
        // });
        // fireEvent.click(signInButton);

        // const mockSignInAPI = vi.fn();
        // mockSignInAPI.mockReturnValue(mockSuccessPromise);

        // const { mutate } = renderHook(() => useloginAPI());
        // console.log(mutate)

        // mutate({ username, password });
    });
});
