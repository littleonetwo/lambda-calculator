import React, {useState} from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "./components/DisplayComponents/Display.js";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [total, setTotal] = useState(0);
  const [displayNum, setDisplayNum] = useState('0');
  const [equation, setEquation] = useState('nothing');
  const [tracking, setTracking] = useState('0');

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display
          displayNum = {displayNum}

        />
        <div class= "button-container">
          <div class= "left-buttons">
            <Specials
              setDisplayNum = {setDisplayNum}
              displayNum = {displayNum}
              setEquation = {setEquation}
              equation = {equation}
              setTracking = {setTracking}
              tracking = {tracking}


             />
            <Numbers
              setDisplayNum = {setDisplayNum}
              displayNum = {displayNum}
              setEquation = {setEquation}
              equation = {equation}
              setTracking = {setTracking}
              tracking = {tracking}

            />
          </div>
          <div class= "right-buttons">
            <Operators
              setEquation = {setEquation}
              equation = {equation}
              displayNum = {displayNum}
              setDisplayNum = {setDisplayNum}
              total = {total}
              setTotal = {setTotal}
              setTracking = {setTracking}
              tracking = {tracking}

             />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
