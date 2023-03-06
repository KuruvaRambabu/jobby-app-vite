import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import StoresContext from '../../context/LoginStoreContext'

import JobDetails from "../../components/JobItemDetails"
import { useGetJobDetailsAPI } from '../../hooks/useGetJobDetailsAPI'
import { usejobStore } from '../../hooks/useJobStore'

const JobDetailsController = () => {

    const jobStore = usejobStore()

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