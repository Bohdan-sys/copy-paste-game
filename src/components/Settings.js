import React, { useState, useContext } from 'react'

import { IconButton, Menu, MenuItem } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { DifficultControl } from './DifficultControl';
import { Switcher } from './Switcher';
import { LifeControl } from './LifeControl';

import { GridContext } from '../contexts/GridContext/GridProvider';
// import { TimerContext } from "../contexts/TimerContext/TimerProvider";


export const Settings = () => {
    const { grid } = useContext(GridContext)
    // const { start } = useContext(TimerContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='dots'>
            <IconButton
                aria-label="more"
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
                disabled={grid.pasteGrid.length === 0 ? false : true}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '40ch',
                    },
                }}
            >
                <MenuItem >
                    <DifficultControl />
                </MenuItem>
                <MenuItem >
                    <Switcher />
                </MenuItem>
                <MenuItem >
                    <LifeControl />
                </MenuItem>
            </Menu>
        </div>
    );
}