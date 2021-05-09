export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const fadeSection = {
  hidden: { opacity: 0.3 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const titleAnimation = {
  hidden: {
    y: 300,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const photoAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slider = {
  hidden: {
    left: -1000,
    skew: "45deg",
  },
  show: {
    left: 1000,
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
