import  {React, useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import{ Link } from "react-router-dom"
import { Box, HStack } from "@chakra-ui/react"; 
import { 
    faFacebook, 
    faInstagram, 
    faTiktok, 
    faYoutube, 
   } from "@fortawesome/free-brands-svg-icons";  
   import logo from '../images/LittleLemonLogo.jpg';
   

   
 



 const social = [
    {
        icon: faFacebook,
        url: "https://www.facebook.com",
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com",
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com",
    },
    {
        icon:faYoutube,
        url: "https://www.youtube.com",
    },
 ];
 const Header = () => { 
    
    const headerRef = useRef(null); 
    
    useEffect(() => { 
      let prevScrollPos = window.scrollY; 
    
      const handleScroll = () => { 
        const currentScrollPos = window.scrollY; 
        const headerElement = headerRef.current; 
        if (!headerElement) { 
          return; 
        } 
        if (prevScrollPos > currentScrollPos) { 
          headerElement.style.transform = "translateY(0)"; 
        } else { 
          headerElement.style.transform = "translateY(-200px)"; 
        } 
        prevScrollPos = currentScrollPos; 
      } 
      window.addEventListener('scroll', handleScroll) 
    
      return () => { 
        window.removeEventListener('scroll', handleScroll) 
      } 
    }, []); 
    
    return ( 
      <Box 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        translateY={0} 
        transitionProperty="transform" 
        transitionDuration=".3s" 
        transitionTimingFunction="ease-in-out" 
        backgroundColor= "black" 
        ref={headerRef} 
      > 
        <Box color="white" maxWidth="1280px" margin="0 auto"> 
          <HStack 
            px={16} 
            py={4} 
            justifyContent="space-between" 
            alignItems="center" 
          > 
    <img src={logo} alt="Little Lemon Logo" />
 <nav>
    {/* Add social media links based on the `social` data */}
    <HStack spacing={8}>
        {social.map(({ icon, url})=>(
            <a
                key={url}
                href={url}
                target="_blank" 
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={icon} size="2x" key={url} />  
            </a>

        ))}
    </HStack>
 </nav>
 <><nav>
          
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="MenuSection">Menu</Link>
          </li>
          <li>
            <Link to="BookingPage">Booking a table</Link>
          </li>
         
        
      </nav></>

       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 
 export default Header;
