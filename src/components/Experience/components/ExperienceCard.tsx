import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface IExperience {
  title: string;
  company_name: string;
  iconBg: string;
  date: string;
  points: string[];
  icon?: undefined | string;
}

export const ExperienceCard = ({ experience }: { experience: IExperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FFFFFF",
        color: "#000000",
        border: "1px solid black",
        boxShadow: "15px 15px #367055",
      }}
      contentArrowStyle={{
        borderRight: "1px solid #000000",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: "1px solid black",
        boxShadow: "none",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[65%] h-[65%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
