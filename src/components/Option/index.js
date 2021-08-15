import { forwardRef } from "react";
import { StyledOption } from "./styles";

const Option = forwardRef((props, ref) => {
  const { text, value, name } = props;

  return(
    <StyledOption>
      <input ref={ref} type="radio" value={value} name={name} />
      <span>{text}</span>
    </StyledOption>
  )
})

export default Option;