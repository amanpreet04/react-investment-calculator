import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120000,
    expectedReturn: 10,
    duration: 5,
  });

  function handleUserInputsChange(identifier, newValue) {
    setUserInput((prevInputs) => ({
      ...prevInputs,
      [identifier]: newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleUserInputsChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
