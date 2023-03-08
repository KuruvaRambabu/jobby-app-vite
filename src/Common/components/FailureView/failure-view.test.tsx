import { fireEvent, getByPlaceholderText, getByText, render, screen } from "@testing-library/react"

import { BrowserRouter } from "react-router-dom";
import FailureView from ".";

import { vi } from "vitest"


const routerWrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

describe("Failure Component Test", () => {
    it("should test Retry button", () => {
        const onClickRetryBtn = () => { }
        const { getByText } = render(<FailureView onClickRetry={onClickRetryBtn} />, { wrapper: routerWrapper })
        const element = getByText("Retry")
        expect(element).toBeInTheDocument()

    }),

        it("should test Retry button functionality", () => {
            const onClickRetryBtn = vi.fn()
            const { getByRole } = render(<FailureView onClickRetry={onClickRetryBtn} />, { wrapper: routerWrapper })
            const element = getByRole("button", { name: "Retry" })
            fireEvent.click(element)
            expect(onClickRetryBtn).toBeCalledTimes(1)

        })
})