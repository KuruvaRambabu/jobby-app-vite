import { useContext } from "react";
import {useQuery } from "react-query";
import { JobDataResponseObj } from "../stores/types";
import { useJobsService } from "./useJobsService";
import { usejobStore } from "./useJobStore";

export const useGetJobDetailsAPI = (id:string| undefined)=>{
const jobStore = usejobStore()
const jobService = useJobsService()
    return useQuery<unknown |JobDataResponseObj,any,any>(["JobDetailsData", id],
    () => jobService.getJobDetailsApi(id),{

    onSuccess: (data)=>{
        jobStore.onJobInfoAPISuccess(data)
    }
    })
}

