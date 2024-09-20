import bandname from '../../assets/no-edits-name.png'
import HeaderSocials from './HeaderSocials';
import NavBar from '../navbar/Navbar';
import { VStack, Image } from '@chakra-ui/react';

const Header = (props) => {
    return (
        <VStack>
            <Image src={bandname} boxSize="30%"></Image>
            <NavBar/>
            <HeaderSocials/>
        </VStack>
    );    
}

export default Header;