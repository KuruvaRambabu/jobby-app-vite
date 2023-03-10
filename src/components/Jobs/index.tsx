import {useEffect, useState, useContext} from 'react'
import { ThreeDots } from 'react-loader-spinner'
import {observer} from 'mobx-react'

import apiConstants from '../../constants/apiConstants'
import employmentTypesList from '../../constants/employmentTypeConstants'
import salaryRangesList from '../../constants/salaryRangeConstants'
import StoresContext from '../../context/StoreContext'
import JobsSearchIcon from '../../Icons/SearchIcon'

import Profile from '../Profile'
import DisplayEmploymentTypeFilters from '../DisplayFilters'
import SalaryRangeFilter from '../SalaryRange'
import JobCard from '../JobCard'
import Header from '../Header'

import './index.css'

const Jobs = observer(() => {
  const [employementFilters, upDateEmployementFilter] = useState<Array<string>>([])
  const [salaryRangeFilter, updateSalaryrangeFilter] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>('')

  const store = useContext(StoresContext)
  const {jobStore} = store
  const {getJobsDataApi} = jobStore

  useEffect(() => {
    getJobsDataApi(employementFilters, salaryRangeFilter, searchInput)
  }, [employementFilters, salaryRangeFilter, searchInput])

  const renderJobsLoadingView = () => (
    <div className="loader-container jobs-loader" data-testid="loader">
      <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#ffffff" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
          />
    </div>
  )

  const renderJobsFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button
        type="button"
        onClick={getJobsDataApi}
        className="profile-retry-btn"
      >
        Retry
      </button>
    </div>
  )

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
    const {jobList} = jobStore

    if (jobList.length > 0) {
      return (
        <ul>
          {jobList.map(jobData => (
            <JobCard key={jobData.id} jobData={jobData} />
          ))}
        </ul>
      )
    }
    return renderNoJobsView()
  }

  const renderJobsRightSideSection = () => {
    const {jobsApiStatus} = jobStore

    switch (jobsApiStatus) {
      case apiConstants.fetching:
        return renderJobsLoadingView()
      case apiConstants.success:
        return renderJobsSuccessView()
      case apiConstants.failure:
        return renderJobsFailureView()
      default:
        return ''
    }
  }

  const onSelectEmploymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedEmploymentType:string = event.target.id

    const filtersCopy:Array<string> = [...employementFilters]
    const index = filtersCopy.indexOf(selectedEmploymentType)
    if (index === -1) {
      filtersCopy.push(selectedEmploymentType)
    } else {
      filtersCopy.splice(index, 1)
    }
    upDateEmployementFilter([...filtersCopy])
  }

  const onChangeSalaryRange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSalaryrangeFilter(event.target.id)
  }


  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const renderJobsSearchInputField = () => (
    <div className="search-main-container">
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
    </div>
  )

  const renderLeftSideSection = () => (
    <div className="jobs-left-section">
      <Profile />
      <hr className="horizontal-line" />
      <p className="filter-heading">Type of Employment</p>
      <ul>
        {employmentTypesList.map(type => (
          <DisplayEmploymentTypeFilters
            onSelectEmploymentType={onSelectEmploymentType}
            key={type.employmentTypeId}
            type={type}
          />
        ))}
      </ul>
      <hr className="horizontal-line" />
      <p className="filter-heading">Salary Range</p>
      <ul>
        {salaryRangesList.map(salaryRange => (
          <SalaryRangeFilter
            onChangeSalaryRange={onChangeSalaryRange}
            key={salaryRange.salaryRangeId}
            salary={salaryRange}
          />
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <Header />
      <div className="jobs-main-container">
        <div className="container">
          {renderLeftSideSection()}
          <div className="jobs-right-section">
            {renderJobsSearchInputField()}
            {renderJobsRightSideSection()}
          </div>
        </div>
      </div>
    </>
  )
})

export default Jobs
