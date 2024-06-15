

import { theme } from '@/app/theme/theme'
import { InputBase, alpha, styled } from '@mui/material'
import React from 'react'


const Search = styled('div')(({ theme }) => ({

  postition: 'relative',
  marginLeft: 0,
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  //background color and on hover change
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },


  //for small devices 600px
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchInputBase= styled(InputBase)(({theme})=>({
  color:'inherit',
  width:'100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    // backgroundColor:'red',
  },











}))
















const SearchBar = () => {
  return (
    <>
      <Search theme={theme}>
      <SearchInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      
      </Search>
      
    </>
  )
}

export default SearchBar