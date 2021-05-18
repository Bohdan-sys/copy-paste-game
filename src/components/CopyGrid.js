import React, { useContext } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import { GridContext } from '../contexts/GridContext/GridProvider'
// import { TimerContext } from "../contexts/TimerContext/TimerProvider";


export const CopyGrid = () => {
    // const { startWatch, start } = useContext(TimerContext)
    const { grid, copyItem, lifeChanger, lifes } = useContext(GridContext)


    return (
        <Container maxWidth="md">
            <Grid container className="grid" wrap="nowrap">
                <Grid className="grid__box" >
                    {grid.copyGrid.map((item, index) => (
                        <Grid container className="grid__row" wrap="nowrap" key={index}>
                            {item.map((value, i) => (
                                <Grid key={i} item className="grid__column">
                                    <Button
                                        variant="outlined"
                                        style={value !== 0 ? { background: `${value.color}` } : { background: `none` }}
                                        disabled={value && lifes ? value.clicked : true}
                                        onClick={() => {
                                            // historySetter(history.length === 0 ? grid : history)
                                            copyItem(value)
                                            // if (grid.pasteGrid.length === 0 && !start) startWatch()

                                            if (grid.curValue.id) { lifeChanger('-') }

                                        }}
                                        className="grid__button"
                                    ><span className="caption caption--size_4">{value ? value.emoji : '🌍'}
                                        </span></Button>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container >
    )
}

