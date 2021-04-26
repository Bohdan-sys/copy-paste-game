import React, { useReducer, useRef } from "react";
import { timerReducer, TIMER, START, RESET } from './TimerReducer'

export const TimerContext = React.createContext();

export const TimerContextProvider = ({ children }) => {
    const increment = useRef(null);

    const initialTimerState = {
        timer: 0,
        start: false,
    }
    const [timerState, dispatch] = useReducer(timerReducer, initialTimerState)

    const formatTime = () => {
        const getSeconds = `0${(timerState.timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timerState.timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timerState.timer / 3600)}`.slice(-2)
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const startWatch = () => {

        if (!timerState.start) {
            dispatch({ type: START })
            increment.current = setInterval(() => {
                dispatch({
                    type: TIMER,
                    payload: 1
                })
            }, 1000)
        }
    }

    const resetWatch = () => {
        clearInterval(increment.current)
        dispatch({
            type: RESET,
        })
    }



    return (
        <TimerContext.Provider value={{
            timerState: timerState,
            formatTime: formatTime,
            startWatch: startWatch,
            resetWatch: resetWatch,
            start: timerState.start
        }}>
            {children}
        </TimerContext.Provider>
    )
}
