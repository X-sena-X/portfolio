import React, { useRef, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import { motion } from "framer-motion";
import Card from "./Card";

const CardList = [
  <Card title="TITLE 2" para="This is the first custom card" />,

  <Card title="TITLE 1" para="This is the second custom Card" />,
  <Card title="TITLE 2" para="This is the first custom card" />,

  <Card title="TITLE 1" para="This is the second custom Card" />,
  <Card title="TITLE 2" para="This is the first custom card" />,

  <Card title="TITLE 1" para="This is the second custom Card" />


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
    <div id="sena" ref={scrollRef}>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        borderLessCards="true"
        hideControls="true"
        focusActiveItemOnLoad="true"
        title=""
        activeItemIndex={1}
      >
        {CardList}
      </Chrono>
    </div>

  );
};

export default VerticalTimeline;