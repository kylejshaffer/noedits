import { Divider, Heading, Text, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const About = () => {
    return (
        <FullScreenSection
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
        <VStack alignItems='left' marginLeft='20%' marginRight='20%'>
            <Heading id="about-section">About</Heading>
            <Divider />
            <Text>
            Newly rechristened Seattle three-piece No Edits are a group who both wear their influences proudly on their sleeve and feel no particular allegiance to them. Formerly known as Fixtures, No Edits play an angular, idiosyncratic form of melodic post-hardcore that fans of the late 90s Dischord and Jade Tree catalogs will find immediately familiar. But even though the DNA of greats like Burning Airlines and These Arms Are Snakes is clearly detectable in the band’s mathy yet tuneful approach, No Edits is uninterested in nostalgia.
<br/><br/>
On their debut LP for Better Days Will Haunt You, We All End Up The Same, No Edits weave together a complex, post-modern synthesis of classic sounds that is free of anachronism, despite all its familiar hallmarks. While the elaborate guitar work and ever-changing time signatures evoke J. Robbins-esque sensibilities, these features are filtered through the distorting lens of the digital age, taking on an off-kilter angst only recognizable to someone intimately familiar with the unique sort of existential malaise summoned up by the present moment in human history. Whether through the propulsive and unpredictable riffing, the powerful vocal performance, or the precise pummeling of the rhythm section, No Edits never sacrifice immediacy for the sake of genre tropes. These elements work in perfect tandem to forge a sound that is as interesting as it is recognizable, heavy as it is melodic, and introspective as it is incensed.
<br/><br/>
Like Chavez, Jawbox, or Fugazi before them, No Edits aren’t content to color inside the lines. We All End Up The Same is the satisfying result of that pioneering spirit, dually challenging and catchy, with each subsequent listen revealing another layer of the record’s multifaceted construction. Best played loud for maximum effect.
            </Text>
        </VStack>
        </FullScreenSection>
    );
}

export default About;