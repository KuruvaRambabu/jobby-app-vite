import { skillObj } from "../../types"

class SkillsDataModel {
    imageUrl:string
    name:string
  
    constructor(skill: skillObj) {
      this.name = skill.name
      this.imageUrl = skill.image_url
    }
  }
  
  export default SkillsDataModel
  