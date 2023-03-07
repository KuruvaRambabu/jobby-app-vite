import './index.css'
import { SalaryRangeFilterLiContainer, RadioInputField, RadioInputLabel } from './styledComponent'

interface SalaryTypes {
  salaryRangeId: string
  label: string
}

interface SalaryRangePropsTypes {
  salary: SalaryTypes
  onChangeSalaryRange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SalaryRangeFilter = (props: SalaryRangePropsTypes) => {
  const { salary, onChangeSalaryRange } = props
  const { salaryRangeId, label } = salary

  return (
    <SalaryRangeFilterLiContainer className="salary-type-container">
      <RadioInputField
        onChange={onChangeSalaryRange}
        type="radio"
        name="Salary"
        id={salaryRangeId}
      />
      <RadioInputLabel className="radio-lable" htmlFor={salaryRangeId}>
        {label}
      </RadioInputLabel>
    </SalaryRangeFilterLiContainer>
  )
}

export default SalaryRangeFilter
