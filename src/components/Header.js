import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Tabs, Tab, Container } from '@material-ui/core';

export const Header = ({ children }) => {



    const location = useLocation()

    return (
        <Container maxWidth="md">
            <div className="header">
                <AppBar position="relative" color="default" >
                    <Tabs
                        value={location.pathname}
                        indicatorColor="primary"
                        className="tabs">
                        <Tab component={NavLink} className="tabs__link"
                            to='/' exact
                            label={<span className="caption caption--size_4">Copy</span>} value={'/'} />

                        <Tab component={NavLink} className="tabs__link"
                            to='/pastepage'
                            label={<span className="caption caption--size_4">Paste</span>} value={'/pastepage'} />
                    </Tabs>
                    {children}
                </AppBar>

            </div>
        </Container>
    )
}