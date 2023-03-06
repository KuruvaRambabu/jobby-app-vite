import { useContext } from "react";
import {useQuery } from "react-query";
import { JobDataResponseObj } from "../stores/types";
import { useJobsService } from "./useJobsService";
import { useJobStore } from "./useJobStore";

export const useGetJobDetailsAPI = (id:string| undefined)=>{
const jobStore = useJobStore()
const jobService = useJobsService()
    return useQuery<unknown |JobDataResponseObj,any,any>(["JobDetailsData", id],
    () => jobService.getJobDetailsApi(id),{

    onSuccess: (data)=>{
        jobStore.onJobInfoAPISuccess(data)
    }
    })
}

