import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Colors } from './colors';


const roboto=Roboto({
    weight:['300','400','500','700'],
    subsets:['latin'],
    display:'swap'
    
})

export const theme=createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#ff0092',
        },
      },

      
})