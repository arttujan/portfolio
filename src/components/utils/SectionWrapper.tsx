import { motion } from "framer-motion";

import { styles } from "../../styles";
import { Container } from "../../utils/motion";

const SectionWrapper = (
  Component: () => JSX.Element,
  idName: string | undefined
) =>
  function Wrapper() {
    return (
      <motion.section
        variants={Container()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
