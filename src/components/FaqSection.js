import React from "react";

//Components
import Toggle from "./Toggle";

//Custom hooks
import { useScroll } from "../hooks/useScroll";

//Framer motion
import { motion, AnimateSharedLayout } from "framer-motion";
import { fadeSection } from "../animation";

//Styles
import styled from "styled-components";
import { SectionStyled } from "../style";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FaqStyled
      ref={element}
      variants={fadeSection}
      initial="hidden"
      animate={controls}
    >
      <AnimateSharedLayout>
        <motion.h2 layout>
          Any Questions <span>FAQ</span>
        </motion.h2>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>

        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqStyled>
  );
};

const FaqStyled = styled(SectionStyled)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #4b4a4a;
    height: 0.1rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
    h4 {
      font-size: 1.5rem !important;
      font-weight: lighter;
      transition: font-weight 0.3s ease;
    }
    h4.active {
      font-weight: bold;
      transition: font-weight 0.3s ease-in-out;
    }
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
