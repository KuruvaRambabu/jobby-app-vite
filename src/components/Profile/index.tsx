import { observer } from 'mobx-react'

import apiConstants from '../../constants/apiConstants'

import './index.css'
import LoadingWrapper from '../../Common/components/loadingWrapper'
import FailureView from '../../Common/components/FailureView'
import { ProfileDetailsContainer, ProfileImg, ProfileName, ProfileShortDescription, ProfileMainContainer } from './styledComponents'


interface profilePropTypes {
  profileData: any
  onClickRetry: () => void
  profileApiStatus: string | undefined
}

const Profile = observer((props: profilePropTypes) => {

  const {
    profileApiStatus,
    profileData,
    onClickRetry
  } = props


  const { profileImageUrl, shortBio, name } = profileData


  const renderSuccessView = () => {
    return (
      <ProfileDetailsContainer className="profile-details-container">
        <ProfileImg className="profile-pic" src={profileImageUrl} alt="profile" />
        <ProfileName className="profile-name">{name}</ProfileName>
        <ProfileShortDescription className="short-bio">{shortBio}</ProfileShortDescription>
      </ProfileDetailsContainer>
    )
  }

  const renderProfileDetails = () => {
    switch (profileApiStatus) {
      case apiConstants.fetching:
        return <LoadingWrapper />
      case apiConstants.success:
        return renderSuccessView()
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />
      default:
        return ''
    }
  }

  return <ProfileMainContainer className="profile-card-container">{renderProfileDetails()}</ProfileMainContainer>
})

export default Profile
