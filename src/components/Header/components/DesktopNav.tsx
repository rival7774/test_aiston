import {NavButton} from "../../common/NavButton.tsx";
import {Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ArrowReferenceBooks} from "../../common/icons/ArrowReferenceBooks.tsx";
import type {Page} from "../types.ts";

type DesktopNavProps = {
    pages: Page[]
    currentSelectNav: string
    selectNav: string[]
    setCurrentSelectNav: (val: string) => void
}

export const DesktopNav = ({pages, currentSelectNav, selectNav, setCurrentSelectNav}: DesktopNavProps) => {
    return (
        <HStack display={{base: 'none', md: 'flex'}} spacing="14px">
            {pages.map((page) => (
                <NavButton key={page.path} to={page.path} text={page.label}></NavButton>
            ))}
            <Menu>
                <MenuButton as={Button}
                            rightIcon={<Box ml="0" color="darkText" opacity=".7"><ArrowReferenceBooks/></Box>}
                            variant="ghost"
                            color="menuText"
                            p="0 10px"
                            ml="11px"
                            sx={{
                                "& > .chakra-button__icon": {
                                    marginLeft: "4px",
                                },
                            }}>
                    {currentSelectNav}
                </MenuButton>
                <MenuList>
                    {selectNav.map((item) => (
                        <MenuItem key={item} onClick={() => setCurrentSelectNav(item)}>{item}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </HStack>
    )
}
