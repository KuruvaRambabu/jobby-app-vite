import { ThreeDots } from 'react-loader-spinner'
import { observer } from 'mobx-react'

import apiConstants from '../../constants/apiConstants'
import employmentTypesList from '../../constants/employmentTypeConstants'
import salaryRangesList from '../../constants/salaryRangeConstants'
import JobsSearchIcon from '../../Icons/SearchIcon'
import JobDataModel from '../../stores/JobStore/models/jobsDataModel'

import LoadingWrapper from '../../common/components/loadingWrapper'
import FailureView from '../../common/components/FailureView'

import ProfileController from '../../controllers/ProfileController'
import DisplayEmploymentTypeFilters from '../DisplayFilters'
import SalaryRangeFilter from '../SalaryRange'
import JobCard from '../JobCard'

import './index.css'

interface JobsPropTypes {
  searchInput: string
  onSelectEmploymentType: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSalaryRange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  getJobsDataApi: any
  jobList: any
  jobsApiStatus: string
  onClickRetry: () => void
}

const Jobs = observer((props: JobsPropTypes) => {

  const {
    searchInput,
    onSelectEmploymentType,
    onChangeSalaryRange,
    onChangeSearchInput,
    getJobsDataApi,
    jobList,
    jobsApiStatus,
    onClickRetry
  } = props

  const renderNoJobsView = () => (
    <div className="no-jobs-found-container ">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png "
        alt="no jobs"
        className="no-jobs-view"
      />
      <h1>No Jobs Found</h1>
      <p>We could not find any jobs try other filter.</p>
    </div>
  )

  const renderJobsSuccessView = () => {

    if (jobList.length > 0) {
      return (
        <section>
          <ul>
            {jobList.map((jobData: JobDataModel) => (
              <JobCard key={jobData.id} jobData={jobData} />
            ))}
          </ul>
        </section>
      )
    }
    return renderNoJobsView()
  }

  const renderJobsRightSideSection = () => {

    switch (jobsApiStatus) {
      case apiConstants.fetching:
        return <LoadingWrapper />
      case apiConstants.success:
        return renderJobsSuccessView()
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />
      default:
        return ''
    }
  }

  const renderJobsSearchInputField = () => (
    <section className="search-main-container">
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
        />
        <button
          className="search-icon-btn"
          type="button"
          data-testid="searchButton"
        >
          <JobsSearchIcon />
        </button>
      </div>

    </section>
  )

  const renderLeftSideSection = () => (
    <aside className="jobs-left-section">
      <ProfileController />
      <hr className="horizontal-line" />
      <section>
        <h1 className="filter-heading">Type of Employment</h1>
        <ul>
          {employmentTypesList.map(type => (
            <DisplayEmploymentTypeFilters
              onSelectEmploymentType={onSelectEmploymentType}
              key={type.employmentTypeId}
              type={type}
            />
          ))}
        </ul>
      </section>
      <hr className="horizontal-line" />
      <section >
        <h1 className="filter-heading">Salary Range</h1>
        <ul>
          {salaryRangesList.map(salaryRange => (
            <SalaryRangeFilter
              onChangeSalaryRange={onChangeSalaryRange}
              key={salaryRange.salaryRangeId}
              salary={salaryRange}
            />
          ))}
        </ul>
      </section>
    </aside>
  )

  return (
    <div className="jobs-main-container">
      <div className="container">
        {renderLeftSideSection()}
        <div className="jobs-right-section">
          {renderJobsSearchInputField()}
          {renderJobsRightSideSection()}
        </div>
      </div>
    </div>
  )
})

export default Jobs
