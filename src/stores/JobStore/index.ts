import {makeAutoObservable} from 'mobx'
import Cookies from 'js-cookie'

import apiConstants from "../../constants/apiConstants"

import {  profileDetailsResponseObj, profileDetailsTypes } from '../types'

import JobDataModel from './models/jobsDataModel'
import ProfileDetailsModel from './models/profileDetailsModel'
import JobDetailsModel from './models/jobDetails'



class JobsStore {
  jobList!:Array<JobDataModel>
  jobsApiStatus!:string
  jobsApiErrorMessage!:string|null
  profileApiStatus!:string
  profileApiErrorMessage!:string | null
  profileData!:profileDetailsTypes | {}
  jobDetailsApiStatus!:string
  jobDetailsApiErrorMessage!:string|null
  jobDetailsData!:JobDetailsModel |{}
  similarJobsData!:Array<JobDataModel>

  constructor() {
    makeAutoObservable(this)
    this.init()
  }

  init(){
    this.jobList = []
    this.jobsApiStatus = apiConstants.initial
    this.jobsApiErrorMessage = null
    this.profileApiStatus = apiConstants.initial
    this.profileApiErrorMessage = null
    this.profileData = {}
    this.jobDetailsApiStatus = apiConstants.initial
    this.jobDetailsApiErrorMessage = null
    this.jobDetailsData = {}
    this.similarJobsData = []
  
  }

  getJobsDataApi = async (
    employementFilters?: any,
    salaryRangeFilter?: string,
    searchInput?: string,
  ) => {
    this.jobsApiStatus = apiConstants.fetching

    const employmentFilters = employementFilters.join(',')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentFilters}&minimum_package=${salaryRangeFilter}&search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.jobList = data
    if (response.ok === true) {
      this.onjobsApiSuccess(data)
    } else {
      this.onJobsApiFailure()
    }
  }

  onjobsApiSuccess = (data:any) => {
    const {jobs} = data

    this.jobList = jobs.map((jobData: any) => new JobDataModel(jobData))
    this.jobsApiStatus = apiConstants.success
  }

  onJobsApiFailure = () => {
    this.jobsApiStatus = apiConstants.failure
  }

  getProfileData = async () => {
    this.profileApiStatus = apiConstants.fetching
    const url = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onUserProfileApiSuccess(data)
    } else {
      this.onUserProfileApiFailure()
    }
  }

  onUserProfileApiSuccess(data:profileDetailsResponseObj) {
    const profileDetails = data.profile_details
    this.profileData = new ProfileDetailsModel(profileDetails)
    this.profileApiStatus = apiConstants.success
  }

  onUserProfileApiFailure() {
    this.profileApiStatus = apiConstants.failure
  }

  getJobDetailsApi = async (id:any) => {
    this.jobDetailsApiStatus = apiConstants.fetching

    const url = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onJobInfoAPISuccess(data)
    } else {
      this.onJobInfoAPIFailure()
    }
  }

  onJobInfoAPISuccess(data:any) {
    const jobDetails = data.job_details
    const similarJobs = data.similar_jobs
    this.jobDetailsData = new JobDetailsModel(jobDetails)
    this.similarJobsData = similarJobs.map(
      (similarJob: any) => new JobDataModel(similarJob),
    )
    this.jobDetailsApiStatus = apiConstants.success
  }

  onJobInfoAPIFailure() {
    this.jobDetailsApiStatus = apiConstants.failure
  }
}

export default JobsStore
