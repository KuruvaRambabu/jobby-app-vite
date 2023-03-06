import {useQuery } from "react-query";
import { JobDataResponseObj } from "../stores/types";
import { useJobsService } from "./useJobsService";
import { useJobStore } from "./useJobStore";

export const useGetJobsAPI = (employementFilters?: Array<string>, salaryRangeFilter?: string, searchInput?: string)=>{
const jobStore = useJobStore()
const jobService = useJobsService()
    return useQuery<unknown |JobDataResponseObj,any,any>(["JobsData", employementFilters, salaryRangeFilter, searchInput],
    () => jobService.getJobsAPI(employementFilters, salaryRangeFilter, searchInput),{

    onSuccess: (data)=>{
        jobStore.onjobsApiSuccess(data)
    }
    })
}

