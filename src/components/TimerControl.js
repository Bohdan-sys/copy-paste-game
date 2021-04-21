import React, { useContext } from 'react'
import { TimerContext } from "../contexts/TimerContext/TimerProvider";
import { GridContext } from '../contexts/GridContext/GridProvider'

import Button from '@material-ui/core/Button';





export const TimerControl = () => {
    const { startWatch, resetWatch } = useContext(TimerContext)
    const { action } = useContext(GridContext)
    return (
        <div className="timer__control">
            <Button variant="contained" color="primary" onClick={() => { startWatch() }} >
                Start
            </Button>
            <Button variant="contained" color="secondary" onClick={() => {
                resetWatch()
                action('reset')
            }} >
                Stop
            </Button>
        </div>
    )
}


