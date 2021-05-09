import React from "react";
//Styled
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";
//Framer
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  //slider,
  //sliderContainer,
} from "../animation";
//Images
import home2 from "../img/combina-home1.png";

const OurWork = () => {
  return (
    <>
      {/* <motion.div variants={sliderContainer}>
        <FrameStyled1 variants={slider}></FrameStyled1>
        <FrameStyled2 variants={slider}></FrameStyled2>
        <FrameStyled3 variants={slider}></FrameStyled3>
        <FrameStyled4 variants={slider}></FrameStyled4>
      </motion.div> */}

      <WorkStyled
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <MovieStyled>
          <motion.h2 variants={fade}>The Musician</motion.h2>
          <motion.div className="line"></motion.div>
          <Link to="/our-work/the-musician">
            <HideStyled>
              <motion.img variants={photoAnimation} src={home2} alt="athlete" />
            </HideStyled>
          </Link>
        </MovieStyled>
        <MovieStyled>
          <motion.h2 variants={fade}>The Racer</motion.h2>
          <motion.div className="line"></motion.div>
          <Link to="/our-work/the-racer">
            <HideStyled>
              <HideStyled>
                <motion.img
                  variants={photoAnimation}
                  src={home2}
                  alt="theracer"
                />
              </HideStyled>
            </HideStyled>
          </Link>
        </MovieStyled>
        <MovieStyled>
          <motion.h2 variants={fade}>Good Times</motion.h2>
          <motion.div className="line"></motion.div>
          <Link to="/our-work/good-times">
            <HideStyled>
              <motion.img
                variants={photoAnimation}
                src={home2}
                alt="goodtimes"
              />
            </HideStyled>
          </Link>
        </MovieStyled>
      </WorkStyled>
    </>
  );
};

const WorkStyled = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 0.5rem 0rem;
    font-size: 3rem !important;
  }
`;
const MovieStyled = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.1rem;
    background: #cccccc;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
const HideStyled = styled.div`
  overflow: hidden;
`;

// const FrameStyled1 = styled.div`
//   position: absolute;
//   top: 10%;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 2;
//   background-color: #37c871;
// `;

// const FrameStyled2 = styled(FrameStyled1)`
//   background-color: #47d47f;
// `;
// const FrameStyled3 = styled(FrameStyled1)`
//   background-color: #58e490;
// `;
// const FrameStyled4 = styled(FrameStyled1)`
//   background-color: #89f5b4;
// `;

export default OurWork;
