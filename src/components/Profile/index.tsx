import {useEffect, useContext} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import {observer} from 'mobx-react'
import { useQuery } from 'react-query';

import apiConstants from '../../constants/apiConstants'
import StoresContext from '../../context/StoreContext'

import './index.css'


const Profile = observer(() => {
  const store = useContext(StoresContext)
  const {jobStore} = store
  const {profileApiStatus, profileData, getProfileData} = jobStore

  useQuery('userProfile', getProfileData)


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
    const {profileImageUrl, shortBio, name}:any = profileData
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
