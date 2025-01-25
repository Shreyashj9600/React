import React from "react";
import ReactDom from 'react-dom';

let fName = 'shreyash'
let lName = 'jadhav'

ReactDom.render(
    <>
        <h1>{`my first name is ${fName} and last name is ${lName}`} </h1>

        <p>my fev no is {92 + 4 } 00</p>
    </>,
    document.getElementById('root')
)