import { Link } from "react-router-dom";

import StartIcon from "../../Icons/StartIcon";
import LocationIcon from "../../Icons/LocationIcon";
import JobsIcon from "../../Icons/JobsIcon";
import JobDataModel from "../../stores/JobStore/models/JobsDataModel/jobsDataModel";
import { JOBBY_APP_JOBS_PAGE_PATH } from "../../constants/navigationConstants";

import { JobDetailsArticle, SimilarJobLiElement } from "./styledComponents";
import {
  CompanyLogo,
  DescriptionContent,
  DescriptionHeading,
  EmploymentType,
  EmploymentTypeContainer,
  JobCardLogoContainer,
  JobDescriptionContainer,
  JobLocation,
  JobRoleContainer,
  LocationAndEmploymentTypeContainer,
  LocationAndSalaryContainer,
  LocationContainer,
  RoleHeading,
  RoleRating,
  RoleRatingContainer,
} from "../JobCard/styledComponents";

interface JobPropTypes {
  job: JobDataModel;
}

const SimilarJobs = (props: JobPropTypes) => {
  const { job } = props;
  const {
    companyUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
    id,
  } = job;
  return (
    <SimilarJobLiElement>
      <Link to={`${JOBBY_APP_JOBS_PAGE_PATH}/${id}`} className="no-underline">
        <JobDetailsArticle>
          <JobCardLogoContainer>
            <CompanyLogo data-testid="company-logo" src={companyUrl} alt="similar job company logo" />
            <JobRoleContainer>
              <RoleHeading>{title}</RoleHeading>
              <RoleRatingContainer>
                <StartIcon />
                <RoleRating>{rating}</RoleRating>
              </RoleRatingContainer>
            </JobRoleContainer>
          </JobCardLogoContainer>
          <JobDescriptionContainer>
            <DescriptionHeading>Description</DescriptionHeading>
            <DescriptionContent>{jobDescription}</DescriptionContent>
          </JobDescriptionContainer>
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
        </JobDetailsArticle>
      </Link>
    </SimilarJobLiElement>
  );
};

export default SimilarJobs;
