
import{ Route, Routes} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuSection";
import BookingPage from "./components/BookingPage";
import Main from "./components/Main";
import ConfirmedBooking from './components/ConfirmedBooking';



    function App() {
      return (
       
          
        
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/MenuSection" element={<MenuSection />}></Route>
            <Route path="/BookingPage" element={<BookingPage />}></Route>
            <Route path="/ConfirmedBooking" component={ConfirmedBooking} />

          </Routes>
          <main>
           <Header />
            <Footer />
          </main>

        </ChakraProvider>
      );
    }
    
export default App;
