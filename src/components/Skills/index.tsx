import SkillsDataModel from '../../stores/JobStore/models/skillsDataModel'
import './index.css'


interface SkillsPropTypes{
  skill:SkillsDataModel
}

const Skills = (props:SkillsPropTypes) => {
  const {skill} = props
  const {imageUrl, name} = skill
  return (
    <li className="skill-container">
      <img className="skill-logo" src={imageUrl} alt={name} />
      <p className="skill-name">{name}</p>
    </li>
  )
}

export default Skills
