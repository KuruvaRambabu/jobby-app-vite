import { observer } from "mobx-react";

import apiConstants from "../../constants/apiConstants";

import LoadingWrapper from "../../Common/components/loadingWrapper";
import FailureView from "../../Common/components/FailureView";
import {
  ProfileDetailsContainer,
  ProfileImg,
  ProfileName,
  ProfileShortDescription,
  ProfileMainContainer,
} from "./styledComponents";

interface profilePropTypes {
  profileData: any;
  onClickRetry: () => void;
  profileApiStatus: string | undefined;
}

const Profile = observer((props: profilePropTypes) => {
  const { profileApiStatus, profileData, onClickRetry } = props;

  const { profileImageUrl, shortBio, name } = profileData;

  const renderSuccessView = () => {
    return (
      <ProfileDetailsContainer>
        <ProfileImg
          data-testid="profile-pic"
          src={profileImageUrl}
          alt="profile"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileShortDescription>{shortBio}</ProfileShortDescription>
      </ProfileDetailsContainer>
    );
  };

  const renderProfileDetails = () => {
    switch (profileApiStatus) {
      case apiConstants.fetching:
        return <LoadingWrapper />;
      case apiConstants.success:
        return renderSuccessView();
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />;
      default:
        return "";
    }
  };

  return <ProfileMainContainer>{renderProfileDetails()}</ProfileMainContainer>;
});

export default Profile;
