import { useEffect } from 'react';

const skills = [
    { href:"#" , title: "HTML"},
    { href:"#" , title: "CSS"},
    { href:"#" , title: "ReactJS"},
    { href:"#" , title: "TypeScript"},
    { href:"#" , title: "GSAP"},
    { href:"#" , title: "Python"},
    { href:"#" , title: "Express Js"},
    { href:"#" , title: "Git"},
    { href:"#" , title: "JQuery"},
    { href:"#" , title: "SQL"},
    { href:"#" , title: "TensorFlow"},
    { href:"#" , title: "Pytorch"},
    { href:"#" , title: "SckitLearn"},
    { href:"#" , title: "Mathplotlib"},
    { href:"#" , title: "Keras"},
    { href:"#" , title: "Docker"}
];

const Canvas = ({ ...rest }) => {
  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: '#08FDD8',
      outlineThickness: 0.5,
      outlineColour: '#FE0853',
      maxSpeed: 0.08,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
      <div className='container '>
        <canvas
          id='tagcanvas'
          width='820'
          height='700'
          style={{
            maxWidth: '1000px',
            width: '100%',
            zIndex: '99',
            position: 'relative',
            margin: '0 auto',
          }}
          className='to-fade-in fast-anim'
        ></canvas>
        <div id='taglist' style={{ display: 'none' }}>
          <ul>
            {skills.map((skill) => (
              <li key={skill.title}>
                <a href={skill.href}>{skill.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default Canvas;