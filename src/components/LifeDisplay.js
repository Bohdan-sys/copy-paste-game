import React, { useContext } from 'react'
import { Container } from '@material-ui/core';
import { GridContext } from '../contexts/GridContext/GridProvider'




export const LifeDisplay = () => {

    const { lifes } = useContext(GridContext)

    const createArr = (leng) => {
        let arr = [];
        for (let i = 0; i < leng; i++) {
            arr.push(i);
        }
        return arr;
    }

    return (
        <Container maxWidth="md">
            <div className='card'>
                <h2 className="caption caption--size_4">Lifes: </h2>
                {createArr(lifes).map(life =>
                    <span key={life} className="caption caption--size_3">&#128153;</span>
                )}
            </div>
        </Container>

    );
}