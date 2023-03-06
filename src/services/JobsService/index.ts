import { JobDataResponseObj, JobDetailsAndSimilarJobsDataApi, profileDetailsResponseObj } from "../../stores/types";

interface JobsServiceInterface {
    getJobsAPI():Promise<JobDataResponseObj>
    getProfileApi():Promise<profileDetailsResponseObj | unknown>
    getJobDetailsApi(id:string | undefined):Promise<JobDetailsAndSimilarJobsDataApi>
}

export default JobsServiceInterface