import { observer } from "mobx-react"
import { useContext } from "react"
import { isError, useQuery } from "react-query"
import Profile from "../../components/Profile"
import StoresContext from "../../context/StoreContext"
import { useGetProfileDataApi } from "../../hooks/getProfileApiHook"
import apiConstants from '../../constants/apiConstants'

const ProfileController = observer(() => {

    const store = useContext(StoresContext)
    const { jobStore } = store
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