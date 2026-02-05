import {HStack, Box, Avatar, Button} from '@chakra-ui/react';
import {useState} from 'react';
import {ExitIcon} from "../../common/icons/ExitIcon.tsx";
import {NotificationBadge} from "../../common/NotificationBadge.tsx";

export const UserMenu = () => {
    const [showLogout, setShowLogout] = useState(false);

    return (
        <HStack spacing="27px" position="relative">
            <Box position="relative" onClick={() => setShowLogout(!showLogout)}>
                <Avatar src="/images/avatar.png" name="User" width="36px" height="36px"/>
                <NotificationBadge count={2}/>
            </Box>
            <Box
                display={{base: showLogout ? "flex" : "none", md: "flex"}}
                position={{base: "absolute", md: "static"}}
                border={{base: "1px solid", md: "none"}}
                borderColor={{base: "border.default", md: "transparent"}}
                padding={{base: "10px", md: "0"}}
                borderRadius={{base: '10px', md: '0'}}
                bg={{base: "white", md: 'transparent'}}
                top="110%"
                right="0"
            >
                <Button
                    variant="solid"
                    borderRadius="4px"
                    color="darkText"
                    lineHeight="24px"
                    fontWeight="400"
                    border="solid 1px"
                    borderColor="border.default"
                    leftIcon={<ExitIcon width={24} height={24}/>}
                >
                    Выйти
                </Button>
            </Box>
        </HStack>
    );
};
