import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faStackOverflow,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const line1 = [
    { logo: faHtml5, text: "HTML" },
    { logo: faCss3, text: "CSS" },
    { logo: faJava, text: "Java" },
    { logo: faJs, text: "JS" },
    { logo: faReact, text: "ReactJS" },
    { logo: faVuejs, text: "Vue JS" },
    { logo: faNodeJs, text: "NodeJS" },
    { logo: faDatabase, text: "Database" },
    { logo: faGithub, text: "Github" },
    { logo: faGit, text: "GIT" },
    { logo: faDocker, text: "Docker" },
    { logo: faAngular, text: "Angular" },
    { logo: faBootstrap, text: "Bootstrap" },
    { logo: faStackOverflow, text: "Stack overflow" },
    { logo: faGithub, text: "Github" },
    { logo: faGit, text: "GIT" },
    { logo: faDocker, text: "Docker" },
    { logo: faAngular, text: "Angular" },
    { logo: faBootstrap, text: "Bootstrap" },
    { logo: faStackOverflow, text: "Stack overflow" },
  ];
  const line2 = [
    { logo: faHtml5, text: "HTML" },
    { logo: faCss3, text: "CSS" },
    { logo: faJava, text: "Java" },
    { logo: faJs, text: "JS" },
    { logo: faReact, text: "ReactJS" },
    { logo: faVuejs, text: "Vue JS" },
    { logo: faNodeJs, text: "NodeJS" },
    { logo: faDatabase, text: "Database" },
    { logo: faGithub, text: "Github" },
    { logo: faGit, text: "GIT" },
    { logo: faDocker, text: "Docker" },
    { logo: faAngular, text: "Angular" },
    { logo: faBootstrap, text: "Bootstrap" },
    { logo: faStackOverflow, text: "Stack overflow" },
    { logo: faGithub, text: "Github" },
    { logo: faGit, text: "GIT" },
    { logo: faDocker, text: "Docker" },
    { logo: faAngular, text: "Angular" },
    { logo: faBootstrap, text: "Bootstrap" },
    { logo: faStackOverflow, text: "Stack overflow" },
  ];

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls1, controls2, inView1, inView2]);

  const containerVarients = {
    hidden: { x: "-100vh" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <div className="flex justify-center gap-6">
        <span className="uppercase font-medium">
          Technologies we're familier with
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <motion.div
          className="flex gap-4 w-screen -translate-x-12"
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={containerVarients}
        >
          {line1.map((data, index) => (
            <div
              className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300"
              key={index}
            >
              <FontAwesomeIcon
                icon={data.logo}
                className="w-12 h-12 md:h-16 md:w-16"
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                {data.text}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 w-screen"
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={containerVarients}
        >
          {line2.map((data, index) => (
            <div
              className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300"
              key={index}
            >
              <FontAwesomeIcon
                icon={data.logo}
                className="w-12 h-12 md:h-16 md:w-16"
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                {data.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
