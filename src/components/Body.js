import { Button, Image, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import albumname from '../assets/album-name-out-now.png'
import lp from '../assets/vinyl.png'

const Body = () => {
    return (
        <FullScreenSection
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
        <VStack alignItems='center'>
            <Image src={albumname} width='70%'/>
            <Image src={lp} width='60%'/>
            <a href="https://betterdayswillhauntyou.com/products/no-edits-we-all-end-up-the-same-lp" target="_blank" rel="noopener noreferrer">
                <Button colorScheme='whiteAlpha' size="lg" margin="5%" borderRadius={0}>ORDER NOW</Button>
            </a>
        </VStack>
        </FullScreenSection>
    );
};

export default Body;