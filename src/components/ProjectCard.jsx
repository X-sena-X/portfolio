import React from 'react';
import { useAnimation, motion } from "framer-motion";
import './ProjectCard.css';

function ProjectCard(){
    return(
        <motion.div className='ProjectContainer bg-slate-500'>
            <div className="Container2">
                <div className='model bg-transparent justify-center hidden items-center'>
                   
                    <a className='circle w-16 h-16 rounded-full text-center bg-red-600 justify-center items-center' href="#">Open</a>
                    
                </div>  
                <img src=""/>
            </div>
            <span className=''></span>
        </motion.div>
    )
}

export default ProjectCard;