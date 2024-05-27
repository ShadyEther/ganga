"use client"





import { Box, Container, Typography } from "@mui/material";
import Login from "./_components/Login";
import { useState } from "react";

export default function main() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLoginClick = () => {

        if(isLoggingIn==false){

            setIsLoggingIn(true);
        }
        else{
            setIsLoggingIn(false);
            
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsLoggingIn(false);
    };












    return (

        <Container>
            {/* <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}>
                <Typography variant="h1">hehe</Typography>
            </Box>
            <Login /> */}
            <button onClick={handleLoginClick}>yobabes</button>

            {/* {!isLoggedIn && !isLoggingIn && <Home onLoginClick={handleLoginClick} />} */}
            {!isLoggedIn && isLoggingIn && <Login onLogin={handleLogin} />}
            {isLoggedIn && <h1>Welcome back, User!</h1>}
        </Container>
    )
}