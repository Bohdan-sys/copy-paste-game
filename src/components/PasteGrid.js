import React, { useContext } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import { GridContext } from '../contexts/GridContext/GridProvider'
import { randomDegree } from '../Utils/Randomizer'



export const PasteGrid = () => {

    const { grid, pasteItem, rotate, lifeChanger, lifes } = useContext(GridContext)

    return (
        <Container maxWidth="md">
            <Grid container className="grid" wrap="wrap-reverse">
                <Grid className='grid__box' style={rotate ? { transform: `rotate(${randomDegree()}deg)` } : { transform: `rotate(0deg)` }}>
                    {grid.copyGrid.map((item, index) => (
                        <Grid container className="grid__row" wrap="nowrap" key={index}>
                            {item.map((value, i) => (
                                <Grid key={i} item className="grid__column">
                                    <Button variant="outlined"
                                        size="small"
                                        style={value !== 0 ? { background: `none` } : { background: `${grid.pasteGrid[index][i].color}` }}
                                        disabled={lifes === 0}
                                        onClick={() => {
                                            pasteItem(value)
                                            if (value.id !== grid.curValue.id && grid.pasteGrid.length !== 0) { lifeChanger('-') }
                                        }}
                                        className="grid__button"
                                    ><span

                                        // style={rotate ? { transform: `rotate(${randomDegree()}deg)` } : { transform: `rotate(0deg)` }}

                                        className="caption caption--size_4">{value ? '🚢' : grid.pasteGrid[index][i].emoji}</span></Button>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container >
    )
}

