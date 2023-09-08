/* eslint-disable react-refresh/only-export-components */
import SectionWrapper from "./SectionWrapper";
import { styles } from "../styles";
import { BsLinkedin, BsMailbox2, BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      className="relative w-full mx-auto"
      style={{ marginBottom: "150px", marginTop: "10px" }}
    >
      <div
        className={`${styles.paddingX} relative inset-0 top-[100px] max-w-7-xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
        <div>
          <p className={`${styles.heroSubText} mt-4 mb-3 text-black-100`}>
            <div className="flex grow">
              <a
                href="https://www.linkedin.com/in/arttujantunen"
                className="social"
              >
                <BsLinkedin />
              </a>
              <a href="mailto:arttu.jan@gmail.com" className="social">
                <BsMailbox2 />
              </a>
              <a href="https://github.com/arttujan" className="social">
                <BsGithub />
              </a>
            </div>
          </p>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className="text-tertiary">Arttu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            I am a software developer,
            <br className="sm:block hidden" /> and a scrum master
            <br className="sm:block hidden" /> based in Jyväskylä Finland
          </p>

          <div className={`${styles.heroSectionSubText} mt-4 text-black-100`}>
            <ul className="list-disc">
              <li>
                I enjoy working with people,
                <br className="sm:block hidden" />
                and trying to make the team work as well as possible.
              </li>
              <br className="sm:block hidden" />
              <li>
                Good architectural design,
                <br className="sm:block hidden" />
                code maintainability and transparency
                <br className="sm:block hidden" />
                in the development process are important to me.
              </li>
              <br className="sm:block hidden" />
              <li>
                My hobbies are strength training in the gym,
                <br className="sm:block hidden" />
                cycling, fishing and various activities with my dog.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "about");
