import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import '../../container/Header/Header.scss'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import CartHeader from '../../components/CartHeader/CartHeader'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <AppBar position="static" className="appbar">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo />
                        <Menu />
                        <CartHeader productsInCart={productsInCart} />
                        <Button color="inherit" sx={{ ml: 3 }}>
                            Login
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </StyledEngineProvider>
    )
}
export default Header
