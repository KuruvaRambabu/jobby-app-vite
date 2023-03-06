import { useState } from "react"

import { getApiStatus } from "../../utils/APIStatusWrapper"

import Jobs from "../../components/Jobs"
import { useGetJobsAPI } from "../../hooks/useGetJobsAPI"
import { useJobStore } from "../../hooks/useJobStore"

const JobsController = () => {

    const [employementFilters, upDateEmployementFilter] = useState<Array<string>>([])
    const [salaryRangeFilter, updateSalaryrangeFilter] = useState<string>('')
    const [searchInput, setSearchInput] = useState<string>('')

    const jobStore = useJobStore()

    const { isLoading, isError, refetch } = useGetJobsAPI(employementFilters, salaryRangeFilter, searchInput);

    const onSelectEmploymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedEmploymentType: string = event.target.id
        const filtersCopy: Array<string> = [...employementFilters]
        const index = filtersCopy.indexOf(selectedEmploymentType)
        if (index === -1) {
            filtersCopy.push(selectedEmploymentType)
        } else {
            filtersCopy.splice(index, 1)
        }
        upDateEmployementFilter([...filtersCopy])
    }

    const onChangeSalaryRange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        updateSalaryrangeFilter(event.target.id)
    }

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value)
    }

    const onClickRetry = () => {
        refetch()
    }

    const { jobList } = jobStore

    const jobsApiStatus = getApiStatus(isLoading, isError)

    return (
        <Jobs
            searchInput={searchInput}
            onSelectEmploymentType={onSelectEmploymentType}
            onChangeSalaryRange={onChangeSalaryRange}
            onChangeSearchInput={onChangeSearchInput}
            jobList={jobList}
            jobsApiStatus={jobsApiStatus}
            onClickRetry={onClickRetry} getJobsDataApi={undefined} />
    )
}

export default JobsController