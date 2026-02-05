import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        text: {
            primary: "#1C1C1C",
            menu: "#B0B0B0",
            btnLight: "#F1F1F1",
        },
        border: {
            default: "#D9E1EC",
        },
        bg: {
            btnGrey: "#D9E1EC",
        },
        surface: {
            white: "#FFFFFF",
        },
    },

    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
})
