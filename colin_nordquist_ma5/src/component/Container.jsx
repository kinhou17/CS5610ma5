import React, { useState } from 'react';

import './Container.css';

import Box from './Box'


export default function Container(props) {

    const [blackCount, setBlackCount] = useState(0);


    return (
        <div>
            <h1>Count: {blackCount}</h1>
            <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
            <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
            <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
            <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
        </div>
    );

    // return (<div className='Container'>yuuu</div>);
}