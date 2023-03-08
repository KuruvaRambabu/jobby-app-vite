import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import NotFound from ".";

const queryClient = new QueryClient();

const routerWrapper = ({ children }) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Not Found component Tests", () => {
    it("should test not found image", () => {
        const { getByTestId } = render(<NotFound />, { wrapper: routerWrapper })
        const element = getByTestId("not-found")
        expect(element).toBeInTheDocument()
    })

    it("should test not found Heading", () => {
        const { getByText } = render(<NotFound />, { wrapper: routerWrapper })
        const element = getByText("Page Not Found")
        expect(element).toBeInTheDocument()
    })
    it("should test not found description", () => {
        const { getByText } = render(<NotFound />, { wrapper: routerWrapper })
        const element = getByText("We are sorry, the page you requested could not be found.")
        expect(element).toBeInTheDocument()
    })

})