import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import '../../assets/style.scss'
import { ThemeProvider } from '@mui/system'
import { useState } from 'react'
import { Routes } from 'react-router-dom'
import CartPage from 'pages/Cart/CartPage'
import About from 'pages/About/About'
import Payment from 'pages/Payment/Payment'
import Shipping from 'pages/Shipping/Shipping'
import { omit } from 'lodash'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, sans-serif',
    },
})

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })
    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Container sx={{ padding: '60px 0' }}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="cart"
                            element={
                                <CartPage
                                    productsInCart={productsInCart}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        />
                        <Route path="about" element={<About />} />
                        <Route path="payment" element={<Payment />} />
                        <Route path="shipping" element={<Shipping />} />
                    </Routes>
                </Container>
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
