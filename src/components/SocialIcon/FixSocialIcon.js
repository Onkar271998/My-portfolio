import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: 
    #3f6ff5;
    transition: 0.2s ease-in;
    &:hover {
      color:  rgb(43, 49, 57);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/onkar-deshmukh-6a89a8213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/Onkar271998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="mailto:Onkar271998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
        </li>
        <li className="item">
          <a
            href="tel:7498514749"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhoneCall />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
