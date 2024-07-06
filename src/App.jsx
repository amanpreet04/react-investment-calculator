import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120000,
    return: 10,
    duration: 10,
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
    </>
  );
}

export default App;
