'use client'

import { AppBar, Avatar, Badge, Box, Button, Divider, IconButton, Link, ListItemIcon, Menu, MenuItem, Modal, Slide, TextField, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect, useState } from 'react'
import Login from './_auth/Auth';
import Auth from './_auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectButtonState, selectLoggedinState, toggleButton,  toggleLoggedIn,  toggleLoggedOut } from '@/libs/store/slices/authSlice/authslice';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/navigation';



function HideOnScroll({ children }: any) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}




function Header() {

    // const isButtonClicked = useSelector(selectButtonState);
    const router=useRouter()

    const loggedIn = useSelector(selectLoggedinState);
    const dispatch=useDispatch()
    const [authModalToggle, setAuthModalToggle] = useState<boolean>(false);




    const [menuPos, setMenuPos] = React.useState<null | HTMLElement>(null);
    const MenuOpen = Boolean(menuPos);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuPos(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuPos(null);
    };


    const handleProfileClick = () => {
        setMenuPos(null);
        //route to profile page
        router.push('/profile')
    }

    const handleSettingsClick = () => {
        setMenuPos(null)
    }

    const handleLogoutClick = async () => {
        setMenuPos(null);
        //do logout

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/logout', {
            });
                dispatch(toggleLoggedOut())
            console.log('Logout Response:', response.data);
        } catch (error) {
            console.error('Error from response');
        }

    }

    
        
    useEffect(()=>{
        const authCheck=async ()=>{
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/user', { withCredentials: true, });
                dispatch(toggleLoggedIn());
                console.log('Response:', response.data);
            } catch (error) {
                // dispatch(toggleLoggedOut());
                console.error('Error from response');
            }
    
        }
        authCheck()
    },[dispatch])


    function toggleAuth() {
        

        if (loggedIn) {



            return (
                <>
                    <Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleMenuClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={MenuOpen ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={MenuOpen ? 'true' : undefined}
                            >
                                <Avatar />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={menuPos}
                        id="account-menu"
                        open={MenuOpen}
                        onClose={handleMenuClose}
                        onClick={handleMenuClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleProfileClick}>
                            <Avatar /> Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleSettingsClick}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleLogoutClick}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>

                </>
            )
        }
        else {
            // authCheck()
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
                            href="/"
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