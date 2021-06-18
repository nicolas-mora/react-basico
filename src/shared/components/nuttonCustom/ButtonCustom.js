import React from "react";
import './ButtonCustom.css'

const ButtonCustom = ( props ) => {
    const { text = 'Default', className = 'default' } = props;

    return (
        <button className={className}>{text}</button> 
    )
}

export default ButtonCustom