import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import StoresContext from '../../context/StoreContext'

import JobDetails from "../../components/JobItemDetails"
import { useGetJobDetailsAPI } from '../../hooks/getJobDetailsHook'

const JobDetailsController = () => {

    const store = useContext(StoresContext)
    const { jobStore } = store

    const {
        getJobDetailsApi,
        jobDetailsData,
        similarJobsData,
        jobDetailsApiStatus,
    } = jobStore

    const jobsId = useParams()
    const { id } = jobsId

    useGetJobDetailsAPI(id)


    return (
        <JobDetails
            similarJobsData={similarJobsData}
            jobDetailsApiStatus={jobDetailsApiStatus}
            jobDetailsData={jobDetailsData}
            getJobDetailsApi={getJobDetailsApi}

        />
    )
}

export default JobDetailsController