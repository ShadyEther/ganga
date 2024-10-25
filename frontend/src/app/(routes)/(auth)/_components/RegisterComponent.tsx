import { Box, Button, Link, TextField } from '@mui/material';
import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import { RegisterFormData } from '../register/page';







export interface RegisterFormData {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    re_password: string;
  }





const RegisterComponent = () => {
    const [registerCreds, setRegisterCreds] = useState<RegisterFormData>({
        "first_name": "",
        "last_name": "",
        "username": "",
        "password": "",
        "re_password": ""
    }
    );

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setRegisterCreds({ ...registerCreds, [name]: value })
    }

    const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        try {
            const response = await axios.post(
                "./register/api",
                {
                    "first_name": registerCreds.first_name,
                    "last_name": registerCreds.last_name,
                    "username": registerCreds.username,
                    "password": registerCreds.password,
                    "re_password": registerCreds.re_password
                }

            )

            // alert(response.data.detail)
            // console.log(response.data)
            if (response.data.success) {

                alert(response.data.success)
            }
            else {

                alert(response.data.error)
            }



        }
        catch (err) {
            console.log("yo client fetch err here: ", err.response.data)
            // return err.response.data
        }




    }








    return (
        <>
            <Box
                sx={{
                    paddingBottom: '1em',
                }}>
                This is for the New User Registration
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: '1em',
                }}>
                <Box

                    component={'form'}
                    onSubmit={handleRegisterSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '25%',
                        border: 'solid',
                        borderRadius: '20px',
                        padding: '1.5em',


                    }}>
                    <TextField
                        label='First Name '
                        fullWidth
                        margin="normal"
                        // autoComplete="email"
                        id='first_name'
                        name="first_name"
                        // color='secondary'


                        value={registerCreds.first_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Last Name'
                        fullWidth
                        margin="normal"
                        autoComplete="email"
                        id='last_name'
                        name="last_name"
                        // color='secondary'

                        value={registerCreds.last_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Username '
                        fullWidth
                        margin="normal"

                        id='username'
                        name="username"
                        // color='secondary'

                        value={registerCreds.username}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Password '
                        fullWidth
                        margin="normal"

                        id='password'
                        name="password"
                        // color='secondary'

                        value={registerCreds.password}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Confirm Password '
                        fullWidth
                        margin="normal"
                        id='re_password'
                        name="re_password"
                        // color='secondary'


                        value={registerCreds.re_password}
                        onChange={handleInputChange}
                    />

                    <Button variant='contained'
                        type='submit'
                        sx={{
                            width: '75%'
                        }}

                    > Register 📑 </Button>
                </Box>
                <Box>
                    Already Registered Before?
                    <Link href='./login'
                    >
                        Login Here
                    </Link>
                </Box>
            </Box>

        </>
    )
}

export default RegisterComponent