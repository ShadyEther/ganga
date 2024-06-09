"use client"



import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import ResponsiveAppBar from './ResponsiveAppBar';
import { AppBar, Avatar, Box, Button, Toolbar, Typography, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Search from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





function Header() {
  // const [showHeader, setShowHeader] = useState(true);
  // let lastScrollPos = 0;
  // // const [lastScrollPos, setLastScrollPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollTopPos > lastScrollPos) {
  //       setShowHeader(false);//hide the header when scroling down
  //     }
  //     else {
  //       setShowHeader(true);
  //     }
  //     lastScrollPos = scrollTopPos <= 0 ? 0 : scrollTopPos;//last scrollPos varies from 0 to postiive number never negative
  //     // setLastScrollPos(scrollTopPos <= 0 ? 0 : scrollTopPos);
  //   };

  //   // console.log(window.addEventListener('scroll',handleScroll));
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);




  return (
    <>
      {/* <div className={`${styles.header} ${showHeader ? styles.show : styles.hide}`}>
        <ResponsiveAppBar></ResponsiveAppBar>
      </div> */}
      <AppBar>
        <Toolbar>
          <Typography
            component="a"
            href="./home"
          >
            Ganga
          </Typography>
          <Box
            width={'100%'}
            alignItems={'center'}
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              // background:"red"
              border:'solid',
            
            }}
          >
            {/* <SearchIcon/> */}
            <Box
              width={'50%'}>

              <Search />
            </Box>
            <ShoppingCartIcon />
            <Avatar />



          </Box>

        </Toolbar>

      </AppBar>


    </>

  )
}

export default Header