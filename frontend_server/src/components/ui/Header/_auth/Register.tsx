

import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from "@mui/material"
import axios from "axios";
import { FormEvent, useState } from "react";




const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    // const [userData, setUserData] = useState(null);

    const handleClickShowPassword = () => setShowPassword((show: any) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };




    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        // console.log(event)
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        console.log(email)
        console.log(password)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name:email,
                email:email,
                password:password,
            });
            console.log('Login Response:', response.data);
        } catch (error) {
            console.error('Error from response');
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
                <Typography>New User?</Typography>
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

                    {/* <FormControlLabel
                        control={<Checkbox value={'remember'} />}
                        label="Remember me"
                        sx={{ marginTop: '2%' }}
                        id="remember"

                    /> */}
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            marginTop: '2%'
                        }}
                    >
                        Register
                    </Button>
                </Box>


            </Box>
        </Container>
    )
}

export default Register