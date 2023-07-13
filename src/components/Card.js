import { Box, color, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
    
  
  return (
    <Box>
    <HStack style={{borderRadius:"2px", backgroundColor:"white"}}>
      <VStack style={{}} >
      <Image src={imageSrc} ></Image>
      <div style={{padding:"1em"}}>
      <Heading style={{color:"gray", textAlign:"center"} }>{title}</Heading>
      <Text style={{color:"GrayText"}}>{description} <br/>See More <FontAwesomeIcon icon={faArrowRight}/></Text>
      </div>
      </VStack>
    </HStack>
    </Box>
  );
};

export default Card;
