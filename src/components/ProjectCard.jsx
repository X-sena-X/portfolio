import React from 'react';
import { useAnimation, motion } from "framer-motion";
import './ProjectCard.css';

function ProjectCard(props){
    return(
        <motion.div 
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
        className='ProjectContainer bg-slate-100 mt-7'>
            <div className="Container2">
                <div className='model bg-transparent justify-center hidden items-center text-center '>
                   
                    <a className='circle block w-20 h-20 rounded-full text-center content-center  bg-white ' href="https://github.com/X-sena-X/crackube">Open</a>
                    
                </div>  
                <img src={props.image} alt="Project"/>
            </div>
            <span className='text-black text-2xl bg-slate-100'>{props.title}</span>
        </motion.div>
    )
}

export default ProjectCard;