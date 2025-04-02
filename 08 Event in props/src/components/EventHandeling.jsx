import React from 'react'

function EventHandeling() {


    const handelButtonClick = (event) => {
        console.log(event.target.innerHTML);
        console.log('btn');
    }

    return (
        <div>
            <button onClick={handelButtonClick} >Click me! </button>
        </div>
    )
}

export default EventHandeling
