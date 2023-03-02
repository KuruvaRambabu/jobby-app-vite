import { ThreeDots } from 'react-loader-spinner'
import { observer } from 'mobx-react'

import apiConstants from '../../constants/apiConstants'

import './index.css'
import LoadingWrapper from '../../common/components/loadingWrapper'
import FailureView from '../../common/components/FailureView'


interface profilePropTypes {
  profileApiStatus: string
  profileData: any
  getProfileData: () => void
}

const Profile = observer((props: profilePropTypes) => {

  const {
    profileApiStatus,
    profileData,
    getProfileData
  } = props

  const { profileImageUrl, shortBio, name } = profileData


  const renderSuccessView = () => {
    return (
      <div className="profile-details-container">
        <img className="profile-pic" src={profileImageUrl} alt="profile" />
        <p className="profile-name">{name}</p>
        <p className="short-bio">{shortBio}</p>
      </div>
    )
  }

  const renderProfileDetails = () => {
    switch (profileApiStatus) {
      case apiConstants.fetching:
        return <LoadingWrapper />
      case apiConstants.success:
        return renderSuccessView()
      case apiConstants.failure:
        return <FailureView onClickRetry={getProfileData} />
      default:
        return ''
    }
  }

  return <div className="profile-card-container">{renderProfileDetails()}</div>
})

export default Profile
