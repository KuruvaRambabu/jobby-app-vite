import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

import LoadingWrapper from ".";

const routerWrapper = ({ children }: any) => <BrowserRouter>{children}</BrowserRouter>

describe("Loading wrapper Component Test", () => {
    it("should test Retry button", () => {
        const { getByTestId } = render(<LoadingWrapper />, { wrapper: routerWrapper })
        const element = getByTestId("loader")
        expect(element).toBeInTheDocument()
    })
})