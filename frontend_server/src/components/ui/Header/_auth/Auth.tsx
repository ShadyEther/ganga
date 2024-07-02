import { Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import IframeComponent from './IframeComponent'





function Auth() {
    const [newUser, setNewUser] = useState<boolean>(false)   
    function toggleAuth(){
        setNewUser(!newUser)
    }

    return (
        <>
            {newUser ? <Register/> : <Login/>}
            {/* {newUser ? <IframeComponent src ="http://127.0.0.1:8000/register"/> : <IframeComponent src ="http://127.0.0.1:8000/login"/>} */}
            
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'2%'
                }}

            >

            <Link
                component="button"
                onClick={() => {
                    toggleAuth()
                }}
            >
                {newUser?'Existing User? Login Here':'New User? Register Here '}
            </Link>
            </Box>
        </>
    )
}

export default Auth