

import { Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormEvent, useEffect, useState } from "react";
import axios from 'axios';

axios.defaults.withCredentials = false;

const Login =  () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [csrfTokenValue, setCsrfToken] = useState<string | null | undefined>('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    useEffect(() => {

        fetch("http://localhost:8000/api/csrf", 
            {
          credentials: "include",
        })
        .then((res) => {
          let csrfToken= res.headers.get("X-CSRFToken")
          console.log(res)
          setCsrfToken(csrfToken);
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])

    



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email');
        const password = formData.get('password');

        fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": csrfTokenValue,
            },
            credentials: "include",
            body: JSON.stringify({email: email, password: password}),
          })
          .then(async response => {
            if (!response.ok) {
              throw new Error('Connecting problem');
            }
            
            const data = await response.json(); 
            console.log(data); 
            
          })
          .catch((err) => {
            console.log(err)
          });

    }

    return (
        <Container

        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '2%',
                }}
            >
                <Avatar />
                <Typography>Existing User?</Typography>
                <Box component={'form'} onSubmit={handleSubmit}>
                    <TextField
                        label='Enter Username or Email'
                        fullWidth
                        margin="normal"
                        autoComplete="email"
                        id='email'
                        name="email"
                    />

                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox value={'remember'} />}
                        label="Remember me"
                        sx={{ marginTop: '2%' }}
                        id="remember"

                    />
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            marginTop: '2%'
                        }}
                    >
                        Login
                    </Button>
                </Box>


            </Box>
        </Container>
    )
}

export default Login

function setscrf(csrfToken: string | null) {
    throw new Error("Function not implemented.");
}
