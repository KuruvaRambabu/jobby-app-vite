import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { LoginStoreProvider } from "../../hooks/useLoginStore";

import JobCard from ".";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <LoginStoreProvider>{children}</LoginStoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

const jobData = {
    companyUrl:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
    employmentType: "Internship",
    id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
    jobDescription:
        "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
    location: "Delhi",
    packagePerAnnum: "10 LPA",
    rating: 4,
    title: "Devops Engineer",
};

describe("Job Card component Tests", () => {
    it("Job Role", () => {
        const { getByText } = render(<JobCard jobData={jobData} />, {
            wrapper: routerWrapper,
        });
        const element = getByText("Internship");
        expect(element).toBeInTheDocument();
    });

    it("JobCard Logo", () => {
        const { getByTestId } = render(<JobCard jobData={jobData} />, {
            wrapper: routerWrapper,
        });
        const element = getByTestId("company-logo");
        expect(element).toBeInTheDocument();
    });

    it("Job Description", () => {
        const { getByText } = render(<JobCard jobData={jobData} />, {
            wrapper: routerWrapper,
        });
        const element = getByText(jobData.jobDescription);
        expect(element).toBeInTheDocument();
    });

    it("Job Title", () => {
        const { getByText } = render(<JobCard jobData={jobData} />, {
            wrapper: routerWrapper,
        });
        const element = getByText(jobData.title);
        expect(element).toBeInTheDocument();
    });
});
