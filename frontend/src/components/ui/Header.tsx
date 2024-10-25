import { AppBar, Avatar, Box,  IconButton,  Link,  Menu,  TextField, Toolbar, Typography } from '@mui/material'

import React from 'react'

function Header() {
  return (
    <>
    <AppBar position='sticky'>
        <Toolbar>
            <Box sx={{
                display:'flex',
                // flexDirection:'row',
                justifyContent:'space-between',
                width:'100%',
            }}>

            <Typography>Ganga</Typography>
            <TextField label="What do you want? 🔍"></TextField>
            {/* <Link href={'./user'}>
            
            <Avatar/>
            </Link> */}
            {/* <Link href={'./login'} color='secondary'>Login</Link> */}
            

            <IconButton>

              <Avatar/>

            </IconButton>

            <Menu
              anchorEl={}
            >

            </Menu>
            </Box>
        </Toolbar>
    </AppBar>
    
    
    </>
  )
}

export default Header