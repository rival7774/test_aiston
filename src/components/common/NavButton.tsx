import {NavLink} from "react-router-dom";
import {Button} from "@chakra-ui/react";

type NavButtonProps = {
    to: string
    children?: React.ReactNode
    style?: React.CSSProperties;
    text: string;
}

export const NavButton = ({to, text, children, style}: NavButtonProps) => {
    return (
        <Button as={NavLink}
                to={to}
                color="text.menu"
                variant="ghost"
                fontWeight="400"
                sx={{
                    "&.active": {
                        color: "text.primary",
                    },
                }}
                p="0"
                style={style}
                bg="transparent" _hover={{bg: 'transparent'}}>{text}{children}</Button>
    )
}
