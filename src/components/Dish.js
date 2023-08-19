import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Dish = ({ title, description, imageSrc }) => {
  
  return (
    <VStack
      color= "black"
      backgroundColor= "white"
      cursor="pointer"
      borderRadius="x1"
    >
      <Image src={imageSrc} alt={title} borderRadius="x1" />
      <VStack spacing={4} alignItems="flex-start" p={5} >
        <Heading as="h4" size="md">{title}</Heading>
        <Text color="#black" fontSize="lg">{description}</Text>
        <HStack fontSize="md" fontWeight="medium" >
           <p>Add to Basket</p>
          <FontAwesomeIcon icon={faCartShopping} size="1x" />  
      </HStack>
      </VStack>
      </VStack>
  )
};


export default Dish;
