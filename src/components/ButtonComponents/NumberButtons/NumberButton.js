import React from "react";

const NumberButton = (props) => {

  const setToNumber = () => {
    let check = 9;
    let cut = props.displayNum;
    let equationInProgress;
    let stepNo = 0;

    if(cut.includes('-') === true){
       check = 10;
    } else {
      check = 9;
    }

    // console.log(props.equation.substring(props.equation.length - 1) != '-');
    // console.log(stepNo);

    if(props.equation.substring(props.equation.length - 1) === '-' || props.equation.substring(props.equation.length - 1) === '+' || props.equation.substring(props.equation.length - 1) === 'x' || props.equation.substring(props.equation.length - 1) === '/'){
      equationInProgress = true;
      //stepNo = 1;
      //console.log(stepNo);
    } else {
      equationInProgress = false;


    }

    // console.log(props.equation);
    // console.log(equationInProgress);
    // console.log(stepNo);

    if(equationInProgress === false){

      if(props.displayNum != '0' && props.displayNum.length < check && props.tracking != '2'){
        props.setDisplayNum(props.displayNum + props.button);
        //console.log(props.button);
      } else if (props.displayNum === '0' || props.tracking === '2'){
        props.setDisplayNum(props.button);
        if (props.tracking === '2'){
          props.setTracking('0');
        }
      };

    } else if( equationInProgress === true){


      if(props.tracking === '0' ){

        props.setDisplayNum(props.button);
        props.setTracking('1');

      } else {

          if(props.displayNum != '0' && props.displayNum.length < check){
            props.setDisplayNum(props.displayNum + props.button);
            //console.log(props.button);
          } else if (props.displayNum === '0'){
            props.setDisplayNum(props.button);
          };

        };

    };

    // console.log(stepNo);

    // if(stepNo > 1 && equationInProgress === true){
    //
    //   if(props.displayNum != '0' && props.displayNum.length < check){
    //     props.setDisplayNum(props.displayNum + props.button);
    //     //console.log(props.button);
    //   } else if (props.displayNum === '0'){
    //     props.setDisplayNum(props.button);
    //   };
    //
    // };

  };

  return (

    <button className="number-button" onClick={setToNumber}>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button}
      </span>
    </button>


  );
};

export default NumberButton;
