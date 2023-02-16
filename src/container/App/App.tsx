import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import '../../assets/style.scss'
import { ThemeProvider } from '@mui/system'
import { useState } from 'react'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, sans-serif',
    },
})

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 10,
        totalPrice: 100,
    })
    const cartQuantity = () => {
      setCartData(cartData)
  }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header cartData={cartData}/>
                <Main />
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
