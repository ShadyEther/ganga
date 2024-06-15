

import { Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormEvent, useEffect, useState } from "react";
import axios from 'axios';

axios.defaults.withCredentials = false;

const Login =  () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [csrfTokenValue, setCsrfToken] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', 
                { 
                    email, 
                    password 
                },
                // {
                //     headers:{
                //         'Cookie': 'csrftoken=PeDAjvMAIDMt6hF3iT1scfGKwCgh5C8j',
                //         "Access-Control-Allow-Origin": "*"

                //     }
                // }
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

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