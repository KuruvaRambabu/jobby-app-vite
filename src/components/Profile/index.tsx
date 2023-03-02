import { ThreeDots } from 'react-loader-spinner'
import { observer } from 'mobx-react'

import apiConstants from '../../constants/apiConstants'

import './index.css'


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

  const renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ffffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  )

  const renderSuccessView = () => {
    return (
      <div className="profile-details-container">
        <img className="profile-pic" src={profileImageUrl} alt="profile" />
        <p className="profile-name">{name}</p>
        <p className="short-bio">{shortBio}</p>
      </div>
    )
  }

  const renderFailureView = () => (
    <button
      className="profile-retry-btn"
      onClick={getProfileData}
      type="button"
    >
      Retry
    </button>
  )

  const renderProfileDetails = () => {
    switch (profileApiStatus) {
      case apiConstants.fetching:
        return renderLoadingView()
      case apiConstants.success:
        return renderSuccessView()
      case apiConstants.failure:
        return renderFailureView()
      default:
        return ''
    }
  }

  return <div className="profile-card-container">{renderProfileDetails()}</div>
})

export default Profile
