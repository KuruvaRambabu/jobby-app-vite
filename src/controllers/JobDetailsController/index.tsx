import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useQuery } from 'react-query'

import StoresContext from '../../context/StoreContext'

import JobDetails from "../../components/JobItemDetails"

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

    useQuery(["jobDetailsData", id], () => getJobDetailsApi(id))

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