import React, { useState } from 'react';

import './Container.css';

import Box from './Box'


export default function Container(props) {

    const [blackCount, setBlackCount] = useState(0);


    return (
        <div className='container'>
            <h1>Count: {blackCount}</h1>
            <Box position="1" blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
            <Box position="2" blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
            <Box position="3" blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
            <Box position="4" blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
        </div>
    );

}