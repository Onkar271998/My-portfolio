import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Email, Outer } from "./ContactElements";
// import { ContactForm } from "./ContactForm";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMobileAlt } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
         

          <Outer>
            <Box1>
              <HiMail />
              <p>Onkar271998@gmail.com</p>
            </Box1>
            <Box1>
              <FaMobileAlt />
              <p>+91 7498514749</p>
            </Box1>
            <Box1>
          
             <a href="https://github.com/Onkar271998"><FaGithub  /> </a> 
             @Onkar271998
            </Box1>
            <Box1>
          
             <a href="https://www.linkedin.com/in/onkar-deshmukh-6a89a8213/"><FaLinkedin  /> </a> 
             @Onkar Deshmukh
            </Box1>
          </Outer>
         
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
