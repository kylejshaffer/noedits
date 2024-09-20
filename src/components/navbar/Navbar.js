import { HStack, Text } from '@chakra-ui/react';
import './navbar.css'

const navItems = [
    {id: 0, title: "Home", path: "./"},
    {id: 1, title: "Live", path: "./live"},
    {id: 2, title: "Press", path: "./press"},
    {id: 3, title: "News", path: "./news"},
    {id: 4, title: "Contact", path: "./contact"}
]

const NavBar = () => {
    return (
        <HStack align='center' spacing={6}>
            {navItems.map((n) => {
                return (
                    <a href={n.path}>
                        <Text fontSize='lg' color='white'>{n.title}</Text>
                    </a>
                )
            })}
        </HStack>
    )
}

export default NavBar;