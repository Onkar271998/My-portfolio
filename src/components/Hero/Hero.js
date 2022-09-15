import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../Assets/onkar1.png";
import mern from "../../Assets/mern.png";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h2>Hello, I'am</h2>
            <h1 style={{animationDuration:"2s"}}>Onkar Deshmukh</h1>
            <h5>Full Stack Web Developer</h5>
           
            <img style={{width:"180px" ,height:"50px"}} src={mern}></img>
           
          </HeroLeft>
         
          <HeroRight>
    
            {/* <Image
            
              src={profile}
              alt="Onkar-Deshmukh"
            /> */}
           

           
          </HeroRight>
          
        </HeroWrapper>
        
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://static.thenounproject.com/png/512239-200.png"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
