import React from 'react';
import { useAnimation, motion } from "framer-motion";
import "./Card.css";


const Card=(props)=>{
    return(
        <motion.div 
            style={{ x: 200 }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{once:true}}
            variants={{
                visible: { opacity: 1, scale: 1,x:0},
                hidden: { opacity: 0, scale: 0,x: 200 }
            }}
        >
            <div className='cards flex flex-col text-center justify-center'>
                
                <p className='flex text-3xl mb-10 text-orange-500'>{props.title}</p>
                <p>{props.para}</p>
            </div>
           
        </motion.div>
    )
}

export default Card;