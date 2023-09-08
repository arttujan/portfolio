/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../../styles";
import SectionWrapper from "../utils/SectionWrapper";
import { educations } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { EducationCard } from "./components/EducationCard";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} text-center`}>my studies</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {educations.map((education, index) => (
          <EducationCard
            key={`project-${index}`}
            index={index}
            {...education}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
