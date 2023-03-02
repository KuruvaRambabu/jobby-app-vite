import { useContext } from "react";
import {useQuery } from "react-query";
import { useJobsService } from "./jobsServiceHook";
import StoresContext from "./storeHook";

export const useGetProfileDataApi = ()=>{

const stores = useContext(StoresContext)
const jobService = useJobsService()
const {jobStore} = stores

    return useQuery("profileData",jobService.getProfileApi,{
    onSuccess: (data)=>{
        jobStore.onUserProfileApiSuccess(data)
    }
    })
}

