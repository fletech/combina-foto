import React, { useState } from "react";

//Styled components
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <ToggleStyled
        layout
        className="question"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <motion.div layout className="toggle-title">
          <motion.i
            layout
            className={`fas fa-angle-right${toggle ? " active" : ""}`}
          ></motion.i>
          <motion.h4 layout className={toggle ? "active" : ""}>
            {title}
          </motion.h4>
        </motion.div>
        {toggle ? children : ""}
      </ToggleStyled>

      <motion.div layout className="faq-line"></motion.div>
    </>
  );
};

const ToggleStyled = styled.div`
  .toggle-title {
    display: flex;
    align-items: center;
    i {
      margin-right: 20px;
      transition: all 0.3s ease;
    }
    i.active {
      transform: rotate(90deg);
      color: #42f3b2;
    }
    h4 {
      padding-top: 7px;
    }
  }
`;
export default Toggle;
