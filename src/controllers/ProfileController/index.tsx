import { observer } from "mobx-react"

import Profile from "../../components/Profile"
import { useGetProfileDataApi } from "../../hooks/useGetProfileDataAPI"
import apiConstants from '../../constants/apiConstants'
import { useJobStore } from "../../hooks/useJobStore"

const ProfileController = observer(() => {

    const jobStore = useJobStore()
    const { profileData } = jobStore

    const { isLoading, isError, refetch } = useGetProfileDataApi()

    const getProfileStatus = () => {
        if (isLoading) {
            return apiConstants.fetching
        }
        else if (isError) {
            return apiConstants.failure
        }
        else {
            return apiConstants.success
        }
    }
    const profileApiStatus = getProfileStatus()

    const onClickRetry = () => {
        refetch()
    }

    return (
        <Profile
            profileApiStatus={profileApiStatus}
            profileData={profileData}
            onClickRetry={onClickRetry}
        />
    )
})

export default ProfileController