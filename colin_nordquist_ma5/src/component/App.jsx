import React, { useEffect, useState } from 'react';
import Box from './Box'
import Container from './Container'


function App() {

    return (
        <div>
            <Container>
                
            </Container>
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