import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Email, Outer } from "./ContactElements";
// import { ContactForm } from "./ContactForm";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMobileAlt } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact" >
      <div className="Container" >
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard" >
          
          <div style={{marginTop:"2rem"}}>
          <Outer>
            <Box1>
            <a  href="mailto:Onkar271998@gmail.com"
            
            rel="noopener noreferrer">
               <HiMail className="iconcontact" />
              
              </a>


           
              Onkar271998@gmail.com
            </Box1>
            <Box1>
              <a  href="tel:7498514749"
            
            rel="noopener noreferrer">
              <FaMobileAlt  className="iconcontact" />
              
              </a>
              +91 7498514749
            </Box1>
            <Box1>
          
             <a href="https://github.com/Onkar271998"><FaGithub   className="iconcontact" /> </a> 
             @Onkar271998
            </Box1>
            <Box1>
          
             <a href="https://www.linkedin.com/in/onkar-deshmukh-6a89a8213/"><FaLinkedin  className="iconcontact"  /> </a> 
             @Onkar Deshmukh
            </Box1>
          </Outer>

          </div>
           
          <div className="contactlogo">
        <img src="https://shivam-sharma-portfolio.vercel.app/static/media/contact-us.e5e30c8ce14b3f8fa8e1.png"/>
      </div>
         
        
        </div>
       
      
        <SocialIcon />
      </div>  
     

     
     
    </ContactWrapper>
  );
}

export default Contact;
