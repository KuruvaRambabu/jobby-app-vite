import SkillsDataModel from "../SkillsDataModel/skillsDataModel";
import JobDetailsModel from "./jobDetails";

const jobDetailsData = {
  id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
  title: "Devops Engineer",
  company_logo_url:
    "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
  company_website_url: "https://about.netflix.com/en",
  rating: 4,
  location: "Delhi",
  package_per_annum: "10 LPA",
  job_description:
    "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
  skills: [
    {
      name: "Docker",
      image_url:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
    },
    {
      name: "Kubernetes",
      image_url:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/kubernetes-img.png",
    },
    {
      name: "Terraform",
      image_url:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/terraform-img.png",
    },
    {
      name: "Jenkins",
      image_url:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/jenkins-img.png",
    },
    {
      name: "GO",
      image_url:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/go-img.png",
    },
    {
      name: "Ansible",
      image_url:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/ansible-img.png",
    },
  ],
  life_at_company: {
    description:
      "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
    image_url:
      "https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png",
  },
  employment_type: "Internship",
};

describe("Test cases for Job Details Model", () => {
  let jobDetailsDataModel: JobDetailsModel;

  beforeEach(() => (jobDetailsDataModel = new JobDetailsModel(jobDetailsData)));

  it("should test company Logo Url of the jobs data", () => {
    expect(jobDetailsDataModel.companyLogoUrl).toStrictEqual(
      jobDetailsData.company_logo_url
    );
  });

  it("should test title of the job Details data", () => {
    expect(jobDetailsDataModel.title).toStrictEqual(jobDetailsData.title);
  });

  it("should test id of the job Details data", () => {
    expect(jobDetailsDataModel.id).toStrictEqual(jobDetailsData.id);
  });

  it("should test company website url of the job Details data", () => {
    expect(jobDetailsDataModel.companyWebsiteUrl).toStrictEqual(
      jobDetailsData.company_website_url
    );
  });

  it("should test rating of the job Details data", () => {
    expect(jobDetailsDataModel.rating).toStrictEqual(jobDetailsData.rating);
  });

  it("should test location of the job Details data", () => {
    expect(jobDetailsDataModel.location).toStrictEqual(jobDetailsData.location);
  });

  it("should test location of the job Details data", () => {
    expect(jobDetailsDataModel.location).toStrictEqual(jobDetailsData.location);
  });

  it("should test package per annum of the job Details data", () => {
    expect(jobDetailsDataModel.packagePerAnnum).toStrictEqual(
      jobDetailsData.package_per_annum
    );
  });

  it("should test job description of the job Details data", () => {
    expect(jobDetailsDataModel.jobDescription).toStrictEqual(
      jobDetailsData.job_description
    );
  });

  it("should test skills of the job Details data", () => {
    const skillsData = jobDetailsData.skills.map(
      (skills) => new SkillsDataModel(skills)
    );
    expect(jobDetailsDataModel.skills).toStrictEqual(skillsData);
  });

  it("should test life At company data", () => {
    const lifeAtCompnayData = {
      imageUrl: jobDetailsData.life_at_company.image_url,
      description: jobDetailsData.life_at_company.description,
    };
    expect(jobDetailsDataModel.lifeAtCompany).toStrictEqual(lifeAtCompnayData);
  });

  it("should test employment type of the job Details data", () => {
    expect(jobDetailsDataModel.employmentType).toStrictEqual(
      jobDetailsData.employment_type
    );
  });
});
