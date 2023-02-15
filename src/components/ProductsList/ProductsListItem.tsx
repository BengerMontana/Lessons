import {
    Card,
    CardContent,
    CardActions,
    Button,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import '../ProductsList/ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    changeColor: string
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        changeColor: 'green',
    }

    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    changeColorClick = () => {
        this.setState((prevState: State) => {
            if (prevState.changeColor === 'green') {
              return {
                changeColor: 'red',
              }
            } else {
              return {
                changeColor: 'green',
              }
            }
        })
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-desc">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <p>
                        Color:{' '}
                        <span className={this.state.changeColor}>
                            {this.state.changeColor}
                        </span>
                    </p>
                    <button onClick={this.changeColorClick}>
                        Change Color
                    </button>
                    <div className="product-price">{price} $</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={this.onDecrementClick}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
