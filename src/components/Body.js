import { Button, Image, VStack } from '@chakra-ui/react';
import albumname from '../assets/album-name-out-now.png'
import lp from '../assets/vinyl.png'

const Body = () => {
    return (
        <VStack alignItems='center'>
            <Image src={albumname} width={{base: '95%', lg: '70%'}}/>
            <Image src={lp} width={{base: '95%', md: '75%', lg: '60%'}}/>
            <a href="https://betterdayswillhauntyou.com/products/no-edits-we-all-end-up-the-same-lp" target="_blank" rel="noopener noreferrer">
                <Button colorScheme='whiteAlpha' size="lg" margin="5%" borderRadius={0}>ORDER NOW</Button>
            </a>
        </VStack>
    );
};

export default Body;