import { createContext, useContext } from "react";
import JobStoreContext from "../context/JobStoreContext";
import LoginStoreContext from "../context/LoginStoreContext";



const usejobStore = ()=>{
    const jobStore = useContext(JobStoreContext)

    if (!jobStore) {
        throw new Error('Provide store in Provider')
     }
    return jobStore
}

export {usejobStore}