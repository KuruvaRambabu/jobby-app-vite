import { JobDataResponseObj, JobDetailsAndSimilarJobsDataApi, profileDetailsResponseObj } from "../../stores/types";

interface JobsServiceInterface {
    getJobsAPI(
        employementFilters?: Array<string> | any,
        salaryRangeFilter?: string,
        searchInput?: string
        ):Promise<JobDataResponseObj>
    getProfileApi():Promise<profileDetailsResponseObj | unknown>
    getJobDetailsApi(id:string | undefined):Promise<JobDetailsAndSimilarJobsDataApi>
}

export default JobsServiceInterface 