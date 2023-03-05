import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const aboutMeContent = () => {
  const aboutMe = {
    name: "Keith Hetrick",
    title: "Full Stack Developer",
    contact: {
      email: "keithjhetrick@gmail.com",
      github: "https://github.com/keithhetrick",
      wikipedia: "https://en.wikipedia.org/wiki/Keith_Hetrick",
    },
    description:
      "I'm a full stack developer with a passion for creating beautiful, responsive websites and applications. I'm also a Grammy-nominated songwriter & music producer, as well as a certified Permaculture Designer & certificed Master Gardener for the great state of Tennessee. Essentially - I make music, grow food, and code...not necessarily in that order.",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-6xl font-bold text-center text-white">
          name: {aboutMe.name}
        </h2>
        <h2 className="text-4xl font-bold text-center text-white">
          title: {aboutMe.title}
        </h2>
        <h2>
          contact:
          <h4>
            <a
              href={aboutMe.contact.email}
              className="text-2xl font-bold text-center text-white"
            >
              email: {aboutMe.contact.email}
            </a>
          </h4>
          <h4>
            <a
              href={aboutMe.contact.github}
              className="text-2xl font-bold text-center text-white"
            >
              github: {aboutMe.contact.github}
            </a>
          </h4>
          <h4>
            <a
              href={aboutMe.contact.wikipedia}
              className="text-2xl font-bold text-center text-white"
            >
              wikipedia: {aboutMe.contact.wikipedia}
            </a>
          </h4>
        </h2>
        <p className="text-2xl font-bold text-center text-white">
          {aboutMe.description}
        </p>
      </div>
    </div>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in JavaScript and
        TypeScript – with expertise in frameworks like React, Node.js, and
        knowledge in AWS deployments, as well as NoSQL databases. I'm a quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
