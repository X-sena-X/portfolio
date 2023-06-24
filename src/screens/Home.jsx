import React,{ useRef, useEffect } from 'react';
import './Home.css';
import VerticalTimeline from '../components/TimeLine';
import { motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard';
import tensor from '../assets/TensorFlow_logo.png';
import image2 from '../assets/Project3.png';
import Canvas from './Skills';
import SkillCard from '../components/SkillCard';
import react from '../assets/react_logo.png';
import pytorch from '../assets/pytorch_logo.png';
import apache from "../assets/apacheAirflow_logo.png";
function HomePage(){

    return(
        <>
            <div className="MainContainer ml-40 flex-col ">
               <div className="watermark float-left">
                    <p className='text-xs text-pink-200'>PORTFOLIO@2023</p>
               </div>
                <div className='NameContainer ml-32 mt-64 h-auto'>
                    <p className='text-8xl text-yellow-400 font-bold h-28'>Hi I'am Sena</p>
                    <p className='text-2xl pt-8 text-indigo-700'>Deep Learning maven | Web Developer</p>

                </div>
                <div className='Section2 w-screen flex flex-col justify-items-center h-fit mb-80'>
                    <span className='text-6xl font-bold text-center' >So, who am I?</span>
                    <div className='Section2TextBox text-center mt-5'>
                        <p className='text-base font-medium text-center flex-wrap leading-6'>I am wizard who can bring your ideas to life in modern World. I like to play with data .
                            i am an accomplished machine learning engineer with a strong passion for cutting-edge 
                            technology and continuous learning. through self-directed study and hands-on projects, 
                            I have honed my skills in the realm of machine learning, delving into complex algorithms 
                            and model development. My commitment to staying at the forefront of the field has allowed 
                            me to explore diverse domains, from computer vision to natural language processing. 
                            Leveraging my expertise, i have successfully implemented innovative solutions, delivering 
                            tangible results and contributing to the advancement of intelligent systems. 
                        </p>
                    </div>
                </div>
                < div className='Section3 flex justify-items-center flex-col text-center'>
                    <motion.span className='Section3Heading text-8xl font-bold h-72 '
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView="visible"
                        viewport={{once:true}}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1}
                        }}
                    > My journey</motion.span>
                    <div className="TimeLineContainer mt-24"
                    >
                        <VerticalTimeline />
                    </div>
                    
                </div>
                <div className='Section4 mt-64 flex justify-items-center flex-col text-center'>
                <motion.span className='Section4Heading text-8xl font-bold h-56'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView="visible"
                        viewport={{once:true}}
                        transition={{ duration: 0.8 }}
                        variants={{
                            visible: { opacity: 1, scale: 1}
                        }}
                    > PROJECTS </motion.span>
                    <div className="fade-in-section grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10 grid-flow-row pb-48 " id="MagicWall">
                        <ProjectCard image={image2} title="A Learning Site"/>
                        <ProjectCard image={image2} title="A Learning Site"/>
                        <ProjectCard image={image2} title="A Learning Site"/>
                        <ProjectCard image={image2} title="A Learning Site"/>
                        <ProjectCard image={image2} title="A Learning Site"/>
                        <ProjectCard image={image2} title="A Learning Site"/>
                    </div>
                </div>

                <div className="Section5 h-fit pt-10 text-center">
                    
                    <motion.span className='Section5Heading text-8xl font-bold h-56 text-white'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView="visible"
                        viewport={{once:true}}
                        transition={{ duration: 0.8 }}
                        variants={{
                            visible: { opacity: 1, scale: 1}
                        }}
                    > SKILLS </motion.span>
                    <div className='flex flex-row mt-28'> 
                   
                        <div className="SkillContainer grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
                            <SkillCard image={tensor}/>
                            <SkillCard image={react}/>
                            <SkillCard image={pytorch}/>
                            <SkillCard image={apache}/>
                        </div>
                        <div className="tagCanvas h-max  bg-black">
                            <Canvas/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
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