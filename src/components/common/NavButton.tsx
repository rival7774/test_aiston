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
                color="menuText"
                variant="ghost"
                sx={{
                    "&.active": {
                        color: "darkText",
                    },
                }}
                p="0"
                style={style}
                bg="transparent" _hover={{bg: 'transparent'}}>{text}{children}</Button>
    )
}
