import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import '../../components/Menu/Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <Stack direction="row" spacing={2} className="menu">
            <Button color="inherit">
                <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">
                <Link to="/about">About</Link>
            </Button>
            <Button color="inherit">
                <Link to="/payment">Payment</Link>
            </Button>
            <Button color="inherit">
                <Link to="/shipping">Shipping</Link>
            </Button>
            <Button color="inherit">
                <Link to="/cart">Cart</Link>
            </Button>
        </Stack>
    )
}
export default Menu
