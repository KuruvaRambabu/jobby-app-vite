import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useQuery } from 'react-query'

import StoresContext from '../../context/StoreContext'
import StartIcon from '../../Icons/StartIcon'
import LocationIcon from '../../Icons/LocationIcon'
import JobsIcon from '../../Icons/JobsIcon'
import LogoutIcon from '../../Icons/LogoutIcon'
import apiConstants from '../../constants/apiConstants'
import JobDataModel from '../../stores/JobStore/models/jobsDataModel'
import SkillsDataModel from '../../stores/JobStore/models/skillsDataModel'

import Skills from '../Skills'
import SimilarJobs from '../SimilarJobs'

import './index.css'

import { Oval } from 'react-loader-spinner'

const JobDetails = observer(() => {
  const store = useContext(StoresContext)
  const { jobStore } = store

  const {
    getJobDetailsApi,
    jobDetailsData,
    similarJobsData,
    jobDetailsApiStatus,
  } = jobStore

  const jobsId = useParams()
  const { id } = jobsId
  useQuery(["jobDetailsData", id], () => getJobDetailsApi(id))

  const renderJobLoadingView = () => (
    <div className="loader-container jobs-loader" data-testid="loader">
      <Oval
        height={30}
        width={30}
        color="#ffffff"
        visible={true}
        ariaLabel='oval-loading'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )

  const renderJobFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button
        type="button"
        onClick={getJobDetailsApi}
        className="profile-retry-btn"
      >
        Retry
      </button>
    </div>
  )

  const renderSimilarJobs = () => (
    <section className="similar-jobs-main-container">
      <h1>Similar jobs</h1>
      <ul className="similar-jobs">
        {similarJobsData.map((job: JobDataModel) => (
          <SimilarJobs key={job.id} job={job} />
        ))}
      </ul>
    </section>
  )

  const renderLifeAtCompany = (lifeAtCompany: { description: string; imageUrl: string }) => {
    const { description, imageUrl } = lifeAtCompany

    return (
      <div className="life-at-company-container">
        <h1>Life At Company</h1>
        <div className="life-at-company-content">
          <p className="description-life">{description}</p>
          <img className="life-at-logo" src={imageUrl} alt="life at company" />
        </div>
      </div>
    )
  }

  const renderSkillsView = (skills: Array<SkillsDataModel>) => (
    <>
      <h1>Skills</h1>
      <ul className="skills-main-container">
        {skills.map((skill: SkillsDataModel) => (
          <Skills skill={skill} />
        ))}
      </ul>
    </>
  )

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
    } = jobDetailsData
    return (
      <div className="job-details-main-container">
        <div className="job-logo-container">
          <img
            className="job-logo"
            src={companyLogoUrl}
            alt="job details company logo"
          />
          <div className="job-role-container">
            <h1 className="title">{title}</h1>
            <div className="rating-container">
              <StartIcon className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-salary-container">
          <div className="location-job-type-container">
            <div className="location-container">
              <LocationIcon />
              <p className="location-package-content">{location}</p>
            </div>
            <div className="employment-container">
              <JobsIcon />
              <p className="location-package-content">{employmentType}</p>
            </div>
          </div>
          <p className="location-package-content">{packagePerAnnum}</p>
        </div>
        <hr className="job-card-hr" />
        <div className="job-details-bottom-section">
          <div className="description-heading-container">
            <h1 className="description-heading">Description</h1>
            <a
              href={companyWebsiteUrl}
              className="visit-link"
              rel="noreferrer"
              target="_blank"
            >
              Visit <LogoutIcon />
            </a>
          </div>
          <p className="job-description">{jobDescription}</p>
          {renderSkillsView(skills)}
          {renderLifeAtCompany(lifeAtCompany)}
        </div>
      </div>
    )
  }

  const renderJobSuccessView = () => (
    <div className="job-details-section">
      {renderJobInformationInDetailedView()}
      {renderSimilarJobs()}
    </div>
  )

  const renderJobDetails = () => {
    switch (jobDetailsApiStatus) {
      case apiConstants.fetching:
        return renderJobLoadingView()
      case apiConstants.success:
        return renderJobSuccessView()
      case apiConstants.failure:
        return renderJobFailureView()
      default:
        return ''
    }
  }

  return (
    <div className="job-details-container">{renderJobDetails()}</div>
  )
})

export default JobDetails
