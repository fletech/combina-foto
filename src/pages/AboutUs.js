import React from "react";

//Framer
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

import ScrollTop from "../utils/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};
export default AboutUs;
