export const EventHandeling = () => {

    const handelButtonClick = () => {
        console.log('working');
        alert('hey i am button click event  ')
    }

    return (
        <>
            <button onClick={handelButtonClick}>click</button>
        </>
    )
}