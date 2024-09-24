import jammerzine from "../assets/jammerzine.png"
import bahamas from "../assets/bahamas.png"
import gb from "../assets/ghetto-blaster.png"
import aversion from "../assets/aversion.png"
import FullScreenSection from "./FullScreenSection"
import { Card, CardBody, Divider, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

const Press = () => {
    return (
        <FullScreenSection
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
        <VStack alignItems='left'>
             <Heading id="press-section">Press</Heading>
             <Divider />
                <SimpleGrid columns={2} spacing={10}>
                    <Card maxW='lg'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <a href="https://jammerzine.com/no-edits-we-all-end-up-the-same/" target="_blank" rel="noopener noreferrer">
                                <Heading color="#3c3c3c">Jammerzine Interview</Heading>
                                <Image src={jammerzine}></Image>
                                </a>
                                <Text color="#3c3c3c">New directions. New identities. New songs. Restless musicians pursue fresh sounds and new names to brand those sonic explorations. Out of the ashes of Seattle’s Fixtures, No Edits have created an intense, angular batch of songs. Their new album, We All End Up The Same, is a testament to the band’s growth and expanding horizons.</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='lg'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <a href="https://feckingbahamas.com/new-music-no-edits-nail-the-take-with-we-all-end-up-the-same" target="_blank" rel="noopener noreferrer">
                                <Heading color="#3c3c3c">Fecking Bahamas Feature</Heading>
                                <Image src={bahamas}></Image>
                                </a>
                                <Text color="#3c3c3c">Seattle is a place that hardly needs an introduction when it comes to fostering great music, and we’re not just talking about the whole grunge revolution thing. It’s just one of those places that has all the necessary ingredients for a lot of creative people, even if it’s in a begrudging way.</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='lg'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <a href="https://ghettoblastermagazine.com/features/no-edits-share-time-you-kill/" target="_blank" rel="noopener noreferrer">
                                <Heading color="#3c3c3c">Ghettoblaster Premiere</Heading>
                                <Image src={gb}></Image>
                                </a>
                                <Text color="#3c3c3c">Seattle three-piece No Edits share a single from their forthcoming full-length, We All End Up The Same (Better Days Will Haunt You). Listen to “Time You Kill.”</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='lg'>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <a href="https://www.aversionline.com/view/no-edits-time-you-kill-track-premiere-interview" target="_blank" rel="noopener noreferrer">
                                <Heading color="#3c3c3c">Aversionline Premiere</Heading>
                                <Image src={aversion}></Image>
                                </a>
                                <Text color="#3c3c3c">In part citing the Dischord and DeSoto Records discographies as relevant influences, the band herein marks a step forward from their prior work, resulting in a quite impressive display of angular-yet-melodic post-hardcore with a rhythmically interesting emo/indie twist that may well work its way to being one of my favorite releases of 2024.</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </SimpleGrid>
        </VStack>
        </FullScreenSection>
    );
}

export default Press;