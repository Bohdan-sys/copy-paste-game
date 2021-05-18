import React, { useContext } from 'react'
import { GridContext } from '../contexts/GridContext/GridProvider'
import { Button, Container } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';




export const RefreshBtn = () => {


    const { action } = useContext(GridContext)




    return (
        <div className="control">
            <Container maxWidth="md">
                <Button variant="contained"
                    color="primary"
                    startIcon={<RefreshIcon />}
                    onClick={() => {
                        action('reset')
                    }} >
                    Refresh
            </Button>
            </Container>

        </div>
    )
}


