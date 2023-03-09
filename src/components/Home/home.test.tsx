import { render, screen, fireEvent, renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from ".";
import { JOBBY_APP_HOME_PATH } from "../../constants/navigationConstants";
import LoginController from "../../controllers/LoginContoller";
import { JobStoreProvider } from "../../hooks/useJobStore";
import { LoginStoreProvider } from "../../hooks/useLoginStore";
import HomeRoute from "../../routes/HomeRoute";
import Jobs from "../Jobs";
import Layout from "../Layout";
import ProtectedRoute from "../ProtectedRoute";

const queryClient = new QueryClient()

const routerWrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

describe("Home component", () => {
    it("should have Heading", () => {
        render(<Home />, { wrapper: routerWrapper });
        const element = screen.getByText("Find The Job That Fits Your Life");
        expect(element).toBeInTheDocument();
    });
    it("should have description", () => {
        render(<Home />, { wrapper: routerWrapper });
        const element = screen.getByText("Millions of people are searching for jobs, salary, information, company reviews. Find the Jobs that fits your abilities and potential")
        expect(element).toBeInTheDocument();
    })

    it("should have Link component", () => {
        const { getByRole } = render(<Home />, { wrapper: routerWrapper });
        const linkElement = getByRole('link', { name: 'Find Jobs' });
        expect(linkElement).toBeInTheDocument();
    })

    it('clicking a Link component navigates to jobs path', () => {
        render(<Home />, { wrapper: routerWrapper });
        const element = screen.getByTestId("home-bg-img")
        expect(element).toBeInTheDocument()
    });

    it("should test navigate to jobs Route on Click Jobs", async () => {

        const MockDestination = () => <div>Mock Destination</div>;

        const { getByText, getByPlaceholderText, getByRole } = render(
            <MemoryRouter initialEntries={["/"]}>
                <QueryClientProvider client={queryClient}>
                    <LoginStoreProvider>
                        <JobStoreProvider>
                            <Routes>
                                <Route path={JOBBY_APP_HOME_PATH} element={<Layout />}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/jobs" element={<MockDestination />} />
                                </Route>
                            </Routes>
                        </JobStoreProvider>
                    </LoginStoreProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );

        const findJobsBtn = getByText("Jobs")

        fireEvent.click(findJobsBtn);
        await waitFor(() => {
            expect(window.location.pathname).toBe("/jobs");
        })
    })
});


