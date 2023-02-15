import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import '../../assets/style.scss'
import { ThemeProvider } from '@mui/system'

type Props = {}

const theme = createTheme({
    typography: {
      fontFamily: 'Nunito, sans-serif',
    },
})

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
