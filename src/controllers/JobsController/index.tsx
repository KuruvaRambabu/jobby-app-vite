import { useContext, useState } from "react"
import { useQuery } from "react-query"
import Jobs from "../../components/Jobs"
import StoresContext from "../../context/StoreContext"
import { useGetJobsAPI } from "../../hooks/getJobsHook"

const JobsController = () => {

    const [employementFilters, upDateEmployementFilter] = useState<Array<string>>([])
    const [salaryRangeFilter, updateSalaryrangeFilter] = useState<string>('')
    const [searchInput, setSearchInput] = useState<string>('')


    const store = useContext(StoresContext)
    const { jobStore } = store
    const { getJobsDataApi } = jobStore

    const queryResult = useGetJobsAPI(employementFilters, salaryRangeFilter, searchInput);

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
        queryResult.refetch()
    }
    const { jobList, jobsApiStatus } = jobStore

    return (
        <Jobs
            searchInput={searchInput}
            onSelectEmploymentType={onSelectEmploymentType}
            onChangeSalaryRange={onChangeSalaryRange}
            onChangeSearchInput={onChangeSearchInput}
            getJobsDataApi={getJobsDataApi}
            jobList={jobList}
            jobsApiStatus={jobsApiStatus}
            onClickRetry={onClickRetry}
        />
    )
}

export default JobsController