import './index.css'
import { EmploymentFiltersLiEl, InputCheckbox, CheckboxLabel } from './styledComponents'

interface TypesOfEmployment {
  employmentTypeId: string
  label: string
}

interface EmploymentTypePropTypes {
  type: TypesOfEmployment
  onSelectEmploymentType: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const DisplayEmploymentTypeFilters = (props: EmploymentTypePropTypes) => {
  const { type, onSelectEmploymentType } = props
  const { employmentTypeId, label } = type

  return (
    <EmploymentFiltersLiEl>
      <InputCheckbox
        onChange={onSelectEmploymentType}
        type="checkbox"
        id={employmentTypeId}
      />
      <CheckboxLabel htmlFor={employmentTypeId}>
        {label}
      </CheckboxLabel>
    </EmploymentFiltersLiEl>
  )
}

export default DisplayEmploymentTypeFilters
