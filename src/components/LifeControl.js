import React, { useContext } from 'react'

import { IconButton } from '@material-ui/core';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { GridContext } from '../contexts/GridContext/GridProvider'


export const LifeControl = () => {

    const { lifeChanger } = useContext(GridContext)

    return (
        <div className='lifes'>
            <h1 className="caption caption--size_4"> Set lifes</h1>
            <IconButton color="primary" onClick={() => lifeChanger('-')} >
                <RemoveIcon fontSize="small" />
            </IconButton>
            <IconButton color="primary" onClick={() => lifeChanger('+')}>
                <AddIcon fontSize="small" />
            </IconButton>
        </div>
    );
}