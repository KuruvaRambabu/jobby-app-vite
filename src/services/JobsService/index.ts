import { JobDataResponseObj, JobDetailsAndSimilarJobsDataApi, profileDetailsResponseObj } from "../../stores/types";

interface JobsServiceInterface {
    getJobsAPI:()=>Promise<JobDataResponseObj>
    getProfileApi:()=>Promise<profileDetailsResponseObj | unknown>
    getJobDetailsApi:()=>Promise<JobDetailsAndSimilarJobsDataApi | unknown>
}

export default JobsServiceInterface