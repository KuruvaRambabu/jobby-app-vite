import { lifeAtCompanyObj, skillObj } from '../../types'
import SkillsDataModel from './skillsDataModel'

class JobDetailsModel {
  companyLogoUrl:string
  companyWebsiteUrl:string
  employmentType:string
  id:number
  jobDescription:string
  lifeAtCompany:lifeAtCompanyObj
  location:string
  packagePerAnnum:string
  rating:string
  skills:Array<skillObj>
  title:string

  constructor(jobDetails:any) {
    this.companyLogoUrl = jobDetails.company_logo_url
    this.companyWebsiteUrl = jobDetails.company_website_url
    this.employmentType = jobDetails.employment_type
    this.id = jobDetails.id
    this.jobDescription = jobDetails.job_description
    this.lifeAtCompany = {
      description: jobDetails.life_at_company.description,
      imageUrl: jobDetails.life_at_company.image_url,
    }
    this.location = jobDetails.location
    this.packagePerAnnum = jobDetails.package_per_annum
    this.rating = jobDetails.rating
    this.skills = jobDetails.skills.map((skill:skillObj) => new SkillsDataModel(skill))
    this.title = jobDetails.title
  }
}

export default JobDetailsModel
