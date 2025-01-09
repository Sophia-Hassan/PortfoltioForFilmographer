
import './portfolio.css';
import { Carousel, Button } from 'react-bootstrap'; // Import Carousel from react-bootstrap

import {motion,useInView} from 'motion/react'
import { useRef, useState } from 'react'



const pcarousel = {
  initial: {x:-100, opacity :0},

       animate:{ x:0, opacity :1},

       transition:{duration:1}
}
const projects = [
  {
    id: 1,
    title: "Music Concert",
    img: '/concert.png', // Correct path
    desc: "A Guitarist Member Of A Band Playing The Electric Guitar",
    link: "https://www.pexels.com/video/a-guitarist-member-of-a-band-playing-the-electric-guitar-3345545/",
  },
  {
    id: 2,
    title: "New Year's Eve",
    img: '/fireworks.png', // Correct path
    desc: "Spectacular New Year's Eve Fireworks Display",
    link: "https://www.pexels.com/video/spectacular-new-year-s-eve-fireworks-display-30037717/",
  },
  {
    id: 3,
    title: "Ocean Life",
    img: '/seals.png', // Correct path
    desc: "Group of seals waiting on a rock in the ocean",
    link: "https://www.pexels.com/video/group-of-seals-waiting-on-a-rock-in-the-ocean-25003454/",
  },
  {
    id: 4,
    title: "Church",
    img: '/Church.png', // Correct path
    desc: "Majestic Church Drone Footage at Night",
    link: "https://www.pexels.com/video/majestic-church-drone-footage-at-night-30053843/",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref,{margin:'-200px'});
  return (
    <motion.div className="portfolio" ref={ref} variants={pcarousel} animate= {isInView?"animate" : "initial"} >
      <Carousel>
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <div className="item">
              
                <img
                  src={project.img}
                  alt={project.title}
                  className="projimg"
                />
              
              <Carousel.Caption>
                <div className="text">
                  <div className="ptitle">{project.title}</div>
                  <div className="desc">{project.desc}</div>
                  <a
                    href={project.link}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>View Project</Button>
                  </a>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default Portfolio;
