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

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const headerRef = useRef();


 useEffect(() => {
  let prevScrollPos = window.scrollY;


  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerElement = headerRef.current;
    if(!headerElement) {
      return;
    }
    if (prevScrollPos > currentScrollPos) {
      headerElement.style.tranform = "translateY(0)";
    } else {
      headerElement.style.tranform = "translateY(-200px)";
    }
    prevScrollPos = currentScrollPos;
  };

  window.addEventListener("scroll", handleScroll);

  return  () => {
      window.removeEventListener("scroll", handleScroll);
    }
  
 },[])

  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8}>
              <a target="_blank" href={socials[0].url} alt="Email-link">{<FontAwesomeIcon icon = {socials[0].icon} size="2x"/>}</a>
              <a target="_blank" href={socials[1].url} alt="GitHub-link">{<FontAwesomeIcon icon = {socials[1].icon} size="2x"/>}</a>
              <a target="_blank" href={socials[2].url} alt="LinkedIn-link">{<FontAwesomeIcon icon = {socials[2].icon} size="2x"/>}</a>
              <a target="_blank" href={socials[3].url} alt="Medium-link">{<FontAwesomeIcon icon = {socials[3].icon} size="2x"/>}</a>
              <a target="_blank" href={socials[4].url} alt="StackOverFlow-link">{<FontAwesomeIcon icon = {socials[4].icon} size="2x"/>}</a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={handleClick("contactme")}> <section id="#contactme-section">Contact Me</section></a>
              <a href="/#projects" onClick={handleClick("projects")} ><section id="#projects-section">Projects</section></a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
