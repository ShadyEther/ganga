

import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Link, TextField, Typography } from "@mui/material"




const Register = () => {
    return (
        <Container>
            <Box>
                <Avatar />
                <Typography>New User?</Typography>
                <TextField label='Enter Username or Email' />
                <TextField label='Enter Password' />
                <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                />
                <Button
                    type='submit'
                    variant='contained'
                >
                    Register
                </Button>
            </Box>
        </Container>
    )
}

export default Register