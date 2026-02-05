import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ArrowMenu} from "../../common/icons/ArrowMenu.tsx";
import type {Page} from "../types.ts";
import {useNavigate} from "react-router-dom";

type MobileNavProps = {
    pages: Page[]
    currentPage: Page
    setCurrentPage: (page: Page) => void
}

export const MobileNav = ({pages, currentPage, setCurrentPage}: MobileNavProps) => {
    const navigate = useNavigate();

    return (
        <Box display={{base: 'block', md: 'none'}}>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ArrowMenu/>}
                    variant="ghost"
                    color="darkText"
                    p="0"
                    fontSize="20px"
                    lineHeight="24px"
                    fontWeight="600"
                    height="auto"
                    border="none"
                    _focus={{outline: 'none', background: 'transparent'}}
                    _hover={{background: 'transparent', border: "none"}}
                    _active={{background: 'transparent'}}
                >
                    {currentPage.label}
                </MenuButton>
                <MenuList mt={0}>
                    {pages.map((page) => (
                        <MenuItem
                            key={page.path}
                            opacity={currentPage.path === page.path ? ".5" : "1"}
                            onClick={() => {
                                setCurrentPage(page);
                                navigate(page.path);
                            }}
                        >
                            {page.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    )
}
