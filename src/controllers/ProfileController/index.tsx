import { useContext } from "react"
import { useQuery } from "react-query"
import Profile from "../../components/Profile"
import StoresContext from "../../context/StoreContext"

const ProfileController = () => {
    const store = useContext(StoresContext)
    const { jobStore } = store
    const { profileApiStatus, profileData, getProfileData } = jobStore

    useQuery('userProfile', getProfileData)

    return (
        <Profile
            profileApiStatus={profileApiStatus}
            profileData={profileData}
            getProfileData={getProfileData}

        />
    )
}

export default ProfileController