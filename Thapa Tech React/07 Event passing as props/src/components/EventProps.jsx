import { WelcomeUser } from "./EelcomeUser"

export const EventPops = () => {

    const handelClick = () => {
        alert('this is a parent component')
    }

    return (
        <>
            <WelcomeUser onClick={handelClick} />
        </>
    )
}