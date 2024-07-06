import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  console.log(userInput);
  const results = calculateInvestmentResults(userInput);
  console.log(results);
  return <p>Results</p>;
}
