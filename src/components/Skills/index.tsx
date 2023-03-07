import SkillsDataModel from '../../stores/JobStore/models/skillsDataModel'

import './index.css'
import { SkillsContainer, SkillImg, SkillName } from './styledComponents'


interface SkillsPropTypes {
  skill: SkillsDataModel
}

const Skills = (props: SkillsPropTypes) => {
  const { skill } = props
  const { imageUrl, name } = skill
  return (
    <SkillsContainer className="skill-container">
      <SkillImg className="skill-logo" src={imageUrl} alt={name} />
      <SkillName className="skill-name">{name}</SkillName>
    </SkillsContainer>
  )
}

export default Skills
