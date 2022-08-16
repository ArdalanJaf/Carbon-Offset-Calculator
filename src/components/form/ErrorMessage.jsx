import StyledErrorMsg from "../styles/ErrorMsg.Styled";

export default function ErrorMessage(props) {
  const errorTextGen = (type) => {
    switch (type) {
      case "required":
        return "Field cannot be empty.";
      case "pattern":
        return "Must be a number.";
      case "maxLength":
        return "Number is too long.";
      default:
        break;
    }
  };

  return <StyledErrorMsg>{errorTextGen(props.type)}</StyledErrorMsg>;
}
