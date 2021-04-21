import React, { useContext } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { GridContext } from '../contexts/GridContext/GridProvider'
import { TimerContext } from "../contexts/TimerContext/TimerProvider";


export const CopyGrid = () => {
    const { startWatch, start } = useContext(TimerContext)
    const { grid, copyItem, lifeChanger, lifes } = useContext(GridContext)



    return (
        <Container maxWidth="md">
            <Grid container className="grid" wrap="nowrap">
                <Grid className="grid__box" >
                    <ArrowUpwardIcon color="primary" fontSize="large" />
                    {grid.copyGrid.map((item, index) => (
                        <Grid container className="grid__row" wrap="nowrap" key={index}>
                            {item.map((value, i) => (
                                <Grid key={i} item className="grid__column">
                                    <Button
                                        variant="outlined"
                                        style={{ background: `${value.color}` }}
                                        disabled={value && lifes ? value.clicked : true}
                                        onClick={() => {
                                            copyItem(value)
                                            if (grid.pasteGrid.length === 0 && !start) startWatch()
                                            if (grid.curValue.id) { lifeChanger('-') }

                                        }}
                                        className="grid__button"
                                    >Copy</Button>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

