import { Grid, Typography } from '@mui/material'
import ProductsListItem from '../ProductsList/ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3} mt={5}>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone 11 pro"
                        description="This is Iphone 11 pro"
                        type="phone"
                        capacity="256"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone 12 pro"
                        description="This is Iphone 12 pro"
                        type="phone"
                        capacity="256"
                        price={900}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone 13 pro"
                        description="This is Iphone 13 pro"
                        type="phone"
                        capacity="1024"
                        price={1150}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone X"
                        description="This is Iphone 10"
                        type="phone"
                        capacity="512"
                        price={1500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
