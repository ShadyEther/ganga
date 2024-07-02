'use client'

import { AppBar, Avatar, Badge, Box, Button, IconButton, Link, Modal, Slide, TextField, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react'
import Login from './_auth/Auth';
import Auth from './_auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectButtonState, selectLoggedinState, toggleButton } from '@/libs/store/slices/authSlice/authslice';


function HideOnScroll({ children }: any) {
    // const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    // const trigger = useScrollTrigger({
    //     target: window ? window() : undefined,
    // });
    const trigger = useScrollTrigger();


   

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}




function Header() {

    const isButtonClicked = useSelector(selectButtonState);
    // const loggedIn = useSelector(selectButtonState);
    const loggedIn = useSelector(selectLoggedinState);

    const dispatch = useDispatch();

    const handleClick = () => {
       dispatch(toggleButton());
       
    };

    // const [loggedIn, setLoggedIn] = useState<boolean>(false);
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
        <HideOnScroll >

            <AppBar
                position='sticky'
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2em',
                    }}
                >
                    <Typography >
                        <Link
                            href="../"
                            variant='h4'
                            underline='none'
                            color={'yellow'}

                        >
                            Ganga
                        </Link>
                    </Typography>
                    <TextField sx={{
                        flex: '1',
                    }}
                        label='search' />
                    <Badge badgeContent={'99+'}>
                        <ShoppingCartIcon />
                    </Badge>
                    {/* <button onClick={handleClick} >{isButtonClicked?'true':'false'}</button> */}
                    {toggleAuth()}
                </Toolbar>

                <Modal
                    open={authModalToggle}
                    onClose={handleAuthModalClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#60a372',
                            borderRadius: '15px'
                        }}
                    >
                        <Auth />
                    </Box>
                </Modal>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header