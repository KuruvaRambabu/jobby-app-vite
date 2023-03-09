import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event'

import { vi } from "vitest";
import Header from ".";
import { JOBBY_APP_HOME_PATH } from "../../constants/navigationConstants";
import { JobStoreProvider } from "../../hooks/useJobStore";
import { LoginStoreProvider } from "../../hooks/useLoginStore";
import HomeRoute from "../../routes/HomeRoute";
import LoginRoute from "../../routes/LoginRoute";
import Home from "../Home";
import Layout from "../Layout";
import Login from "../Login";
import ProtectedRoute from "../ProtectedRoute";
import Cookies from "js-cookie";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <LoginStoreProvider>
                <JobStoreProvider>{children}</JobStoreProvider>
            </LoginStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Header component Tests", () => {
    it("should test header logo view", () => {
        const { getByAltText } = render(<Header />, { wrapper: routerWrapper });

        const element = getByAltText("website logo");
        expect(element).toBeInTheDocument();
    });

    it("should test home button", () => {
        const { getByText } = render(<Header />, { wrapper: routerWrapper });

        const element = getByText("Home");
        expect(element).toBeInTheDocument();
    });

    it("should test Jobs button", () => {
        const { getByText } = render(<Header />, { wrapper: routerWrapper });

        const element = getByText("Jobs");
        expect(element).toBeInTheDocument();
    });

    // it.skip("should test Logout Button", () => {

    //     const onClickLogout = vi.fn()
    //     const { getByText, queryByText } = render(
    //         <Header />, { wrapper: routerWrapper }
    //     )

    //     const history = createMemoryHistory();

    //     const { getByText } = render(
    //         <Router history={history}>
    //             <MyComponent />
    //         </Router>
    //     );

    //     // get a reference to the logout button
    //     const logoutButton = getByText('Logout');

    //     // simulate a click event on the logout button
    //     fireEvent.click(logoutButton);

    //     // assert that the user has been redirected to the login page
    //     expect(history.location.pathname).toBe('/login');
    // })

    // it.skip("clicking the navigation button changes the current URL to the expected destination", () => {
    //     const MockDestination = () => <div>Mock Destination</div>;
    //     const { getByText } = render(
    //         <MemoryRouter>
    //             <QueryClientProvider client={queryClient}>
    //                 <LoginStoreProvider>
    //                     <JobStoreProvider>
    //                         <Routes>
    //                             <Route path="/" element={<Header />} />
    //                             <Route path="/login" element={<MockDestination />} />
    //                         </Routes>
    //                     </JobStoreProvider>
    //                 </LoginStoreProvider>
    //             </QueryClientProvider>
    //         </MemoryRouter>
    //     );

    //     const navigationButton = getByText("Logout");
    //     console.log("navigate", navigationButton);
    //     fireEvent.click(navigationButton);

    //     expect(window.location.pathname).toBe("/login");
    // });

    it("should test navigate to jobs Route on Click Jobs", async () => {
        const user = userEvent.setup()
        const MockDestination = () => <div>Mock Destination</div>;
        Cookies.set("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU");
        const { getByText, getByPlaceholderText, getAllByRole } = render(
            <MemoryRouter initialEntries={["/"]}>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <Routes>
                                <Route path={JOBBY_APP_HOME_PATH} element={<Layout />}>
                                    <Route path="/" element={<HomeRoute />} />
                                    <Route path="/jobs" element={<MockDestination />} />
                                </Route>
                            </Routes>
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );

        // user.click(screen.getByRole("button", { name: "Logout" }))
        // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
        const findJobsBtn = screen.getAllByText("Logout")
        // user.click(findJobsBtn)

        findJobsBtn.forEach(async link => {
            fireEvent.click(link);
            await waitFor(() => {

                expect(window.location.pathname).toBe('/login');
            })
            // Reset the history object for the next iteration
        })

        // fireEvent.click(findJobsBtn)
        // expect(history.location.pathname).toBe('/jobs');
    })


    it("should test navigate to jobs Route on Click Jobs", async () => {
        const user = userEvent.setup()
        const MockDestination = () => <div>Mock Destination</div>;
        Cookies.set("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU");
        const { getByText, getByPlaceholderText, getAllByRole } = render(
            <MemoryRouter initialEntries={["/"]}>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <Routes>
                                <Route path={JOBBY_APP_HOME_PATH} element={<Layout />}>
                                    <Route path="/" element={<HomeRoute />} />
                                    <Route path="/jobs" element={<MockDestination />} />
                                </Route>
                            </Routes>
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );

        // user.click(screen.getByRole("button", { name: "Logout" }))
        // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
        const findJobsBtn = screen.getAllByText("Jobds")
        // user.click(findJobsBtn)

        findJobsBtn.forEach(async link => {
            fireEvent.click(link);
            await waitFor(() => {

                expect(window.location.pathname).toBe('/jobssadf');
            })
            // Reset the history object for the next iteration
        })

        // fireEvent.click(findJobsBtn)
        // expect(history.location.pathname).toBe('/jobs');
    })
});

