import { Card, List } from '@mui/material'
import React from 'react'

function CategoryListComponent() {
  return (
    <>
        <List 
            
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                // gap:'1em'
            }}
        >
            <Card
                sx={{
                    width:'100px',
                    height:'100px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'1em'
                    
                }}
                
            >
                Books 
            </Card>
            <Card
                sx={{
                    width:'100px',
                    height:'100px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'1em'
                    
                }}
                
            >
                Mobiles 
            </Card>
            <Card
                sx={{
                    width:'100px',
                    height:'100px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'1em'
                    
                }}
                
            >
                Shoes 
            </Card>
            
        </List>
    </>
  )
}

export default CategoryListComponent