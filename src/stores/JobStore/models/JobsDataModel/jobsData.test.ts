import JobDataModel from "./jobsDataModel";

const jobsData = {
  id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
  title: "Devops Engineer",
  rating: 4,
  company_logo_url:
    "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
  location: "Delhi",
  job_description:
    "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
  employment_type: "Internship",
  package_per_annum: "10 LPA",
};

describe("Test cases for Jobs Data Model", () => {
  let jobsDataModel: JobDataModel;

  beforeEach(() => (jobsDataModel = new JobDataModel(jobsData)));

  it("should test id of the jobs data", () => {
    expect(jobsDataModel.id).toStrictEqual(jobsData.id);
  });

  it("should test title of the jobs data", () => {
    expect(jobsDataModel.title).toStrictEqual(jobsData.title);
  });

  it("should test rating of the jobs data", () => {
    expect(jobsDataModel.rating).toStrictEqual(jobsData.rating);
  });

  it("should test company Url of the jobs data", () => {
    expect(jobsDataModel.companyUrl).toStrictEqual(jobsData.company_logo_url);
  });

  it("should test location of the jobs data", () => {
    expect(jobsDataModel.location).toStrictEqual(jobsData.location);
  });

  it("should test job description of the jobs data", () => {
    expect(jobsDataModel.jobDescription).toStrictEqual(
      jobsData.job_description
    );
  });

  it("should test employment type of the jobs data", () => {
    expect(jobsDataModel.employmentType).toStrictEqual(
      jobsData.employment_type
    );
  });

  it("should test package_per_annum of the jobs data", () => {
    expect(jobsDataModel.packagePerAnnum).toStrictEqual(
      jobsData.package_per_annum
    );
  });
});
