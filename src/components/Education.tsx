import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { educations } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({
  index,
  name,
  description,
  time,
}: {
  index: any;
  name: string;
  description: string;
  time: string;
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white p-5 rounded-2xl sm:w-[360px] w-full"
        style={{
          border: "1px solid black",
          boxShadow: "15px 15px #367055",
          minHeight: "200px",
        }}
      >
        <div
          className="flex flex-col"
          style={{
            minHeight: "150px",
          }}
        >
          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="grow"></div>
          <div className="flex">
            <p className={`text-[14px] text-black`}>{time}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

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
