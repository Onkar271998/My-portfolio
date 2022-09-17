import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../Assets/onkar1.png";
import mern from "../../Assets/mern.png";
import{NavBtn ,NavLink} from "../Header/HeaderElements";

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
  // const style={marginTop:"5px"}
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
    
            <Image
            
              src={profile}
              alt="Onkar-Deshmukh"
            />
           

           
          </HeroRight>
          
        </HeroWrapper>
        
<div style={{marginTop:"-20px"}}>
<NavLink  to="contact" smooth={true} duration={50}>
        <NavBtn>
        <a
            className="btn PrimaryBtn"
         
          >
          <h5 style={{fontSize:"15px"}}>contact me</h5>
          </a>
        
        </NavBtn>
          </NavLink>
       
      
</div>
       
        
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
