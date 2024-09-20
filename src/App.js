import { ChakraProvider, VStack } from '@chakra-ui/react'
import Header from './components/header/Header';
import Body from './components/Body';

function App() {
  const style = {
    "background-color": "rgba(0, 0, 0, 0.64)",
  }
  return (
    <ChakraProvider>
      <main style={style}>
        <VStack>
          <Header/>
          <Body/>
        </VStack>
      </main>
    </ChakraProvider>
  );
}

export default App;
