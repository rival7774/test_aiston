import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header.tsx'

export const MainLayout = () => {
    return (
        <Box minH="100vh">
            <Header />
            <Box p={6}>
                <Outlet />
            </Box>
        </Box>
    )
}
