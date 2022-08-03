import Purchases from "./Purchases";
import SelectCountry from "./SelectCountry";

export default function Form() {
  return (
    <form name="userInput">
      <SelectCountry />
      <Purchases />
      <button type="submit">Submit</button>
    </form>
  );
}

// onSubmit={FUNCTION}
