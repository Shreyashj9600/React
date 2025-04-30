import React, { useState } from 'react'
import './toggleSwitch.css'

function ToggleSwitch() {

    const [isOn , setIsOn] = useState(false)

    const handelToggleSwitch = () => {
        setIsOn(!isOn)
    }

    return (
        <div className='toggle-switch' onClick={handelToggleSwitch}>
            <div className={`switch  ${isOn ? 'on' : 'off'}`}>
                <span className='switch-state'>{isOn ? 'on' : 'off'}</span>
            </div>
        </div>
    )
}

export default ToggleSwitch 