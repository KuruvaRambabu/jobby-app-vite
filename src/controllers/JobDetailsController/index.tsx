import { useParams } from 'react-router-dom'

import JobDetails from "../../components/JobItemDetails"
import { useGetJobDetailsAPI } from '../../hooks/useGetJobDetailsAPI'
import { useJobStore } from '../../hooks/useJobStore'
import { getApiStatus } from '../../utils/APIStatusWrapper'

const JobDetailsController = () => {

    const jobStore = useJobStore()

    const {
        jobDetailsData,
        similarJobsData,
    } = jobStore

    const jobsId = useParams()
    const { id } = jobsId

    const { isLoading, isError, refetch } = useGetJobDetailsAPI(id)

    const onClickRetry = () => {
        refetch()
    }

    const jobDetailsApiStatus = getApiStatus(isLoading, isError)
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