import { observer } from "mobx-react"

import Profile from "../../components/Profile"
import { useGetProfileDataApi } from "../../hooks/useGetProfileDataAPI"
import apiConstants from '../../constants/apiConstants'
import { useJobStore } from "../../hooks/useJobStore"
import { getApiStatus } from "../../utils/APIStatusWrapper"

const ProfileController = observer(() => {

    const jobStore = useJobStore()
    const { profileData } = jobStore

    const { isLoading, isError, refetch } = useGetProfileDataApi()

    const profileApiStatus = getApiStatus(isLoading, isError)

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