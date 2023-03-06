import {useContext } from "react";
import JobStoreContext from "../context/JobStoreContext";

const useJobStore = ()=>{
    const jobStore = useContext(JobStoreContext)

    if (!jobStore) {
        throw new Error('wrap context provider')
     }
    return jobStore
}

export {useJobStore}