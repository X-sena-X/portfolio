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
            <div className='cards'>
                
                <h3>{props.title}</h3>
                <p>{props.para}</p>
            </div>
           
        </motion.div>
    )
}

export default Card;