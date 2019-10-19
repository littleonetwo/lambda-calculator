import React, {useState} from "react";
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton.js";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div className = "special-button-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         specialState.map((button, index) => (
           <SpecialButton
              button={button}
              key={index}
              setDisplayNum={props.setDisplayNum}
              displayNum={props.displayNum}
              setEquation={props.setEquation}
              equation={props.equation}
              setTracking = {props.setTracking}
              tracking = {props.tracking}
          />
         ))
       }
    </div>
  );
};

export default Specials;
