import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionStyled = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const DescriptionStyled = styled(motion.div)`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const ImageStyled = styled(motion.div)`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const HideStyled = styled(motion.div)`
  overflow: hidden;
`;
