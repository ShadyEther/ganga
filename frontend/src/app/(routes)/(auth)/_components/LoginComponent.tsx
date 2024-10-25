import { useAppSelector, useAppDispatch } from '@/libs/hooks/hooks';
import { selectLoggedinState, toggleLoggedIn } from '@/libs/store/slices/authSlice/authSlice';
import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link } from '@mui/material';
import axios from 'axios';


import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import React, { FormEvent, useState } from 'react'
import { LoginFormData } from '../login/page';



export interface LoginFormData {
  username: string;
  password: string;
}




const LoginComponent = () => {
    // const isLoggedInState = useAppSelector(selectLoggedinState)

    const dispatch = useAppDispatch()
  
  
    const [loginCreds, setLoginCreds] = useState<LoginFormData>({ username: '', password: '' });
  
  
  
    const handleInputChange = (e) => {
      const name = e.target.name
      const value = e.target.value
  
      setLoginCreds({ ...loginCreds, [name]: value })
    }
  
  
    const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
  
      console.log(loginCreds.username)
      console.log(loginCreds.password)
  
      try {
        const response = await axios.post(
          "./login/api",
          {
            "username": loginCreds.username,
            "password": loginCreds.password
          }
        )
  
        // alert(response.data.detail)
        // console.log(response.data)
        if (response.data.success) {
          handleLoginSuccess()
          alert(response.data.success)
        }
        else {
  
          alert(response.data.detail)
        }
  
  
  
      }
      catch (err) {
        console.log("yo client fetch err here: ", err.response.data)
        // return err.response.data
      }
  
  
    }
  
    function handleLoginSuccess() {
      //set loggedinstate to true
      dispatch(toggleLoggedIn())
  
      //redirect to landing page
  
    }
  
  
  
    //-------------------form ornaments stuff below
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
    }
  
  
  
    //login form data----------------------------------
  
  
  
  
  
    return (
      <>
  
        <Box
          sx={{
            paddingBottom: '1em',
          }}>
          Already have a account?
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
            onSubmit={handleLoginSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '25%',
              border: 'solid',
              borderRadius: '20px',
              padding: '1.5em',
              gap: '2em',
  
            }}>
            <TextField
              label='Username '
              fullWidth
              margin="normal"
              // autoComplete="email"
              id='username'
              name="username"
              value={loginCreds.username}
              onChange={handleInputChange}
            // color='secondary'
            />
            {/* {loginCreds.username} */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password" color='primary'>Password</InputLabel>
              <OutlinedInput
                // color='secondary'
                id="password"
                name="password"
                value={loginCreds.password}
                onChange={handleInputChange}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon color='secondary' /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              type='submit'
              variant='contained'
              sx={{
                width: '50%'
              }}
            // onClick={() => { handleLoginSubmit() }}
  
            > Login 🔐 </Button>
          </Box>
          <Box>
            New User?
            <Link href='./register' > Register Here</Link>
          </Box>
        </Box>
  
      </>
    )
}

export default LoginComponent