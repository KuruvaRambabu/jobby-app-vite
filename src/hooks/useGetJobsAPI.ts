import { useContext } from "react";
import {useQuery } from "react-query";
import { JobDataResponseObj } from "../stores/types";
import { useJobsService } from "./useJobsService";
import StoresContext from "./storeHook";

export const useGetJobsAPI = (employementFilters?: Array<string>, salaryRangeFilter?: string, searchInput?: string)=>{
const stores = useContext(StoresContext)
const jobService = useJobsService()
const {jobStore} = stores
    return useQuery<unknown |JobDataResponseObj,any,any>(["JobsData", employementFilters, salaryRangeFilter, searchInput],
    () => jobService.getJobsAPI(employementFilters, salaryRangeFilter, searchInput),{

    onSuccess: (data)=>{
        jobStore.onjobsApiSuccess(data)
    }
    })
}

