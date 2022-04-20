import { motion } from "framer-motion";

const Me = () => {
  return (
    <div className="container flex-column">
      <motion.img
        className="profile-pic"
        src="..\imgs\user.png"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: "0vw", opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
      />
      <motion.div
        className="me-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ x: "-100vw", opacity: 0 }}
        >
          Hi, I'm Valerio Pescatori
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ x: "-100vw", opacity: 0 }}
        >
          I'm {new Date().getFullYear() - 1999 - (new Date().getMonth() === 1 && new Date().getDay() < 18 ? 1 : 0)}{" "}
          years old and I got my Bachelor's Degree in Computer Science in March 2022 at Sapienza, University of Rome
          with a graduation mark of 106/110. My academic background started with the frequentation of Luigi Trafelli
          Techincal Institute from which I got my High School diploma in Computer Science with a final grade mark of
          93/100. After that I immediately applied for the Computer Science course at Sapienza, University of Rome.
          During those years I expanded my knowledge about algorithms and data structures; I've been involved in quite
          some projects in which I well-estabilished my knowledge with technologies such as Python and the PyTorch
          framework, Java, Web technologies such as CSS, JavaScript and a few JS frameworks such as Vue.js and React,
          PHP and the CodeIgniter framework, MySQL, HTML as well as C++ and C#.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5 } }}
          exit={{ x: "-100vw", opacity: 0 }}
        >
          I've been passionate about computer science since I was child and that passion has driven my path study. I'm
          always curious about new technologies and constantly wanting to try new things; I would say I'm obsessed with
          trying to understand to a very deep level how programming languages work: that makes me very prone to
          learning. I enjoy cooperating with other people and I'm willing to broaden my expertise on every occasion.
        </motion.p>
        <span style={{ width: "100%" }}></span>
      </motion.div>
    </div>
  );
};

export default Me;
