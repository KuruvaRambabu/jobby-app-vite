import SkillsDataModel from '../../stores/JobStore/models/SkillsDataModel/skillsDataModel'

import { SkillsContainer, SkillImg, SkillName } from './styledComponents'


interface SkillsPropTypes {
  skill: SkillsDataModel
}

const Skills = (props: SkillsPropTypes) => {
  const { skill } = props
  const { imageUrl, name } = skill
  return (
    <SkillsContainer>
      <SkillImg data-testid="skill-image" src={imageUrl} alt={name} />
      <SkillName>{name}</SkillName>
    </SkillsContainer>
  )
}

export default Skills
