import { Card, CardContent, CardActions, Button } from '@mui/material'
import '../ProductsList/ProductsListItem.scss'

type Props = {}
const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">Iphone 14 pro</div>
                <div className="product-desc">This Iphone 14 pro</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 256 Gb</div>
                <div className="product-price">1200 $</div>
            </CardContent>
            <CardActions className='product-btn-wrap'>
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
