

import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";





    function App() {
      return (
        <ChakraProvider>
            <main>
              <Homepage />
              <Header />
              <MenuSection />
              <Footer />
            </main>
          
        </ChakraProvider>
      );
    }
    
export default App;
