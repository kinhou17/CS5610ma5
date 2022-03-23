import React, { useState } from 'react';

import './Box.css';

/*
props:
    {
        text: 'banana'

    }
*/


export default function Box(props) {


    const [color, setColor] = useState('white')


    let className = "box";
    if (color === 'white') {
        className += " " + 'white';
    } else if (color === 'black') {
        className += " " + "black";
    }


    function changeColor() {

        if (color == 'white') {
            setColor('black');
            props.blackCount(1);
        } else if (color == 'black') {
            setColor('white');
            props.blackCount(-1);
        }
    }

    return (<div className={className} onClick={() => changeColor()}></div>);



    /*

    const fruitList = ["kiwi", "banana", "apple", "orange"]

    const [fruit, setFruit] = useState('kiwi')
    
    let className = "box";
    if (fruit === 'kiwi') {
        className += " " + 'aqua';
    } else if (fruit === 'banana') {
        className += " " + "yellow";
    }

    function randomFruitSelector() {
        const randomIdx = Math.floor(Math.random() * fruitList.length);

        const selectedFruit = fruitList[randomIdx];

        setFruit(selectedFruit);

        // (kiwiState) => setKiwiSelected(kiwiState)
        if (selectedFruit == 'kiwi') {
            props.onKiwiCheck(true);
        } else {
            props.onKiwiCheck(false);
        }
    }

    return (<div className={className}>
        {fruit}
        <button onClick={() => randomFruitSelector()}>Random fruit selector</button>
    </div>);
    */
}
