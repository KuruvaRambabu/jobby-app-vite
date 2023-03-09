import JobsStore from ".";
import profileDataResponse from "../../fixtures/profileDataResponse.json";
import jobsDataResponse from "../../fixtures/jobsDataResponseObject.json";
import jobDetailsResponse from "../../fixtures/jobDetailsResponseObject.json";
import similarJobsResponse from "../../fixtures/similarJobsResponseObject.json";

describe("JobStore Test Cases", () => {
  let jobStore: JobsStore;
  beforeEach(() => {
    jobStore = new JobsStore();
  });
  it("should test initial values of JobStore", () => {
    expect(jobStore.jobList).toStrictEqual([]);
    expect(jobStore.profileData).toStrictEqual({});
    expect(jobStore.jobDetailsData).toStrictEqual({});
    expect(jobStore.similarJobsData).toStrictEqual([]);
  });

  it("should test  Profile Api data", () => {
    jobStore.profileData = profileDataResponse;
    expect(jobStore.profileData).toStrictEqual(profileDataResponse);
  });
  it("should test  JobsData Api data", () => {
    jobStore.profileData = jobsDataResponse;
    expect(jobStore.profileData).toStrictEqual(jobsDataResponse);
  });

  it("should test Job Details Data Api data", () => {
    jobStore.profileData = jobDetailsResponse;
    expect(jobStore.profileData).toStrictEqual(jobDetailsResponse);
  });
  it("should test  Similar Jobs Data Api data", () => {
    jobStore.profileData = similarJobsResponse;
    expect(jobStore.profileData).toStrictEqual(similarJobsResponse);
  });
});
