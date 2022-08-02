import SelectCountry from "./SelectCountry";

export default function Form() {
  return (
    <form name="userInput">
      <SelectCountry />

      <button type="submit">Submit</button>
    </form>
  );
}

// onSubmit={FUNCTION}
