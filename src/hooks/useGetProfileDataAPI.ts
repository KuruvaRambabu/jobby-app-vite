import { useContext } from "react";
import {useQuery } from "react-query";
import { useJobsService } from "./useJobsService";
import { usejobStore } from "./useJobStore";

export const useGetProfileDataApi = ()=>{

const jobStore = usejobStore()
const jobService = useJobsService()

    return useQuery("profileData",jobService.getProfileApi,{
    onSuccess: (data)=>{
        jobStore.onUserProfileApiSuccess(data)
    }
    })
}

