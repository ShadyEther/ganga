'use client'

import { AppBar, Avatar, Badge, Box, Button, IconButton, Modal, TextField, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react'
import Login from './_auth/Auth';
import Auth from './_auth/Auth';







function Header() {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [authModalToggle, setAuthModalToggle] = useState<boolean>(false);


    function toggleAuth() {
        if (loggedIn) {
            return (
                <><Avatar /></>
            )
        }
        else {
            return (
                <Button
                    variant='contained'
                    onClick={() => { setAuthModalToggle(true) }}
                >
                    Login
                </Button>
            )
        }
    }

    const handleAuthModalClose = () => setAuthModalToggle(false)

    return (
        <AppBar

        >
            <Toolbar>
                <Typography>Granga</Typography>
                <TextField label='search' />
                <Badge badgeContent={'99+'}>
                    <ShoppingCartIcon />
                </Badge>
                {toggleAuth()}
            </Toolbar>

            <Modal
                open={authModalToggle}
                onClose={handleAuthModalClose}
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Box 
                    sx={{
                        bgcolor:'#60a372',
                        borderRadius:'15px'
                    }}
                    >
                    <Auth />
                </Box>
            </Modal>
        </AppBar>
    )
}

export default Header