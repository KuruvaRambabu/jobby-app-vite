import { SkillObj } from "../../../types"

class SkillsDataModel {
    imageUrl:string
    name:string
  
    constructor(skill: SkillObj) {
      this.name = skill.name
      this.imageUrl = skill.image_url
    }
  }
  
  export default SkillsDataModel
  