export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.0,
        delay: delay,
      },
    },
    hover: {
      y: -10,
      opacity: 1,
      scale: 1.05,
      transition: {
        type: "spring",
        duration: 0.3,
        delay: 0,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const Container = (
  containerChildren?: undefined,
  delayChildren?: undefined,
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: containerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
