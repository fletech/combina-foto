import React from "react";

//Framer
import { motion } from "framer-motion";
import { titleAnimation, photoAnimation } from "../animation";

//Assets
import home1 from "../img/combina-home1.png";

//Styles
import {
  SectionStyled,
  DescriptionStyled,
  ImageStyled,
  HideStyled,
} from "../style";

//Components
import Wave from "./Wave";

const AboutUs = () => {
  return (
    <SectionStyled>
      <DescriptionStyled>
        <div className="title">
          <HideStyled>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </HideStyled>

          <HideStyled>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </HideStyled>

          <HideStyled>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </HideStyled>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </DescriptionStyled>

      <ImageStyled>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </ImageStyled>

      <Wave />
    </SectionStyled>
  );
};

export default AboutUs;
