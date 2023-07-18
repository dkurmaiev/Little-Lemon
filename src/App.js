
import{ Link, Route, Routes} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuSection";






    function App() {
      return (
       
          
        
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/MenuSection" element={<MenuSection />}></Route>

          </Routes>
          <main>
           <Header />
            <Footer />
          </main>

        </ChakraProvider>
      );
    }
    
export default App;
