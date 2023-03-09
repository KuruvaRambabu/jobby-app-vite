import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import SimilarJobs from ".";

const queryClient = new QueryClient();

const job = {
    companyUrl:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
    employmentType: "Freelance",
    id: "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
    jobDescription:
        "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
    location: "Delhi",
    rating: 4,
    title: "Frontend Engineer",
};

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
);

describe("Similar Jobs Test Cases", () => {
    it("should test title of the jobs", () => {
        const { getByText } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });

        const element = getByText("Frontend Engineer");
        expect(element).toBeInTheDocument();
    });

    it("should test job Description of the jobs", () => {
        const { getByText } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });
        const element = getByText(job.jobDescription);
        expect(element).toBeInTheDocument();
    });

    it("should test job location of the jobs", () => {
        const { getByText } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });
        const element = getByText(job.location);
        expect(element).toBeInTheDocument();
    });
    it("should test job rating of the jobs", () => {
        const { getByText } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });
        const element = getByText(job.rating);
        expect(element).toBeInTheDocument();
    });

    it("should test job employmentType of the jobs", () => {
        const { getByText } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });
        const element = getByText(job.employmentType);
        expect(element).toBeInTheDocument();
    });

    it("should test job company of the jobs", () => {
        const { getByTestId } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });
        const element = getByTestId("company-logo");
        expect(element).toBeInTheDocument();
    });

    it("should test job company of the jobs", () => {
        const { getByAltText } = render(<SimilarJobs job={job} />, {
            wrapper: routerWrapper,
        });
        const element = getByAltText("similar job company logo");
        expect(element).toBeInTheDocument();
    });
});
