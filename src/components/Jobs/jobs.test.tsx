import {
    fireEvent,
    render,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Jobs from ".";
import apiConstants from "../../constants/apiConstants";
import { JobStoreProvider } from "../../hooks/useJobStore";

import jobsData from "../../fixtures/jobsDataResponseObject.json";
import profileData from "../../fixtures/profileDataResponse.json";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <JobStoreProvider>{children}</JobStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Should Test Jobs Route", () => {
    it("should test loading view of the jobs route", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getAllByTestId } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.fetching}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const elements = getAllByTestId("loader");
        expect(elements.length).toEqual(2);
    });

    it("should test EMployemnt filter heading is present", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByText, getByPlaceholderText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.fetching}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const employmentFilterHeading = getByText("Type of Employment");
        expect(employmentFilterHeading).toBeInTheDocument();
    });

    it("should test Salary Range filter heading is present", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByText, getByPlaceholderText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.fetching}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const SalaryRangeFilterHeading = getByText("Salary Range");
        expect(SalaryRangeFilterHeading).toBeInTheDocument();
        const searchInputEl = getByPlaceholderText("Search");
        expect(searchInputEl).toBeInTheDocument();
    });

    it("should test Search Input Field is present", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByText, getByPlaceholderText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.fetching}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const searchInputEl = getByPlaceholderText("Search");
        expect(searchInputEl).toBeInTheDocument();
    });

    it("should test Jobs Data Failure View button", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.failure}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const retryBtn = getByText("Retry");
        expect(retryBtn).toBeInTheDocument();
    });

    it("should test Jobs Data Failure Retry function is triggering", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByRole } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.failure}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const retryBtn = getByRole("button", { name: "Retry" });
        fireEvent.click(retryBtn);
        expect(onClickRetry).toBeCalledTimes(1);
    });

    it("should test No Jobs Found On Success View", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByAltText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const noJobsImg = getByAltText("no jobs");
        expect(noJobsImg).toBeInTheDocument();
    });

    it("should test No Jobs Found Heading in Success View", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const noJobsHeading = getByText("No Jobs Found");
        expect(noJobsHeading).toBeInTheDocument();
    });

    it("should test No Jobs Found Description in Success View", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={[]}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const noJobsDescription = getByText(
            "We could not find any jobs try other filter."
        );
        expect(noJobsDescription).toBeInTheDocument();
    });

    it("should test 60 link components are Found in Success View", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getAllByRole } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const linkElements = getAllByRole("link");
        expect(linkElements.length).toEqual(60);
    });

    it("should test  li elements are Found in Success View", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getAllByRole } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const liElements = getAllByRole("listitem");
        expect(liElements.length).toBeGreaterThan(60);
    });

    it("should test  ul element is used in Success View", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getAllByRole } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const UlElements = getAllByRole("list");
        expect(UlElements.length).toBeGreaterThan(2);
    });

    it("should test onChange search input function call ", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByPlaceholderText } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const searchField = getByPlaceholderText("Search");
        fireEvent.change(searchField, {
            target: { value: "frontend" },
        });

        expect(onChangeSearchInput).toBeCalled();
    });

    it("should test onCLick employment filter function call ", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByRole } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const employmentFilter = getByRole("checkbox", { name: "Full Time" });
        fireEvent.click(employmentFilter);
        expect(employmentFilter.checked).toBe(true);
        expect(onSelectEmploymentType).toBeCalled();
    });

    it("should test onClick salary Range filter function call ", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByRole } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const salaryRangeFilter = getByRole("radio", { name: "40 LPA and above" });
        fireEvent.click(salaryRangeFilter);
        expect(onChangeSalaryRange).toBeCalled();
    });

    it("should test no jobs found when user search ", () => {
        const onSelectEmploymentType = vi.fn();
        const onChangeSalaryRange = vi.fn();
        const onChangeSearchInput = vi.fn();
        const onClickRetry = vi.fn();

        const { getByPlaceholderText, getByTestId } = render(
            <Jobs
                searchInput=""
                onSelectEmploymentType={onSelectEmploymentType}
                onChangeSalaryRange={onChangeSalaryRange}
                onChangeSearchInput={onChangeSearchInput}
                jobList={jobsData}
                jobsApiStatus={apiConstants.success}
                onClickRetry={onClickRetry}
            />,
            { wrapper: routerWrapper }
        );

        const searchField = getByPlaceholderText("Search");
        fireEvent.change(searchField, {
            target: { value: "frontend" },
        });
        expect(onChangeSearchInput).toBeCalled();
        const noJobsHeading = getByTestId("loader");
        expect(noJobsHeading).toBeInTheDocument();
    });
});
