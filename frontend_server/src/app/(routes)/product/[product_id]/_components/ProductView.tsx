// components/ProductView.tsx
import React, { useState } from "react";
import {
    Container,
    Typography,
    Grid,
    Paper,
    Button,
    TextField,
    Box,
    Rating,
} from "@mui/material";
import Image from "next/image";
import QuantitySelector from "./ui/QuantitySelector";

type ProductProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    discount?: number;
    rating: number;
    reviews: { user: string; comment: string; rating: number }[];
    imageUrl: string;
};

const ProductView: React.FC<ProductProps> = ({
    id,
    name,
    description,
    price,
    discount,
    rating,
    reviews,
    imageUrl,
}) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    const discountedPrice = discount ? price - (price * discount) / 100 : price;

    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Typography variant="h4" component="h1" gutterBottom>
                            {name}
                        </Typography>

                        <Rating value={rating} readOnly />

                        <Typography variant="body1" component="p" gutterBottom>
                            {description}
                        </Typography>

                        {discount && (
                            <Typography
                                variant="body1"
                                component="p"
                                color="orange"
                                gutterBottom
                            >
                                Discount: {discount}%
                            </Typography>
                        )}

                        {discount && (
                            <Typography
                                variant="h5"
                                component="h2"
                                color="yellow"
                                gutterBottom
                            >
                                Rs {discountedPrice.toFixed(2)}
                            </Typography>
                        )}

                        <Typography
                            variant="h6"
                            component="h2"
                            color={discount ? "textSecondary" : "secondary"}
                            sx={{ textDecoration: "line-through" }}
                            gutterBottom
                        >
                            Rs {price.toFixed(2)}
                        </Typography>

                        <Box display="flex" alignItems="center" marginTop={2}>

                            {/* <TextField
                label="Quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                style={{ marginRight: '20px', width: '100px' }}
              /> */}

                            <QuantitySelector
                                quantity={1}
                                onQuantityChange={function (newQuantity: number): void {
                                    throw new Error("Function not implemented.");
                                }}
                            />

                            <Button variant="contained" color="primary" size="large">
                                Add to Cart
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
                <Box marginTop={4}>
                    <Typography variant="h5" component="h3" gutterBottom>
                        Reviews
                    </Typography>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <Paper
                                key={index}
                                style={{ padding: "10px", marginBottom: "10px" }}
                            >
                                <Typography variant="subtitle1" component="p">
                                    {review.user}
                                </Typography>
                                <Rating value={review.rating} readOnly />
                                <Typography variant="body2" component="p">
                                    {review.comment}
                                </Typography>
                            </Paper>
                        ))
                    ) : (
                        <Typography variant="body2" component="p">
                            No reviews yet.
                        </Typography>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductView;
