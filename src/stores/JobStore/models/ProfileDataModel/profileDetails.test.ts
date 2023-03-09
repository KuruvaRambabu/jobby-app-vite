import profileDetailsResponse from "../../../../fixtures/profileDataResponse.json";

import ProfileDetailsModel from "./profileDetailsModel";

describe("Test cases for Profile Details Model", () => {
  let profileDetailsModel: ProfileDetailsModel;

  beforeEach(
    () =>
      (profileDetailsModel = new ProfileDetailsModel(profileDetailsResponse))
  );

  it("should test profile pic", () => {
    expect(profileDetailsModel.profileImageUrl).toStrictEqual(
      profileDetailsResponse.profile_image_url
    );
  });

  it("should test profile name", () => {
    expect(profileDetailsModel.name).toStrictEqual(profileDetailsResponse.name);
  });

  it("should test profile short bio", () => {
    expect(profileDetailsModel.shortBio).toStrictEqual(
      profileDetailsResponse.short_bio
    );
  });
});
