import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

function Products({ products }) {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Container>
                <Grid container justify="center" spacing={4} alignContent='stretch' >
                    {products.map((product) => (
                        <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Products;