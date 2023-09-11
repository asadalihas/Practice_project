import React, { useState } from 'react'

 const UserInput = (props) => {


      const initialUserInput =  {
        'current-savings' : 10000,
        'yearly-contribution': 1200,
        'expected-return' : 7,
         duration: 10
    };
    

   const [userInput, setUserInput]=useState(initialUserInput);

    const SubmitButton = (event) =>{
        event.preventDefault();
        
        props.onCalculate(userInput);
    };

    const resetButton =()=>{
        setUserInput(initialUserInput)
    };

    const changeInput = ( input,value) => {
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input]: value,
            };
        })
    };



  return (
    <form className="form" onSubmit={SubmitButton}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input 
            onChange={(event) =>changeInput ('current-savings',event.target.value)
            }
            value={userInput['current-savings']}
            type="number" 
            id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
            onChange={(event) =>changeInput ('yearly-contribution',event.target.value)
            }  
            value={userInput['yearly-contribution']}
            type="number" 
            id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input  
            onChange={(event) =>changeInput ('expected-return',event.target.value)
            }
            value={userInput['expected-return']}
            type="number" 
            id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
            onChange={(event) =>changeInput ('duration',event.target.value)}
            value={userInput['duration']}
            type="number" 
            id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetButton} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default UserInput;
