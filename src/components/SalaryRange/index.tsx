import {
  SalaryRangeFilterLiContainer,
  RadioInputField,
  RadioInputLabel,
} from "./styledComponent";

interface SalaryTypes {
  salaryRangeId: string;
  label: string;
}

interface SalaryRangePropsTypes {
  salary: SalaryTypes;
  onChangeSalaryRange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SalaryRangeFilter = (props: SalaryRangePropsTypes) => {
  const { salary, onChangeSalaryRange } = props;
  const { salaryRangeId, label } = salary;

  return (
    <SalaryRangeFilterLiContainer>
      <RadioInputField
        onChange={onChangeSalaryRange}
        type="radio"
        name="Salary"
        id={salaryRangeId}
      />
      <RadioInputLabel htmlFor={salaryRangeId}>{label}</RadioInputLabel>
    </SalaryRangeFilterLiContainer>
  );
};

export default SalaryRangeFilter;
