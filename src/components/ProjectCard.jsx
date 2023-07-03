import React from 'react';
import { useAnimation, motion } from "framer-motion";
import './ProjectCard.css';

function ProjectCard(props){
    function openProject(e){
        e.preventDefault();
        window.open(`${props.link}`, '_blank')
    }
    return(
        <motion.div 
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.5 }}
        className='ProjectContainer bg-slate-100 mt-7 '>
            <div className="Container2">
                <div className='model bg-transparent justify-center hidden items-center text-center ' >
                   <p className='circle block w-20 h-20 rounded-full text-center justify-center bg-black cursor-pointer' >
                        
                        <button type='submit' onClick={openProject} className='text-red-600 cursor-pointer w-20 h-20 rounded-full' >Source code</button>

                   </p>
                    
                </div>  
                <img id="Project_name" src={props.image} alt="Project"/>
            </div>
            <span className='text-black text-2xl bg-slate-100'>{props.title}</span>
        </motion.div>
    )
}

export default ProjectCard;