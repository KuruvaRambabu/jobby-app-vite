import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";

import apiConstants from "../../constants/apiConstants";
import employmentTypesList from "../../constants/employmentTypeConstants";
import salaryRangesList from "../../constants/salaryRangeConstants";
import JobsSearchIcon from "../../Icons/SearchIcon";
import JobDataModel from "../../stores/JobStore/models/JobsDataModel/jobsDataModel";
import LoadingWrapper from "../../Common/components/loadingWrapper";
import FailureView from "../../Common/components/FailureView";
import ProfileController from "../../controllers/ProfileController";

import DisplayEmploymentTypeFilters from "../DisplayFilters";
import SalaryRangeFilter from "../SalaryRange";
import JobCard from "../JobCard";

import {
  MainContainer,
  JobsRightSideSection,
  JobsContainer,
  JobsLeftSideSection,
  EmploymentFilterSection,
  EmploymentTypeUlEl,
  HorizontalLine,
  EmploymentTypeHeading,
  InputSearchSection,
  JobsSearchInputField,
  SearchButton,
  SearchContainer,
  JobsListSection,
  JobsListUlElement,
  NoJobsDescription,
  NoJobsFoundContainer,
  NoJobsHeading,
  NoJobsImg,
} from "./styledComponents";

interface JobsPropTypes {
  searchInput: string;
  onSelectEmploymentType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSalaryRange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  jobList: any;
  jobsApiStatus: string;
  onClickRetry: () => void;
}

const Jobs = observer((props: JobsPropTypes) => {
  const {
    searchInput,
    onSelectEmploymentType,
    onChangeSalaryRange,
    onChangeSearchInput,
    jobList,
    jobsApiStatus,
    onClickRetry,
  } = props;

  const { t } = useTranslation();

  const renderNoJobsView = () => (
    <NoJobsFoundContainer>
      <NoJobsImg
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png "
        alt="no jobs"
      />
      <NoJobsHeading>{t("noJobsFoundScreen:noJobsFoundHeading")}</NoJobsHeading>
      <NoJobsDescription>
        {t("noJobsFoundScreen:noJobsFoundDescription")}
      </NoJobsDescription>
    </NoJobsFoundContainer>
  );

  const renderJobsSuccessView = () => {
    if (jobList.length > 0) {
      return (
        <JobsListSection>
          <JobsListUlElement>
            {jobList.map((jobData: JobDataModel) => (
              <JobCard key={jobData.id} jobData={jobData} />
            ))}
          </JobsListUlElement>
        </JobsListSection>
      );
    }
    return renderNoJobsView();
  };

  const renderJobsRightSideSection = () => {
    switch (jobsApiStatus) {
      case apiConstants.fetching:
        return <LoadingWrapper />;
      case apiConstants.success:
        return renderJobsSuccessView();
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />;
      default:
        return "";
    }
  };

  const renderJobsSearchInputField = () => (
    <InputSearchSection>
      <SearchContainer>
        <JobsSearchInputField
          type={t("jobsScreenStrings:searcInputType")}
          placeholder={t("jobsScreenStrings:searchInputPlaceholderText")}
          value={searchInput}
          onChange={onChangeSearchInput}
        />
        <SearchButton type="button" data-testid="searchButton">
          <JobsSearchIcon />
        </SearchButton>
      </SearchContainer>
    </InputSearchSection>
  );

  const renderLeftSideSection = () => (
    <JobsLeftSideSection>
      <ProfileController />
      <HorizontalLine />
      <EmploymentFilterSection>
        <EmploymentTypeHeading>
          {t("jobsScreenStrings:typeOfEmployment")}
        </EmploymentTypeHeading>
        <EmploymentTypeUlEl>
          {employmentTypesList.map((type) => (
            <DisplayEmploymentTypeFilters
              onSelectEmploymentType={onSelectEmploymentType}
              key={type.employmentTypeId}
              type={type}
            />
          ))}
        </EmploymentTypeUlEl>
      </EmploymentFilterSection>
      <HorizontalLine />
      <EmploymentFilterSection>
        <EmploymentTypeHeading>
          {t("jobsScreenStrings:salaryRangeFilter")}
        </EmploymentTypeHeading>
        <EmploymentTypeUlEl>
          {salaryRangesList.map((salaryRange) => (
            <SalaryRangeFilter
              onChangeSalaryRange={onChangeSalaryRange}
              key={salaryRange.salaryRangeId}
              salary={salaryRange}
            />
          ))}
        </EmploymentTypeUlEl>
      </EmploymentFilterSection>
    </JobsLeftSideSection>
  );

  return (
    <MainContainer>
      <JobsContainer>
        {renderLeftSideSection()}
        <JobsRightSideSection>
          {renderJobsSearchInputField()}
          {renderJobsRightSideSection()}
        </JobsRightSideSection>
      </JobsContainer>
    </MainContainer>
  );
});

export default Jobs;
