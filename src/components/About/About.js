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
          
              <li
              >Hello! My name is <strong>Onkar Deshmukh </strong>and I enjoy creating things that live on the internet.
              </li>
              <li>
                I'm a passionate Developer, with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.
              </li>
              <li>
                I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.
              </li>
            
            </div>
        
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;