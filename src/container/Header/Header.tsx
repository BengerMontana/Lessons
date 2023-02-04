import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import styles from '../../container/Header/Header.module.scss'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" className={styles.appbar}>
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
                    <Button color="inherit" sx={{ ml: 3 }}>
                        Login
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
