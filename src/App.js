
import{ Route, Routes} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuSection";
import BookingPage from "./components/BookingPage";
import Main from "./components/Main";



    function App() {
      return (
       
          
        
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/MenuSection" element={<MenuSection />}></Route>
            <Route path="/BookingPage" element={<BookingPage />}></Route>

          </Routes>
          <main>
           <Header />
            <Footer />
          </main>

        </ChakraProvider>
      );
    }
    
export default App;
