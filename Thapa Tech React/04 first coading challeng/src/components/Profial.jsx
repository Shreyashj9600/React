import React from 'react'

const Profial = () => {
    return (
        <div>
            <h1>Profial card challenge</h1>

            <ProfialCard
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies : game cooking</p>
                <button>Contact</button>

            </ProfialCard>
        </div>
    )
}

export default Profial


function ProfialCard(props) {
    return (
        <>
            <h2>Name : {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.greeting}</p>
            <div>{props.children }</div>
        </>
    )
}