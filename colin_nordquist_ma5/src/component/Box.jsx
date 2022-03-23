import React, { useState } from 'react';
import './Box.css';


export default function Box(props) {

    const [color, setColor] = useState('white');

    let idName = "box";
    if (props.position === "1") {
        idName += '1';
    } else if (props.position === "2") {
        idName += '2';
    } else if (props.position === "3") {
        idName += "3";
    } else if (props.position === "4") {
        idName += "4";
    }

    let className = "box";
    if (color === "white") {
        className += " " + "white";
    } else if (color === "black") {
        className += " " + "black";
    }

    function changeColor() {
        if (color === 'white') {
            setColor('black');
            props.blackCount(1);
        } else if (color === 'black') {
            setColor('white');
            props.blackCount(-1);
        }
    }

    return (<div className={className} id={idName} onClick={() => changeColor()}></div>);
}
