import { Link } from "react-router-dom";

import JobsIcon from "../../Icons/JobsIcon";
import StartIcon from "../../Icons/StartIcon";
import LocationIcon from "../../Icons/LocationIcon";
import JobDataModel from "../../stores/JobStore/models/jobsDataModel";
import { JOBBY_APP_JOBS_PAGE_PATH } from "../../constants/navigationConstants";

import "./index.css";
import {
  Article,
  CompanyLogo,
  DescriptionContent,
  DescriptionHeading,
  EmploymentType,
  EmploymentTypeContainer,
  JobCardContainer,
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
} from "./styledComponents";

interface JobCardPropTypes {
  jobData: JobDataModel;
}

const JobCard = (props: JobCardPropTypes) => {
  const { jobData } = props;
  const {
    companyUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData;
  return (
    <JobCardContainer>
      <Link
        to={`${JOBBY_APP_JOBS_PAGE_PATH}/${id}`}
        className="job-card-link-styles"
      >
        <Article>
          <JobCardLogoContainer>
            <CompanyLogo data-testid="company-logo" src={companyUrl} alt="company logo" />
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
          <JobDescriptionContainer >
            <DescriptionHeading>Description</DescriptionHeading>
            <DescriptionContent>{jobDescription}</DescriptionContent>
          </JobDescriptionContainer>
        </Article>
      </Link>
    </JobCardContainer>
  );
};

export default JobCard;
