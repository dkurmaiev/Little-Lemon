import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Name = "Little Lemon";
const info1 = "When taste matters";
const info2 = "Here you will find the best Japanese and European cuisine with home delivery!";


const Homepage = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    
    <VStack spacing= {20}>
      <VStack spacing={4}>
         
         <Heading as='h4' size='3xl' noOfLines={1}> {Name} </Heading>
      </VStack>
      <VStack spacing={5}>
        <Heading as='h1' size='md' noOfLines={1}> {info1} </Heading>
        <Heading as='h1' size='md' noOfLines={1}> {info2} </Heading>
        
      </VStack>


    </VStack>

  </FullScreenSection>
);

export default Homepage;
