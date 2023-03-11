import { observer } from "mobx-react";

import StartIcon from "../../Icons/StartIcon";
import LocationIcon from "../../Icons/LocationIcon";
import JobsIcon from "../../Icons/JobsIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import apiConstants from "../../constants/apiConstants";
import JobDataModel from "../../stores/JobStore/models/JobsDataModel/jobsDataModel";
import SkillsDataModel from "../../stores/JobStore/models/SkillsDataModel/skillsDataModel";

import LoadingWrapper from "../../Common/components/loadingWrapper";
import FailureView from "../../Common/components/FailureView";

import Skills from "../Skills";
import SimilarJobs from "../SimilarJobs";

import {
  CompanyLogo,
  DescriptionContent,
  DescriptionHeading,
  EmploymentType,
  EmploymentTypeContainer,
  JobCardHr,
  JobCardLogoContainer,
  JobDescriptionContainer,
  JobLocation,
  JobRoleContainer,
  LocationAndEmploymentTypeContainer,
  LocationAndSalaryContainer,
  LocationContainer,
  PackagePerAnnum,
  RoleHeading,
  RoleRating,
  RoleRatingContainer,
} from "../JobCard/styledComponents";

import {
  CompnanyWebsiteUrl,
  JobDetailsBottomSection,
  JobDetailsContainer,
  JobDetailsDescriptionContainer,
  JobDetailsMainContainer,
  JobDetailsSection,
  LifeAtCompanyContainer,
  LifeAtCompanyDescription,
  LifeAtCompanyHeading,
  LifeAtCompanyImg,
  LifeAtCompnayContentContainer,
  SimilarJobsList,
  SimilarJobsSection,
  SimilarJobsSectionHeading,
  SkillHeading,
  SkillsList,
} from "./styledComponents";
interface JobDetailsPropTypes {
  jobDetailsData: any;
  similarJobsData: Array<JobDataModel>;
  jobDetailsApiStatus: string;
  onClickRetry: any;
}

const JobDetails = observer((props: JobDetailsPropTypes) => {
  const { jobDetailsData, similarJobsData, jobDetailsApiStatus, onClickRetry } =
    props;

  const renderSimilarJobs = () => (
    <SimilarJobsSection>
      <SimilarJobsSectionHeading>Similar jobs</SimilarJobsSectionHeading>
      <SimilarJobsList>
        {similarJobsData.map((job: JobDataModel) => (
          <SimilarJobs key={job.id} job={job} />
        ))}
      </SimilarJobsList>
    </SimilarJobsSection>
  );

  const renderLifeAtCompany = (lifeAtCompany: {
    description: string;
    imageUrl: string;
  }) => {
    const { description, imageUrl } = lifeAtCompany;

    return (
      <LifeAtCompanyContainer>
        <LifeAtCompanyHeading>Life At Company</LifeAtCompanyHeading>
        <LifeAtCompnayContentContainer>
          <LifeAtCompanyDescription>{description}</LifeAtCompanyDescription>
          <LifeAtCompanyImg src={imageUrl} alt="life at company" />
        </LifeAtCompnayContentContainer>
      </LifeAtCompanyContainer>
    );
  };

  const renderSkillsView = (skills: Array<SkillsDataModel>) => (
    <>
      <SkillHeading>Skills</SkillHeading>
      <SkillsList>
        {skills.map((skill: SkillsDataModel, index) => (
          <Skills key={index} skill={skill} />
        ))}
      </SkillsList>
    </>
  );

  const renderJobInformationInDetailedView = () => {
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      skills,
      title,
    } = jobDetailsData;
    return (
      <JobDetailsContainer>
        <JobCardLogoContainer>
          <CompanyLogo src={companyLogoUrl} alt="job details company logo" />
          <JobRoleContainer>
            <RoleHeading>{title}</RoleHeading>
            <RoleRatingContainer>
              <StartIcon />
              <RoleRating>{rating}</RoleRating>
            </RoleRatingContainer>
          </JobRoleContainer>
        </JobCardLogoContainer>
        <LocationAndSalaryContainer>
          <LocationAndEmploymentTypeContainer>
            <LocationContainer>
              <LocationIcon />
              <JobLocation>{location}</JobLocation>
            </LocationContainer>
            <EmploymentTypeContainer>
              <JobsIcon />
              <EmploymentType>{employmentType}</EmploymentType>
            </EmploymentTypeContainer>
          </LocationAndEmploymentTypeContainer>
          <PackagePerAnnum>{packagePerAnnum}</PackagePerAnnum>
        </LocationAndSalaryContainer>
        <JobCardHr />
        <JobDetailsBottomSection>
          <JobDetailsDescriptionContainer>
            <DescriptionHeading>Description</DescriptionHeading>
            <CompnanyWebsiteUrl
              href={companyWebsiteUrl}
              rel="noreferrer"
              target="_blank">
              Visit <LogoutIcon />
            </CompnanyWebsiteUrl>
          </JobDetailsDescriptionContainer>
          <DescriptionContent>{jobDescription}</DescriptionContent>
          {renderSkillsView(skills)}
          {renderLifeAtCompany(lifeAtCompany)}
        </JobDetailsBottomSection>
      </JobDetailsContainer>
    );
  };

  const renderJobSuccessView = () => (
    <JobDetailsSection>
      {renderJobInformationInDetailedView()}
      {renderSimilarJobs()}
    </JobDetailsSection>
  );

  const renderJobDetails = () => {
    switch (jobDetailsApiStatus) {
      case apiConstants.fetching:
        return <LoadingWrapper />;
      case apiConstants.success:
        return renderJobSuccessView();
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />;
      default:
        return "";
    }
  };

  return (
    <JobDetailsMainContainer>{renderJobDetails()}</JobDetailsMainContainer>
  );
});

export default JobDetails;
