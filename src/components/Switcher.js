import React, { useContext } from 'react'

import { Switch } from '@material-ui/core';
import { GridContext } from '../contexts/GridContext/GridProvider'




export const Switcher = () => {

    const { rotate, handleChange } = useContext(GridContext)




    return (
        <div className='switcher'>
            <h1 className="caption caption--size_4">Rotate</h1>
            <Switch
                checked={rotate}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    );
}