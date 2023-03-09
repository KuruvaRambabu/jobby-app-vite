import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import { vi } from "vitest";
import DisplayEmploymentTypeFilters from ".";

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>{children}</BrowserRouter>
);

describe("Empoyment Type Filter view Tests", () => {
    it("should Test type name", () => {
        const onSelectEmploymentType = vi.fn();

        const type = {
            label: "Full Time",
            employmentTypeId: "FULLTIME",
        };
        const { getByText } = render(
            <DisplayEmploymentTypeFilters
                type={type}
                onSelectEmploymentType={onSelectEmploymentType}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText(type.label);
        expect(element).toBeInTheDocument();
    });

    it("should Test on click employment type filter function call", () => {
        const onSelectEmploymentType = vi.fn();

        const type = {
            label: "Full Time",
            employmentTypeId: "FULLTIME",
        };
        const { getByRole } = render(
            <DisplayEmploymentTypeFilters
                type={type}
                onSelectEmploymentType={onSelectEmploymentType}
            />,
            { wrapper: routerWrapper }
        );

        const checkbox = getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
        expect(onSelectEmploymentType).toBeCalledTimes(1);
    });

    it("should Test on click employment type checkbox", () => {
        const onSelectEmploymentType = vi.fn();

        const type = {
            label: "Full Time",
            employmentTypeId: "FULLTIME",
        };
        const { getByRole } = render(
            <DisplayEmploymentTypeFilters
                type={type}
                onSelectEmploymentType={onSelectEmploymentType}
            />,
            { wrapper: routerWrapper }
        );

        const checkbox = getByRole("checkbox");
        expect(checkbox.checked).toBe(false);
        expect(onSelectEmploymentType).toBeCalledTimes(0);
    });
});
