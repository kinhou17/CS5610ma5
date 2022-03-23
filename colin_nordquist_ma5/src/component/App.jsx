import React, { useEffect, useState } from 'react';
import Box from './Box'
import Container from './Container'


function App() {

    const [blackCount, setBlackCount] = useState(0);

    return (
        <div>
            <Container></Container>
                <h1>Count: {blackCount}</h1>
                <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
                <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
                <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
                <Box blackCount={(isBlack) => setBlackCount(blackCount + isBlack)} />
        </div>
    );
}


// function App() {


//     const [kiwiSelected, setKiwiSelected] = useState(true);

//     let isKiwiSelect = "No";
//     if (kiwiSelected) {

//         isKiwiSelect = "Yes"
//     }

//     useEffect(() => console.log("render"), [isKiwiSelect]);


//     return (
//         <div>
//             <div>Is Kiwi Currently Selected?</div>
//             {isKiwiSelect}
//             <Box onKiwiCheck={(kiwiState) => setKiwiSelected(kiwiState)}/>
//         </div>
//     );
// }

export default App;


// const kiwiFunction = (kiwiState) => setKiwiSelected(kiwiState)