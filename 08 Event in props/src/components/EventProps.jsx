import React from 'react'

function EventProps() {

    const HandelWelcomeUser = (user) => {
        alert(`welcome ${user}`)
    }

    const handleHover = () => {
        alert(`Hey, Thanks for Hovering me ! `)
    }

    return (
        <>
            <WelcomeUser
                onClick={() => HandelWelcomeUser('shreyash')}
                onMouseEnter={handleHover}
            />
        </>
    )
}

export default EventProps


function WelcomeUser(prpos) {
    const handelChildComp = () => {
        alert('this is a chid componet event ')
    }
    return (
        <>
            <button onClick={prpos.onClick} >click me!</button>
            <button onMouseEnter={prpos.onMouseEnter}> onMouseEnter</button>
            <button onClick={handelChildComp}> click me!</button>
        </>
    )
}