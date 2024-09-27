import { ChakraProvider, VStack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react';
import Header from './components/Header';
import Socials from './components/SocialsSidebar';
import Body from './components/Body';
import Live from './components/Live';
import Press from './components/Press';
import About from './components/About';
import MobileMenu from './components/MobileMenu';


function App() {
  const [screenSize] = useMediaQuery('(min-width: 768px)');

  return (
    <ChakraProvider>
      <main>
      {screenSize ? <Socials/> : <MobileMenu/>}
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
