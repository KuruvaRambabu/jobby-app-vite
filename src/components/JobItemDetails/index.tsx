import { observer } from 'mobx-react'

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

import LoadingWrapper from '../../Common/components/loadingWrapper'
import FailureView from '../../Common/components/FailureView'

interface JobDetailsPropTypes {
  jobDetailsData: any
  similarJobsData: Array<JobDataModel>
  jobDetailsApiStatus: string
  onClickRetry: any
}

const JobDetails = observer((props: JobDetailsPropTypes) => {

  const {
    jobDetailsData,
    similarJobsData,
    jobDetailsApiStatus,
    onClickRetry
  } = props

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
        return <LoadingWrapper />
      case apiConstants.success:
        return renderJobSuccessView()
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />
      default:
        return ''
    }
  }

  return (
    <div className="job-details-container">{renderJobDetails()}</div>
  )
})

export default JobDetails
