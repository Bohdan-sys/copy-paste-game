import React, { useContext } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { GridContext } from '../contexts/GridContext/GridProvider'
import { randomDegree } from '../Utils/Randomizer'

export const PasteGrid = () => {

    const { grid, pasteItem, rotate, lifeChanger, lifes } = useContext(GridContext)

    console.log(grid)
    return (
        <Container maxWidth="md">
            <Grid container className="grid" wrap="wrap-reverse" >
                <Grid className='grid__box' style={rotate ? { transform: `rotate(${randomDegree()}deg)` } : { transform: `rotate(0deg)` }}>
                    <ArrowUpwardIcon color="primary" fontSize="large" />
                    {grid.copyGrid.map((item, index) => (
                        <Grid container className="grid__row" wrap="nowrap" key={index}>
                            {item.map((value, i) => (
                                <Grid key={i} item className="grid__column">
                                    <Button variant="outlined"
                                        size="small"
                                        style={value ? { background: `default` } : { background: `${grid.pasteGrid[index][i].color}` }}
                                        disabled={lifes === 0}
                                        onClick={() => {
                                            pasteItem(value)
                                            if (value !== grid.curValue && grid.pasteGrid.length !== 0) { lifeChanger('-') }
                                        }}
                                        className="grid__button"
                                    ><span style={rotate ? { transform: `rotate(${randomDegree()}deg)` } : { transform: `rotate(0deg)` }}>Paste</span></Button>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container >
    )
}

