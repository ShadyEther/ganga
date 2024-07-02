

import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Grid, Link, Rating, Typography } from '@mui/material'
import React from 'react'

const product = {
    name: 'Adidas Sneakers',
    description: 'The best sneakers out there',
    image: '/sneakers.jpg',
    rating: 3,
    price:1499,
    discount:"50%",
};

function ProductList() {
    const products = Array(10).fill(product);


    return (
        <Box margin={'1%'}>
            <Typography variant='h5'>List of Products</Typography>
            <Grid container spacing={2} columns= {{xs:2, sm:3, md:4, lg:5, xl:6}}>
                {products.map((_, index) => (
                    <Grid item xs={1} key={index}>
                        <Card
                        >
                            <CardActionArea href='./product/1'>
                                <CardMedia
                                    component='img'
                                    height='200'
                                    image={product.image}
                                />
                                <CardContent>
                                    <Typography variant='h5'>
                                        {product.name}
                                    </Typography>
                                    <Typography variant='body2'>{product.description}</Typography>
                                    <Typography variant='h6'>Rs {product.price}</Typography>
                                    <Rating value={product.rating} readOnly />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProductList