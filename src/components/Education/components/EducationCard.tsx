import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../../utils/motion";

export const EducationCard = ({
  index,
  name,
  description,
  time,
}: {
  index: number;
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
