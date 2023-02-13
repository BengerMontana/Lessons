import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import '../../components/Menu/Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <Stack direction="row" spacing={2} className='menu'>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Cart</Button>
        </Stack>
    )
}
export default Menu
