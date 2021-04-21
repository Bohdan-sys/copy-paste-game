import React, { useContext } from 'react'
import { TimerContext } from "../contexts/TimerContext/TimerProvider";





export const TimerDisplay = () => {
    const { formatTime } = useContext(TimerContext)


    return (

        <div className="timer__display">
            <h1 className="caption caption--align_center caption--size_3">{formatTime()}</h1>
        </div>

    )
}


