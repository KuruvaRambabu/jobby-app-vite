import {Link} from "react-router-dom";

import StartIcon from '../../Icons/StartIcon'
import LocationIcon from '../../Icons/LocationIcon'
import JobsIcon from '../../Icons/JobsIcon'
import JobDataModel from '../../stores/JobStore/models/jobsDataModel'

import './index.css'


interface JobPropTypes{
  job:JobDataModel
}


const SimilarJobs = (props:JobPropTypes) => {
  const {job} = props
  const {
    companyUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
    id
  } = job
  return (
    <li className="similar-job-card">
      <Link to={`/jobs/${id}`} className="job-details-similar-job-card">
      <div className="similar-job-logo job-logo-container">
        <img
          className="job-logo"
          src={companyUrl}
          alt="similar job company logo"
        />
        <div className="job-role-container">
          <h1 className="title">{title}</h1>
          <div className="rating-container">
            <StartIcon className="star" />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </div>
      <div className="job-description-container">
        <h1 className=" description-heading similar-job-description">
          Description
        </h1>
        <p className="job-description">{jobDescription}</p>
      </div>
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
    </Link>
    </li>
  )
}

export default SimilarJobs
