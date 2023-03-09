import { fireEvent, render, screen } from "@testing-library/react";
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

    // it("should test navigate to jobs Route on Click Jobs", async () => {
    //     const user = userEvent.setup()
    //     const MockDestination = () => <div>Mock Destination</div>;
    //     const { getByText, getByPlaceholderText, getAllByRole } = render(
    //         <MemoryRouter initialEntries={["/"]}>
    //             <QueryClientProvider client={queryClient}>
    //                 <LoginStoreProvider>
    //                     <JobStoreProvider>
    //                         <Routes>
    //                             <Route path={JOBBY_APP_HOME_PATH} element={<Layout />}>
    //                                 <Route path="/" element={<Header />} />
    //                                 <Route path="/jobs" element={<MockDestination />} />
    //                             </Route>
    //                         </Routes>
    //                     </JobStoreProvider>
    //                 </LoginStoreProvider>
    //             </QueryClientProvider>
    //         </MemoryRouter>
    //     );

    //     await user.click(screen.getByRole("button", { name: /Logout/i }))
    //     expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
    //     const findJobsBtn = getAllByRole("link", { name: "Logout" })

    //     // findJobsBtn.forEach(link => {
    //     //     fireEvent.click(link);
    //     //     expect(history.location.pathname).toBe('/jobs');
    //     //     // Reset the history object for the next iteration
    //     //     history.push('/');
    //     // })

    //     // fireEvent.click(findJobsBtn)
    //     // expect(history.location.pathname).toBe('/jobs');
    // })
});

