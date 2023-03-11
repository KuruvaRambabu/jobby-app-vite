import { profileDetailsTypes } from "../../types"

class ProfileDetailsModel {
    name:string
    profileImageUrl:string
    shortBio:string
  
    constructor(profileDetails:profileDetailsTypes) {
      this.name = profileDetails.name
      this.profileImageUrl = profileDetails.profile_image_url
      this.shortBio = profileDetails.short_bio
    }
  }
  
  export default ProfileDetailsModel
  