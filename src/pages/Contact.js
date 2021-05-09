import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h3 variants={titleAnimation}>Get in touch.</motion.h3>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h3>Send Us A Message</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h3>Send an email.</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h3>Social Media</h3>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  h3 {
    color: #424242;
    font-size: 2rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    margin: 2rem;
    color: #474747;
  }
`;
export default ContactUs;
