

import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";





    function App() {
      return (
        <ChakraProvider>
            <main>
              <Header />
              <MenuSection />
              <Footer />
            </main>
          
        </ChakraProvider>
      );
    }
    
export default App;
