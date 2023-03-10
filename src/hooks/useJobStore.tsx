
import { createContext, ReactElement, useContext, useRef } from "react";
import JobsStore from "../stores/JobStore";

const JobStoreContext = createContext<JobsStore | null>(null)


export const JobStoreProvider = (props: { children: ReactElement }) => {
    const { children } = props
    const jobStore = useRef(new JobsStore())

    return (<JobStoreContext.Provider value={jobStore.current}>{children}</JobStoreContext.Provider>
    )
}

export const useJobStore = () => {
    const jobStore = useContext(JobStoreContext)

    if (!jobStore) {
        throw new Error('wrap context provider')
    }
    return jobStore
}



