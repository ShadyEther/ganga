import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
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
            <Link href={'./user'}>
            
            <Avatar/>
            </Link>
            
            </Box>
        </Toolbar>
    </AppBar>
    
    
    </>
  )
}

export default Header