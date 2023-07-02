import React from 'react';
import { useAnimation, motion } from "framer-motion";
import './ProjectCard.css';

function ProjectCard(props){
    const github = () => {
        window.open('https://www.google.com', '_blank');
      };
    return(
        <motion.div 
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
        className='ProjectContainer bg-slate-100 mt-7 '>
            <div className="Container2">
                <div className='model bg-transparent justify-center hidden items-center text-center ' >
                   <p className='circle block w-20 h-20 rounded-full text-center justify-center bg-black cursor-pointer' >
                        <a className='text-red-600 cursor-pointer w-20 h-20 rounded-full' href="www.google.com " > Source Code  </a>
                   </p>
                    
                </div>  
                <img id="Project_name" src={props.image} alt="Project"/>
            </div>
            <span className='text-black text-2xl bg-slate-100'>{props.title}</span>
        </motion.div>
    )
}

export default ProjectCard;