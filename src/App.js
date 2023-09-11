import { useState } from "react";
import React from "react";
import Header from "./components/Header/Header.js"
import ResultTable from "./components/ResultTable/ResultTable.js";
import UserInput from "./components/UserInput/UserInput.js";



function App() {
  const [userInput, setUserInput] = useState(null);


  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
    const yearlyData = []; 

    if(userInput){
      let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    }

    

  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} />

      {!userInput&& <p>No investement calculate yet.</p>}
      {userInput && <ResultTable   data={yearlyData} initialInvestment={userInput['current-savings']} />} 
         
    </div>
  );
}

export default App;
