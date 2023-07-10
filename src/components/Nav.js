import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faLinkedin, 
 faMedium, 
 faStackOverflow, 
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react"; 
<nav>
           
              {/* Add links to Main and Contact me and Footer section */}
           <HStack spacing={8}> 
           <ul>
             <li><a href="#Main" onClick={handleClick("Main")}> 
               Main
             </a> </li>
             <li> <a href="#Contact me" onClick={handleClick("contact me")}> 
               Contact Me 
             </a> </li>
             <li><a href="#Footer" onClick={handleClick("Footer")}> 
               Footer
             </a> </li>
             </ul>
           </HStack> 
         </nav> 