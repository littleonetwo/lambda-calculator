import React from "react";

const OperatorButton = (props) => {
  const equate = () =>{
    //console.log(props.button);
    if(props.button.char != '='){
      if(props.equation === 'nothing'){
        props.setEquation(props.displayNum + ' ' + props.button.char);

      } else {
        props.setEquation(props.equation + ' ' + props.displayNum + ' ' + props.button.char)
        props.setTracking('0');
      }

    } else{

      //props.setEquation(props.equation + ' ' + props.displayNum );
      props.setTracking('2');

      let total = props.equation + ' ' + props.displayNum;
      total = total.replace(/x/g, "*");
      total = total.trim();
      console.log(total);
      if (total.substring(total.length - 1) === '-' || total.substring(total.length - 1) === '+' || total.substring(total.length - 1) === '*' || total.substring(total.length - 1) === '/' || total.substring(total.length - 1) === '='){
        total = total.slice(0, total.length - 2);
        total = eval(total);
      } else {
        total = eval(total);
      }

      props.setDisplayNum(total.toString());
      props.setEquation('nothing');
      //console.log(total);
      // total.forEach( id =>{
      //   props.setTotal(eval(props.total)
      //
      // })

    }

  }

  return (
    <button className="operator-button" onClick= {equate}>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button.char}
      </span>
    </button>


  );
};

export default OperatorButton;
