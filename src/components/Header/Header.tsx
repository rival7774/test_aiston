import {HStack} from '@chakra-ui/react'
import {useState} from "react"
import {DesktopNav} from "./components/DesktopNav.tsx";
import {MobileNav} from "./components/MobileNav.tsx";
import {UserMenu} from "./components/UserMenu.tsx";

export const Header = () => {


    const pages = [
        {path: '/requests', label: 'Заявки'},
        {path: '/reports', label: 'Отчеты'},
    ];

    const selectNav = [
        "Справочники",
        "Аптеки",
        "Пользователи",
    ];

    const [currentPage, setCurrentPage] = useState(pages[0]);
    const [currentSelectNav, setCurrentSelectNav] = useState(selectNav[0]);

    return (
        <HStack
            justifyContent="space-between"
            p={['16px', null, '20px 34px 20px 130px']}
            alignItems={['start', null, 'center']}
            minHeight={['auto', null, "86px"]}
            borderBottom="1px solid #D9E1EC"
        >

            <DesktopNav
                currentSelectNav={currentSelectNav}
                setCurrentSelectNav={setCurrentSelectNav}
                pages={pages}
                selectNav={selectNav}
            />

            <MobileNav
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <UserMenu/>
        </HStack>
    )
}
