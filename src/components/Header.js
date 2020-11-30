import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';




const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>

                <Typography>Dashboard Header</Typography>
                <AccountCircle />
            </Toolbar>
        </AppBar>
    )

}

export default Header;