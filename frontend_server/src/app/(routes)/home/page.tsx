"use client"





import { Box, Container, Typography } from "@mui/material";
import Login from "./_components/Login";
import { useState } from "react";
import Header from "@/components/ui/Header/Header";
import Deals from "./_components/Deals";

export default function main() {

    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLoginClick = () => {

        if(isLoggingIn==false){

            setIsLoggingIn(true);
        }
        else{
            setIsLoggingIn(false);
            
        }
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
            <Header>
            </Header>
            <Box style={{paddingTop:`40px`}}>
            <button onClick={handleLoginClick}>yobabes</button>
            {isLoggingIn && <Login/>}
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            <Deals></Deals>
            
            </Box>
        </Container>
    )
}