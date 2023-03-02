import { useContext } from "react";
import {useQuery } from "react-query";
import { JobDataResponseObj } from "../stores/types";
import { useJobsService } from "./jobsServiceHook";
import StoresContext from "./storeHook";

export const useGetJobsAPI = (employementFilters?: Array<string>, salaryRangeFilter?: string | undefined, searchInput?: string | undefined)=>{
const stores = useContext(StoresContext)
const jobService = useJobsService()
const {jobStore} = stores
    return useQuery<any |JobDataResponseObj,any,any>(["JobsData", employementFilters, salaryRangeFilter, searchInput],
    () => jobService.getJobsAPI(employementFilters, salaryRangeFilter, searchInput),{

    onSuccess: (data)=>{
        jobStore.onjobsApiSuccess(data)
    }

    })
}

