import { observer } from "mobx-react"
import { useContext } from "react"
import { isError, useQuery } from "react-query"
import Profile from "../../components/Profile"
import StoresContext from "../../context/LoginStoreContext"
import { useGetProfileDataApi } from "../../hooks/useGetProfileDataAPI"
import apiConstants from '../../constants/apiConstants'
import { usejobStore } from "../../hooks/useJobStore"

const ProfileController = observer(() => {

    const jobStore = usejobStore()
    const { profileData, getProfileData } = jobStore

    const { isLoading, isError } = useGetProfileDataApi()

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
    console.log(profileData, "controller")
    return (
        <Profile
            profileApiStatus={profileApiStatus}
            profileData={profileData}
            getProfileData={getProfileData}

        />
    )
})

export default ProfileController