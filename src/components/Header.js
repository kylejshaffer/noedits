import bandname from '../assets/no-edits-name.png'
import { Box, VStack, HStack, Image } from '@chakra-ui/react';
import '../index.css';

const navItems = [
    {id: 0, title: "HOME", path: "./"},
    {id: 1, title: "PRESS", path: "press"},
    {id: 2, title: "LIVE", path: "live"},
    {id: 3, title: "ABOUT", path: "about"},
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
        <HStack
        align='center'
        spacing={6}
        >
            {navItems.map((n) => {
                return (
                    <a href={"#" + n.path}
                     className="navLink"
                     onClick={handleClick(String(n.path))}>
                    <p>{n.title}</p>
                    </a>
                )
            })}
        </HStack>
        
    )
}

const Header = () => {
    return (
        <Box
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