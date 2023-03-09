import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Skills from ".";

const queryClient = new QueryClient();

const skill = {
    "imageUrl": "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
    "name": "Docker"
}

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Skills Component Tests", () => {
    it("should Test for skills logo image", () => {
        const { getByTestId } = render(<Skills skill={skill} />, { wrapper: routerWrapper })
        const element = getByTestId("skill-image")
        expect(element).toBeInTheDocument()
    })

    it("should Test for skills logo name", () => {
        const { getByText } = render(<Skills skill={skill} />, { wrapper: routerWrapper })
        const element = getByText("Docker")
        expect(element).toBeInTheDocument()
    })
})