import React, { useState } from "react";

// const user = 

const DerivedState = () => {
    const [user, setUser] = useState([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Angles', age: 45 }
    ])
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
        </div>
    )
}

export default DerivedState;    