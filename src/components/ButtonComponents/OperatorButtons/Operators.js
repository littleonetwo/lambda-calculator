import React, {useState}  from "react";
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton.js";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className = "operator-button-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operatorState.map((button, index) => (
           <OperatorButton
             button={button}
             key={index}
             setEquation= {props.setEquation}
             equation= {props.equation}
             displayNum= {props.displayNum}
             setDisplayNum= {props.setDisplayNum}
             total= {props.total}
             setTotal= {props.setTotal}
             setTracking = {props.setTracking}
             tracking = {props.tracking}

          />
         ))
       }
    </div>
  );
};

export default Operators;
