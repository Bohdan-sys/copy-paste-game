import React, { useContext } from 'react'

import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { GridContext } from '../contexts/GridContext/GridProvider'


export const DifficultControl = () => {

    const { dif, action } = useContext(GridContext)

    return (
        <div className='difficult'>
            <h1 className="caption caption--size_4">Difficult (max. 10) - <b>{dif}</b></h1>
            <IconButton color="primary" onClick={() => action('-')} >
                <RemoveIcon fontSize="small" />
            </IconButton>
            <IconButton color="primary" onClick={() => action('+')}>
                <AddIcon fontSize="small" />
            </IconButton>
        </div>
    );
}