import React from 'react'
import { Container } from '@material-ui/core';
import { TimerDisplay } from './TimerDisplay';
import { TimerControl } from './TimerControl';




export const Timer = () => {


    return (
        <Container maxWidth="md">
            <div className="timer">
                <TimerDisplay />
                <TimerControl />
            </div>

        </Container>

    );
}