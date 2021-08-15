import { StyledOption } from "./styles";

const Option = ({ text, value, name }) => {
  return(
    <StyledOption>
      <input type="radio" value={value} name={name} />
      <span>{text}</span>
    </StyledOption>
  )
}

export default Option;