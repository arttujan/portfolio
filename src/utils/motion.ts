export const textVariant = (delay: number | undefined) => {
  return {
    hidden: {
      y: 0,
      opacity: 0,
    },
    show: {
      y: -1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
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
  delayChildren?: undefined
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
