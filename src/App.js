import { ChakraProvider, VStack } from '@chakra-ui/react'
import Header from './components/Header';
import Socials from './components/SocialsSidebar';
import Body from './components/Body';
import Live from './components/Live';
import Press from './components/Press';
import About from './components/About';


function App() {
  return (
    <ChakraProvider>
      <main>
      <Socials/>
      <VStack>
        <Header/>
        <Body/>
        <Press/>
        <Live/>
        <About/>
      </VStack>
      </main>
    </ChakraProvider>
  );
}

export default App;
