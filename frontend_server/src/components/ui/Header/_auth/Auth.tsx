import { Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'





function Auth() {
    const [newUser, setNewUser] = useState<boolean>(false)   
    function toggleAuth(){
        setNewUser(!newUser)
    }

    return (
        <>
            {newUser ? <Register/> : <Login/>}
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