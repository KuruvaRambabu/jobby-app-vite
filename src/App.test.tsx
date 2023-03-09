import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { JobStoreProvider } from "./hooks/useJobStore";
import { LoginStoreProvider } from "./hooks/useLoginStore";
import Cookies from "js-cookie";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <MemoryRouter>
        <QueryClientProvider client={queryClient}>
            <LoginStoreProvider>
                <JobStoreProvider>{children}</JobStoreProvider>
            </LoginStoreProvider>
        </QueryClientProvider>
    </MemoryRouter>
);

describe("App component Test", () => {
    test("it should app login page rendering", () => {
        render(<App />, { wrapper: BrowserRouter });
        const user = userEvent.setup();

        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });

    test("landing on a bad page", () => {
        const badRoute = "/some/bad/route";

        render(
            <MemoryRouter initialEntries={[badRoute]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    });

    test("it will test landing to Home page", () => {
        const homeRoute = "/";

        Cookies.set("jwt_token", "asdfsadfsadfsad");
        render(
            <MemoryRouter initialEntries={[homeRoute]}>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <App />
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
        expect(screen.getByText("Find Jobs")).toBeInTheDocument();
    });

    test("it will test landing to Jobs Page page", async () => {
        const jobsRoute = "/jobs";

        Cookies.set("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU");
        render(
            <MemoryRouter initialEntries={[jobsRoute]}>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <App />
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
        expect(screen.getByText(/Type of Employment/i)).toBeInTheDocument();
        expect(screen.getByText(/Salary Range/i)).toBeInTheDocument();

        expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();

        await waitFor(() => {

            const elements = screen.getAllByText("Devops Engineer")

            expect(elements.length).toBeGreaterThan(1)
        })
    });


    test("it will test landing to Jobs Details page", async () => {
        const jobsRoute = "/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751";

        Cookies.set("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU");
        render(
            <MemoryRouter initialEntries={[jobsRoute]}>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <App />
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
        expect(screen.getByTestId(/loader/i)).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.getByText("Devops Engineer")).toBeInTheDocument()
        })
    });
});
