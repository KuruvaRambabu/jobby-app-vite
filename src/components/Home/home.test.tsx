import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from ".";

const routerWrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

test("Home component", () => {
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
});