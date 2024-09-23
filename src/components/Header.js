import bandname from '../assets/no-edits-name.png'
import { Box, VStack, HStack, Image, Text } from '@chakra-ui/react';

const navItems = [
    {id: 0, title: "Home", path: "./"},
    {id: 1, title: "Press", path: "press"},
    {id: 2, title: "Live", path: "live"},
    {id: 3, title: "About", path: "about"},
    {id: 4, title: "Contact", path: "mailto: noeditsband@gmail.com"}
]

const NavBar = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        console.log("From handleClick:");
        console.log(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    
    return (
        <HStack align='center' spacing={6}>
            {navItems.map((n) => {
                return (
                    <a href={"#" + n.path} onClick={handleClick(String(n.path))}>
                        <Text fontSize='lg' color='white'>{n.title}</Text>
                    </a>
                )
            })}
        </HStack>
        
    )
}

const Header = (props) => {
    return (
        <Box
        //position="fixed"
        width="100%"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        >
            <VStack>
                <Image src={bandname} boxSize="35%" paddingTop="2%"></Image>
                <NavBar/>
            </VStack>
        </Box>
    );    
}

export default Header;