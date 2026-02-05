import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import {theme} from "./theme.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App/>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
)
