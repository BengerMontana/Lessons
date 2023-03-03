import Stack from '@mui/material/Stack'
import '../../components/Menu/Menu.scss'
import MenuItem from '../Menu/MenuItem'


type Props = {}
const Menu = (props: Props) => {
    return (
        <Stack direction="row" spacing={2} className="menu">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </Stack>
    )
}
export default Menu
