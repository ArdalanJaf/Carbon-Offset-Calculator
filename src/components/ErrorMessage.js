export default function ErrorMessage(props) {
  const errorTextGen = (type) => {
    switch (type) {
      case "required":
        return "Field cannot be empty.";
      case "maxLength":
        return "Number is too long.";
      case "pattern":
        return "Must be a number.";
      default:
        break;
    }
  };

  return <p>{errorTextGen(props.type)}</p>;
}
