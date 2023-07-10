import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
    faFacebook, 
    faInstagram, 
    faTiktok, 
    faYoutube, 
   } from "@fortawesome/free-brands-svg-icons";  
import { Box, HStack } from "@chakra-ui/react"; 


<img src="logo.png" alt="little lemon logo"></img>
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
        url: "https://www.youtube.com/",
    },
 ];

 <nav>
    {/* Add social media links based on the `socials` data */}
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
