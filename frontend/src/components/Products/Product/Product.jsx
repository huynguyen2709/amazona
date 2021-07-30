import React from 'react';
import useStyles from './styles';
import { Button, Typography, CardContent, CardMedia, Card } from '@material-ui/core';


function Product({ product }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={6}>
            <CardContent>
                <Typography variant="h6" color="textPrimary" style={{ textAlign: 'center' }}>
                    {product.name}
                </Typography>
            </CardContent>

            <CardMedia
                className={classes.media}
                image={product.imgURL}
            />
            <CardContent style={{ paddingBottom: '4px', width: '250px', height: '60px', overflow: 'scroll' }}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>
            <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', padding: '3px 15px 10px 15px'}}>
                <Typography variant='body1'>{product.price}</Typography>

                <Button className={classes.btnAddToCart} variant="contained">
                    Add to cart
                </Button>
            </div>
        </Card>
    );
}

export default Product;