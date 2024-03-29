import React from 'react'
import './Button1.css';

const STYLES =[
    "btn-primary-solid",
    "btn-warning-solid",
    "btn-danger-solid",
    "btn-success-solid",
    "btn-primary-outline",
    "btn-warning-outline",
    "btn-danger-outline",
    "btn-success-outline",
];

const SIZES =[
    "btn-large",
    "btn-small",
    "btn-medium",
];
function Submit1({children , type, onClick , buttonStyle , buttonSize}){
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(

        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
         {children}
        </button>
      
    )
}
export default Submit1;