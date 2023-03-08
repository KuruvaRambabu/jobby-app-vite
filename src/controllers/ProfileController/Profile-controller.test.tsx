import { fireEvent, render, renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import ProfileController from ".";
import apiConstants from "../../constants/apiConstants";
import { JobStoreProvider } from "../../hooks/useJobStore";
import { useJobStore } from "../../hooks/useJobStore";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <JobStoreProvider>
                {children}
            </JobStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Profile Controller Tests", () => {

    it("should test prodile Loading view", () => {
        const { getByTestId } = render(<ProfileController />, { wrapper: routerWrapper })
        const onClickRetryBtn = vi.fn()
        const element = getByTestId("loader")
        expect(element).toBeInTheDocument()
    })

    it("should test prodile Loading view", async () => {
        const { getByTestId } = render(<ProfileController />, { wrapper: routerWrapper })
        const onClickRetryBtn = vi.fn()
        const data = renderHook(() => useJobStore())

        expect(data).toBeInTheDocument()
    })
})