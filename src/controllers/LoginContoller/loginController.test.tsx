import {
    fireEvent,
    renderHook,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
    BrowserRouter,
    MemoryRouter,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import LoginController from ".";

import { useloginAPI } from "../../hooks/useloginAPI";
import { LoginStoreProvider } from "../../hooks/useLoginStore";
import { vi } from "vitest";
import Header from "../../components/Header";
import { JobStoreProvider } from "../../hooks/useJobStore";
import Home from "../../components/Home";
import LoginRoute from "../../routes/LoginRoute";
import Login from "../../components/Login";
import ProtectedRoute from "../../components/ProtectedRoute";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <LoginStoreProvider>{children}</LoginStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Login Controller Tests", () => {
    it("should test on Change username", () => {
        const { getByLabelText } = render(<LoginController />, {
            wrapper: routerWrapper,
        });

        const input = getByLabelText("USERNAME");
        fireEvent.change(input, {
            target: { value: "Rambabu" },
        });
        expect(input.value).toBe("Rambabu");
    });

    it("should test on Change password", () => {
        const { getByLabelText } = render(<LoginController />, {
            wrapper: routerWrapper,
        });

        const input = getByLabelText("PASSWORD");
        fireEvent.change(input, {
            target: { value: "Rambabu" },
        });
        expect(input.value).toBe("Rambabu");
    });
    it("should test on form submit loader view", async () => {
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

    it("should test login success flow", () => {
        const MockDestination = () => <div>Mock Destination</div>;
        const { getByText, getByPlaceholderText, getByRole } = render(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <Routes>
                                <Route path="/login" element={<LoginController />} />
                                <Route element={<ProtectedRoute />}>
                                    <Route path="/" element={<MockDestination />} />
                                </Route>
                            </Routes>
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", {
            name: "Login",
        });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        expect(window.location.pathname).toBe("/");
    });
});
