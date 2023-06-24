import React from 'react';
import './SkillCard.css';

export default function SkillCard(props){
    return (
        <>
            <div className="wrapper m-10 h-56">
                <div className="box">
                    <img  src={props.image} alt="Project"/>
                </div>
            </div>
            

        </>
    )
}
