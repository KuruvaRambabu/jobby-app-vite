import { fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Profile from ".";
import apiConstants from "../../constants/apiConstants";

const queryClient = new QueryClient();

const routerWrapper = ({ children }: any) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
);

const profileData = {
    profileImageUrl:
        "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    name: "Rahul Attluri",
    shortBio: "Lead Software Developer and AI-ML expert",
};

describe("Profile component tests", () => {
    it("should test profile loading view", () => {
        const onClickRetry = vi.fn();
        const { getByTestId } = render(
            <Profile
                profileData={""}
                onClickRetry={onClickRetry}
                profileApiStatus={apiConstants.fetching}
            />,
            { wrapper: routerWrapper }
        );

        const element = getByTestId("loader");
        expect(element).toBeInTheDocument();
    });

    it("should test profile data failure view", () => {
        const onClickRetry = vi.fn();
        const { getByRole } = render(
            <Profile
                profileData={""}
                onClickRetry={onClickRetry}
                profileApiStatus={apiConstants.failure}
            />,
            { wrapper: routerWrapper }
        );

        const element = getByRole("button");
        fireEvent.click(element);
        expect(element).toBeInTheDocument();
        expect(onClickRetry).toBeCalledTimes(1);
    });

    it("should test profile pic", () => {
        const onClickRetry = vi.fn();
        const { getByTestId } = render(
            <Profile
                profileData={profileData}
                onClickRetry={onClickRetry}
                profileApiStatus={apiConstants.success}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByTestId("profile-pic");
        expect(element).toBeInTheDocument();
    });

    it("should test profile Name", () => {
        const onClickRetry = vi.fn();
        const { getByText } = render(
            <Profile
                profileData={profileData}
                onClickRetry={onClickRetry}
                profileApiStatus={apiConstants.success}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText(profileData.name);
        expect(element).toBeInTheDocument();
    });
    it("should test profile short bio", () => {
        const onClickRetry = vi.fn();
        const { getByText } = render(
            <Profile
                profileData={profileData}
                onClickRetry={onClickRetry}
                profileApiStatus={apiConstants.success}
            />,
            { wrapper: routerWrapper }
        );
        const element = getByText(profileData.shortBio);
        expect(element).toBeInTheDocument();
    });
});
