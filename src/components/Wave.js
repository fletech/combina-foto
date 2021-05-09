import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <SvgStyled
      viewBox="0 0 11454 2740"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1.5, pathOffset: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
        d="M23 881.001C6638.5 -2407 4375 5382 11430 1653.5"
        stroke="#222222"
        strokeWidth="30"
      />
    </SvgStyled>
  );
};

const SvgStyled = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
`;
export default Wave;
