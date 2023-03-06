import { JobDataResponseObj, JobDetailsAndSimilarJobsDataApi, profileDetailsResponseObj } from "../../stores/types";

interface JobsServiceInterface {
    getJobsAPI():Promise<JobDataResponseObj>
    getProfileApi():Promise<profileDetailsResponseObj | unknown>
    getJobDetailsApi(id:any):Promise<JobDetailsAndSimilarJobsDataApi>
}

export default JobsServiceInterface