import { useContext } from "react";
import {useQuery } from "react-query";
import { JobDataResponseObj } from "../stores/types";
import { useJobsService } from "./useJobsService";
import StoresContext from "./storeHook";

export const useGetJobDetailsAPI = (id:string| undefined)=>{
const stores = useContext(StoresContext)
const jobService = useJobsService()
const {jobStore} = stores
    return useQuery<unknown |JobDataResponseObj,any,any>(["JobDetailsData", id],
    () => jobService.getJobDetailsApi(id),{

    onSuccess: (data)=>{
        jobStore.onJobInfoAPISuccess(data)
    }
    })
}

