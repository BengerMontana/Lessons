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
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
