import { fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Jobs from ".";
import apiConstants from "../../constants/apiConstants";
import { JobStoreProvider } from "../../hooks/useJobStore";

import jobsDetailsData from "../../fixtures/jobDetailsResponseObject.json";
import similarJobsData from "../../fixtures/similarJobsResponseObject.json";

import JobDetails from ".";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <JobStoreProvider>{children}</JobStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

describe("Job Details Component Test Cases", () => {
    it("should Test JobDetails Loading view", () => {
        const onClickRetryFn = vi.fn();
        const { getByTestId } = render(
            <JobDetails
                jobDetailsData={{}}
                similarJobsData={[]}
                jobDetailsApiStatus={apiConstants.fetching}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );

        const element = getByTestId("loader");
        expect(element).toBeInTheDocument();
    });

    it("should Test JobDetails Failure view", () => {
        const onClickRetryFn = vi.fn();
        const { getByText } = render(
            <JobDetails
                jobDetailsData={{}}
                similarJobsData={[]}
                jobDetailsApiStatus={apiConstants.failure}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );

        const retryBtn = getByText("Retry");
        expect(retryBtn).toBeInTheDocument();
    });

    it("should Test JobDetails Failure view Retry button triggering", () => {
        const onClickRetryFn = vi.fn();
        const { getByRole } = render(
            <JobDetails
                jobDetailsData={{}}
                similarJobsData={[]}
                jobDetailsApiStatus={apiConstants.failure}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const retryBtn = getByRole("button", { name: "Retry" });
        fireEvent.click(retryBtn);
        expect(onClickRetryFn).toBeCalledTimes(1);
    });

    it("should Test JobDetails success job ttile view", () => {
        const onClickRetryFn = vi.fn();
        const { getByText } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText(jobsDetailsData.title);
        expect(element).toBeInTheDocument();
    });

    it("should Test JobDetails success job description view", () => {
        const onClickRetryFn = vi.fn();
        const { getByText } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText(jobsDetailsData.jobDescription);
        expect(element).toBeInTheDocument();
    });

    it("should Test JobDetails success company logo view", () => {
        const onClickRetryFn = vi.fn();
        const { getByAltText } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByAltText("job details company logo");
        expect(element).toBeInTheDocument();
    });

    it("should Test JobDetails success job location view", () => {
        const onClickRetryFn = vi.fn();
        const { getAllByText } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const element = getAllByText(jobsDetailsData.location);
        expect(element.length).toBeGreaterThan(1);
    });

    it("should Test JobDetails success Skills Heading view", () => {
        const onClickRetryFn = vi.fn();
        const { getByText } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText("Skills");
        expect(element).toBeInTheDocument();
    });

    it("should Test JobDetails success job Description Heading view", () => {
        const onClickRetryFn = vi.fn();
        const { getAllByRole } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const elements = getAllByRole("heading", { name: "Description" });
        expect(elements.length).toBeGreaterThan(1);
    });

    it("should Test JobDetails success job Similar Jobs Heading view", () => {
        const onClickRetryFn = vi.fn();
        const { getByRole } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const elements = getByRole("heading", { name: "Similar jobs" });
        expect(elements).toBeInTheDocument();
    });

    it("should Test JobDetails success job Life At company Heading view", () => {
        const onClickRetryFn = vi.fn();
        const { getByRole } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const elements = getByRole("heading", { name: "Life At Company" });
        expect(elements).toBeInTheDocument();
    });

    it("should Test JobDetails success view paragraph elements", () => {
        const onClickRetryFn = vi.fn();
        const { getByRole } = render(
            <JobDetails
                jobDetailsData={jobsDetailsData}
                similarJobsData={similarJobsData}
                jobDetailsApiStatus={apiConstants.success}
                onClickRetry={onClickRetryFn}
            />,
            { wrapper: routerWrapper }
        );
        const elements = getByRole("heading", { name: "Life At Company" });
        expect(elements).toBeInTheDocument();
    });
});
