import './index.css'

interface SalaryTypes{
  salaryRangeId:string
  label:string
}

interface SalaryRangePropsTypes{
  salary:SalaryTypes
  onChangeSalaryRange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const SalaryRangeFilter = (props:SalaryRangePropsTypes) => {
  const {salary, onChangeSalaryRange} = props
  const {salaryRangeId, label} = salary

  return (
    <li className="salary-type-container">
      <input
        onChange={onChangeSalaryRange}
        type="radio"
        name="Salary"
        id={salaryRangeId}
      />
      <label className="radio-lable" htmlFor={salaryRangeId}>
        {label}
      </label>
    </li>
  )
}

export default SalaryRangeFilter
