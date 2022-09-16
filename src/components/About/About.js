import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {

  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle" style={{ "margin-top": "-250px" }}>About Me</div>
          <div className="BigCard">
           
            <div className="AboutBio">
             
          
                   <h1>I'am Onkar Deshmukh</h1>
                   <p>Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</p>

                   <a
            href="mailto:Onkar271998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          > 
          <h2 >Drop a mail @ Onkar271998@gmail.com</h2></a>
            </div>
        
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;