import SkillsDataModel from "./skillsDataModel";

const skillsData = {
  image_url:
    "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
  name: "Docker",
};

describe("Test cases for Skills Data Model", () => {
  let skillsDataModel: SkillsDataModel;

  beforeEach(() => (skillsDataModel = new SkillsDataModel(skillsData)));

  it("should test skills image url", () => {
    expect(skillsDataModel.imageUrl).toStrictEqual(skillsData.image_url);
  });

  it("should test skill name", () => {
    expect(skillsDataModel.name).toStrictEqual(skillsData.name);
  });
});
