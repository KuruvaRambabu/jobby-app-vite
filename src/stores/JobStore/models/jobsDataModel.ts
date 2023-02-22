import { JobDataResponseObj } from "../../types"

class JobDataModel {
    companyUrl:string
    employmentType:string
    id:string
    jobDescription:string
    location:string
    packagePerAnnum:string
    rating:string
    title:string
    constructor(job:JobDataResponseObj) {
      this.companyUrl = job.company_logo_url
      this.employmentType = job.employment_type
      this.id = job.id
      this.jobDescription = job.job_description
      this.location = job.location
      this.packagePerAnnum = job.package_per_annum
      this.rating = job.rating
      this.title = job.title
    }
  }
  
  export default JobDataModel
  