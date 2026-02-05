import {Button} from "@chakra-ui/react"
import type {ButtonProps} from "@chakra-ui/react"

const colorMap = {
    dark: {
        bg: "text.primary",
        color: "text.btnLight",
        border: "1px solid",
        borderColor: "text.btnLight",
        _hover: {bg: "text.btnLight", color: "text.primary", border: "1px solid", borderColor: "text.primary"},
    },
    grey: {
        bg: "text.btnLight",
        color: "text.primary",
        border: "1px solid",
        borderColor: "text.btnLight",
        _hover: {bg: "text.primary", color: "text.btnLight", border: "1px solid", borderColor: "text.primary"},
    },
    light: {
        bg: "surface.white",
        color: "text.primary",
        border: "1px solid",
        borderColor: "text.primary",
        _hover: {bg: "text.primary", color: "surface.white", border: "1px solid", borderColor: "text.primary"},
    },
}

export type ButtonColor = keyof typeof colorMap

export interface ButtonDefaultProps extends ButtonProps {
    colorVariant?: ButtonColor
    text?: string
}

export const ButtonDefault = ({
                                  colorVariant = "dark",
                                  text,
                                  isDisabled,
                                  children,
                                  ...props
                              }: ButtonDefaultProps) => {
    const colors = colorMap[colorVariant]

    return (
        <Button
            {...props}
            bg={colors.bg}
            color={colors.color}
            _hover={!isDisabled ? colors._hover : undefined}
            fontWeight={400}
            borderColor={colors.borderColor}
            border={colors.border}
            fontSize="16px"
            lineHeight="24px"
            padding="8px 17px"
            borderRadius="4px"
            outline="none"
            _focus={{boxShadow: "none", outline: "none",}}
            _focusVisible={{boxShadow: "none", outline: "none",}}
            _disabled={{cursor: "not-allowed", opacity: .5, color: "surface.surface"}}
            isDisabled={isDisabled}
        >
            {text || children}
        </Button>
    )
}
