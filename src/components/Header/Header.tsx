/* eslint-disable react-refresh/only-export-components */
import SectionWrapper from "../utils/SectionWrapper";
import { styles } from "../../styles";
import { BsLinkedin, BsMailbox2, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <section
      className="relative w-full mx-auto"
      style={{ marginBottom: "150px", marginTop: "10px" }}
    >
      <div
        className={`${styles.paddingX} relative inset-0 top-[100px] max-w-7-xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
        <div>
          <div className={`${styles.heroSubText} mt-4 mb-3 text-black-100`}>
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
          </div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className="text-tertiary">Arttu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-black-100`}>
            I am a Software Enthusiast,
            <br className="sm:block hidden" /> based in Jyväskylä Finland
          </p>

          <div className={`${styles.heroSectionSubText} mt-4 text-black-100`}>
            Apart from my passion for software, I enjoy strength training,
            cycling, fishing, and spending time with my two dogs through various
            activities.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Header, "about");
