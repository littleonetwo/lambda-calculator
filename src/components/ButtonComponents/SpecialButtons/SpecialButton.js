import React from "react";

const SpecialButton = (props) => {
  let clickCount = 0;
  const specialButton = () => {
    // let clickCount = 0;

    if(props.button === 'C'){
      props.setDisplayNum('0');
      if(clickCount === 0){
        clickCount++;
        //console.log(clickCount);
      } else {
        props.setEquation('nothing');
        //console.log(props.equation);
        clickCount= 0;
        props.setTracking('0');
        //console.log(clickCount);
      }
    } else if (props.button === '+/-'){
      if(props.displayNum.includes('-') != true){
        props.setDisplayNum('-' + props.displayNum);
      } else {

        let cut = props.displayNum.replace('-', ' ');
        props.setDisplayNum(cut.trim());
      }
      clickCount = 0;
    }

  };


  return (
    <button className="special-button" onClick={specialButton}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button}
      </span>
    </button>


  );
};

export default SpecialButton;
