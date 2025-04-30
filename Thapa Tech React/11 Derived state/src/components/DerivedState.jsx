import React, { use, useState } from "react";

// const user = 

const DerivedState = () => {
    const [user, setUser] = useState([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Angles', age: 45 }
    ])

    console.log(user)

    const userCount = user.length // this is my derived state.

    const totalAge = user.reduce((acc, crr) => acc + crr.age, 0)
    const avrageAge = Math.floor(totalAge / user.length)

    return (
        <div className="main-div">
            <h1>User list</h1>
            <ul>
                {
                    user.map((item, ind) => {
                        return (
                            <li key={ind}>{`name of user is : ${item.name} and age is : ${item.age}`}</li>
                        )
                    })
                }
            </ul>
            <p>Total User : {userCount}</p>
            <p>Avrage Age : {avrageAge}</p>
        </div>
    )
}

export default DerivedState;    