import './App.css';
import { ChakraProvider } from "@chakra-ui/react";


    function App() {
      return (
        <ChakraProvider>
          <AlertProvider>
            <main>
              <Header />
              <Nav />
              <Main />
              <Contactme />
              <Footer />
            </main>
          </AlertProvider>
        </ChakraProvider>
      );
    }
    
export default App;
