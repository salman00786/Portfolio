import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import styled from "@emotion/styled";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const img = "https://i.pravatar.cc/150?img=7 ";



// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {


  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"

    >
      
      <Avatar src={img}></Avatar> 
      
        <div>{greeting}</div>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
     
      

    </FullScreenSection>

  )
};


export default LandingSection;
