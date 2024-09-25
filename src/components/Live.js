import { Button, Divider, Heading, Table, TableContainer, Tbody, Td, Tr, VStack } from '@chakra-ui/react'

const Live = () => {
    return (
        <VStack width="100%">
            <TableContainer>
                <Heading id="live-section" className="customHeader">Live Dates</Heading>
                <Divider />
                <Table size='lg' variant='unstyled'>
                <Tbody>
                    <Tr>
                        <Td><strong>NOV 2 SAT</strong></Td>
                        <Td>LUCKY LIQUOR</Td>
                        <Td>TUKWILLA, WA</Td>
                        <Td><Button>Tickets</Button></Td>
                    </Tr>
                    <Tr>
                        <Td><strong>DEC 13 THUR</strong></Td>
                        <Td>SUNSET TAVERN</Td>
                        <Td>SEATTLE, WA</Td>
                        <Td><Button>Tickets</Button></Td>
                    </Tr>
                </Tbody>
                </Table>
            </TableContainer>
        </VStack>
    );
}

export default Live;