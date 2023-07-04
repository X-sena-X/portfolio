import React, { useRef, useEffect } from "react";
import "./Home.css";
import VerticalTimeline from "../components/TimeLine";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import tensor from "../assets/TensorFlow_logo.png";
import nodejs from "../assets/Nodejs_logo.png";
import python from '../assets/python_logo.png';
import image2 from "../assets/Project3.png";
import Canvas from "./Skills";
import SkillCard from "../components/SkillCard";
import react from "../assets/react_logo.png";
import pytorch from "../assets/pytorch_logo.png";
import apache from "../assets/apacheAirflow_logo.png";
import ContactForm from "../components/ContactForm";
import image4 from "../assets/FaceDetection.png";
import image5 from "../assets/Sentiment.png";
import image6 from "../assets/recommendation.png";
import { Element } from "react-scroll";
function HomePage() {
  return (
    <>
      <div className="MainContainer ml-40 flex-col prevent-select ">
        <div className="watermark float-left">
          <p className="text-xs text-pink-200">PORTFOLIO@2023</p>
        </div>
        <div id="NameContainer" className=" ml-32 mt-64 h-auto">
          <div className="flex flex-row">
            <div className="image-background">
              <p className="text-8xl font-bold h-28">Hi I'm</p>
            </div>
            <div>
              <p className="text-8xl text-yellow-400 font-bold h-32"> Sena</p>
            </div>
          </div>

          <p className="text-2xl pt-8 text-white">
            Deep Learning maven | Web Developer
          </p>
        </div>
        <Element
          id="Section2"
          className=" w-screen flex flex-col justify-items-center h-fit mb-80 text-white"
        >
          <motion.div
            className="image-background2 flex w-screen h-48 items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className=" text-6xl font-bold text-center h-32">So, who am I?</p>
          </motion.div>

          <div className="Section2TextBox text-center mt-5">
            <p className="text-base font-medium text-center flex-wrap leading-6 text-white">
              I am a wizard who can bring your ideas to life in the modern
              World. I like to play with data. I am an accomplished machine
              learning engineer with a strong passion for cutting-edge
              technology and continuous learning. through self-directed study
              and hands-on projects, I have honed my skills in the realm of
              machine learning, delving into complex algorithms and model
              development. My commitment to staying at the forefront of the
              field has allowed me to explore diverse domains, from computer
              vision to natural language processing. Leveraging my expertise, I
              have successfully implemented innovative solutions, delivering
              tangible results and contributing to the advancement of
              intelligent systems.
            </p>
          </div>
        </Element>
        <Element
          id="Section3"
          className=" flex  flex-col text-center"
        >
          <motion.div
            className="image-background2 flex w-auto h-52 items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="text-7xl font-bold  overflow-hidden">My journey</p>
          </motion.div>
          <div className="TimeLineContainer mt-24">
            <VerticalTimeline />
          </div>
        </Element>
        <Element
          id="Section4"
          className=" mt-64 flex justify-items-center flex-col text-center"
        >
          
          <motion.div
            className="image-background2 flex w-auto h-52 items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="text-8xl font-bold justify-self-center overflow-hidden">PROJECTS</p>
          </motion.div>
          <div
            className="fade-in-section grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10 grid-flow-row pb-48 "
            id="MagicWall"
          >
            <ProjectCard image={image2} title="Ecommerce Website" link="https://www.google.com"/>
            <ProjectCard image={image2} title="Online Learning Platform" link="https://github.com/X-sena-X/crackube"/>
            <ProjectCard image={image2} title="A Learning Site" link="https://www.google.com"/>
            <ProjectCard image={image4} title="Face detection Model" link="https://github.com/X-sena-X/DataScience_Projects-/tree/main/Face%20recognition" />
            <ProjectCard
              image={image5}
              title="NLP model for sentiment analysis"
              link ="https://github.com/X-sena-X/DataScience_Projects-/tree/main/Twitter%20Sentiment%20Analysis"
            />
            <ProjectCard image={image6} title="Netflix Recommendation System" />
          </div>
        </Element>

        <Element id="Section5" className=" h-fit pt-10 text-center">
            <motion.div
                className="image-background2 flex w-auto h-36 items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                visible: { opacity: 1, scale: 1 },
                }}
            >
                <p className="text-9xl font-bold justify-self-center overflow-hidden">SKILL</p>
            </motion.div>
          
          <div className="flex flex-row mt-28 items-center justify-center">
            <div className="SkillContainer grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-2 md:gap-1">
              <SkillCard image={tensor} />
              <SkillCard image={react} />
              <SkillCard image={pytorch} />
              <SkillCard image={apache} />
              <SkillCard image={nodejs} />
              <SkillCard image={python} />
            </div>
          </div>
        </Element>
        <Element
          id="Section6"
          className=" h-fit mt-20 text-center items-center justify-center flex flex-col"
        >
                <motion.div
                className="image-background2 flex w-auto h-52 items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                visible: { opacity: 1, scale: 1 },
                }}
            >
                <p className="text-7xl font-bold justify-self-center overflow-hidden">CONTACT ME</p>
            </motion.div>
          <ContactForm />
        </Element>
      </div>
    </>
  );
}

export default HomePage;

/*grid-flow-row auto-rows-max
<Grid id='MagicWall' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
        <ProjectCard image={image2} title="A Learning Site"/>
    </Grid>
))}
</Grid>
*/
