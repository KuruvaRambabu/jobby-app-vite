import { fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import SalaryRangeFilter from ".";

const queryClient = new QueryClient();

const salary = {
    salaryRangeId: "1000000",
    label: "10 LPA and above",
};

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
);

describe("Should Test Salary Range UI", () => {
    it("should Test type name", () => {
        const onChangeSalaryRange = vi.fn();

        const { getByText } = render(
            <SalaryRangeFilter
                salary={salary}
                onChangeSalaryRange={onChangeSalaryRange}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText(salary.label);
        expect(element).toBeInTheDocument();
    });

    it("should Test on click salary Range filter function call", () => {
        const onChangeSalaryRange = vi.fn();

        const { getByRole } = render(
            <SalaryRangeFilter
                salary={salary}
                onChangeSalaryRange={onChangeSalaryRange}
            />,
            { wrapper: routerWrapper }
        );

        const radioBtn = getByRole("radio");
        fireEvent.click(radioBtn);
        expect(radioBtn).toBeChecked();
        expect(onChangeSalaryRange).toBeCalledTimes(1);
    });
});
