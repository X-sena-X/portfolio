import React, { useRef, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import { motion } from "framer-motion";
import Card from "./Card";

const CardList = [
  <Card title="Self Study Phase" para="After Completing my schooling, I started to find the architecture of websites and their built Fascinating.
  At this point, I decided to study how to build a fully flexed website works. Then I got to know about FrontEnd and backend of websites." />,

  <Card title="DIVE INTO MY FIRST WEBPAGE" para="I saw some youtube videos to have a good understanding of it. Then I took a Udemy course called 'Web Development Bootcamp' by an instructor 
    to have a Systematic Study plan. Here I learned HTML, CSS, and Javascript" 
    />,

  <Card title="Time for improvment" para="
  swiftly gravitated towards React, finding its innovative framework truly captivating. Within a mere two months, I diligently immersed myself in mastering React, while concurrently gaining 
  proficiency in Node.js and Express.js for comprehensive full-stack development" />,

  <Card title="Build blocks of ML" para="During this time I saw the potential of ML and DL growth in Technologies and services.
  I started to learn ML algorithm and got so fascinated by there mathematical approach and within a month started learning neural networks." />,

  <Card title="Insight Of future"  para="Got to experience how neural network algorithms CNN and RNN. Then NLP, computer vision." />,



]
/*
const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];
*/
const VerticalTimeline = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      let scrollPosition = window.scrollY + window.innerHeight;
      let elementBottom = element.offsetTop + element.offsetHeight;
      const isInsideDiv = scrollPosition >= element.offsetTop && scrollPosition <= elementBottom;

      if (scrollPosition >= elementBottom && !isInsideDiv) {
        window.scrollTo(calc(scrollPosition - 1000), document.body.scrollHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div id="sena" ref={scrollRef} style={{backgroundColor:'black'}}>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        borderLessCards="true"
        hideControls="true"
        focusActiveItemOnLoad="true"
        title="hwllo"
        activeItemIndex={1}
        backgroundColor="black"
      >
        {CardList}
      </Chrono>
    </div>

  );
};

export default VerticalTimeline;