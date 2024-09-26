import { Button, Divider, Heading, Table, TableContainer, Tbody, Td, Tr, VStack } from '@chakra-ui/react'

const Live = () => {
    return (
        <VStack width={['100%', '75%', '50%']} paddingTop={20} paddingBottom={20}>
            <TableContainer>
                <Heading id="live-section" className="customHeader">Live Dates</Heading>
                <Divider />
                <Table variant='unstyled'>
                <Tbody>
                    <Tr>
                        <Td><strong>NOV 2 SAT</strong></Td>
                        <Td>LUCKY LIQUOR</Td>
                        <Td>TUKWILLA, WA</Td>
                        <Td><Button colorScheme='whiteAlpha' borderRadius={0}>Tickets</Button></Td>
                    </Tr>
                    <Tr>
                        <Td><strong>DEC 13 THUR</strong></Td>
                        <Td>SUNSET TAVERN</Td>
                        <Td>SEATTLE, WA</Td>
                        <Td><Button colorScheme='whiteAlpha' borderRadius={0}>Tickets</Button></Td>
                    </Tr>
                </Tbody>
                </Table>
                <Divider />
            </TableContainer>
        </VStack>
    );
}

export default Live;