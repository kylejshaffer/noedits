import { Button, HStack, Image, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import bandPhoto from '../assets/no-edits.JPG'
import albumname from '../assets/album-name.png'
import lp from '../assets/lp.webp'

const Body = () => {
    const playerStyles = {
        border: 0,
        width: "350px",
        height: "470px"
    }
    return (
        <FullScreenSection
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
        <VStack alignItems='center'>
            <Image src={bandPhoto} boxSize="60%" paddingBottom="10%"></Image>
            <Image src={albumname}/>
            <HStack alignItems='center'>
                <Image  height={playerStyles.height} src={lp}/>
                <iframe style={playerStyles} title="album-bandcamp-player" src="https://bandcamp.com/EmbeddedPlayer/album=2210495327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
                    <a href="https://noeditsband.bandcamp.com/album/we-all-end-up-the-same">We All End Up The Same by No Edits</a>
                </iframe>
            </HStack>
            <a href="https://betterdayswillhauntyou.com/products/no-edits-we-all-end-up-the-same-lp" target="_blank" rel="noopener noreferrer">
                <Button colorScheme='whiteAlpha' size="lg" margin="5%" borderRadius={0}>ORDER NOW</Button>
            </a>
        </VStack>
        </FullScreenSection>
    );
};

export default Body;