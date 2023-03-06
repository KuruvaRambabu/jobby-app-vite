import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import StoresContext from '../../context/StoreContext'

import JobDetails from "../../components/JobItemDetails"
import { useGetJobDetailsAPI } from '../../hooks/getJobDetailsHook'

const JobDetailsController = () => {

    const store = useContext(StoresContext)
    const { jobStore } = store

    const {
        jobDetailsData,
        similarJobsData,
        jobDetailsApiStatus,
    } = jobStore

    const jobsId = useParams()
    const { id } = jobsId

    const queryResult = useGetJobDetailsAPI(id)

    const onClickRetry = () => {
        queryResult.refetch()
    }

    return (
        <JobDetails
            similarJobsData={similarJobsData}
            jobDetailsApiStatus={jobDetailsApiStatus}
            jobDetailsData={jobDetailsData}
            onClickRetry={onClickRetry}
        />
    )
}

export default JobDetailsController