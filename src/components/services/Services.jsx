import {motion, useInView} from 'motion/react'
import './services.css';
import LaptopContainer from './laptop/LaptopContainer'
import TripodContainer from './tripod/TripodContainer'
import {Canvas} from "@react-three/fiber";

import { useRef, useState } from 'react'


const titleV = {
  initial: {x:-100, opacity :0},

       animate:{ x:0, opacity :1},

       transition:{duration:1}
}

const listV = {
  initial: {x:-100, opacity :0},

  animate:{ x:0, opacity :1},

  transition:{duration:1, staggerChildren: 0.5
  }
}
const Services = () => {
  const skills = [
    {
      id:1,
      title: 'Filming and Capturing Footage',
      desc: ' Operating cameras and other recording equipment',
    }
    ,
    {
      id:2,
      title:'Editing and Post-Production',
      desc: 'Using video editing software to create a polished final product',

    }
    

  ]


  const ref = useRef();
  const [skillId, setSkillId ] = useState(1);
  const isInView = useInView(ref,{margin:'-200px'});
  
  return (
    <div className='services' ref={ref}>
      <div className="side sectionLeft">
        <motion.h1 className="title" variants={titleV} animate= {isInView?"animate" : "initial"}>
          my skills
          </motion.h1>
          <motion.div className="list" variants={listV} animate= {isInView?"animate" : "initial"}
           


           >
          {skills.map((skill => (
            <div className="section" key={skill.id} onClick={() => setSkillId(skill.id)}
            variants={listV} animate= {isInView?"animate" : "initial"}>
              <h2 className="skillTitle"> {skill.title}</h2>
              <p className="desc">{skill.desc}</p>
            </div>
          )))}
          </motion.div>
          



      
      </div>
      <div className="side sectionRight">
        
        {skillId === 1 ? (<LaptopContainer/>) :(<TripodContainer/>) }
       
       
      </div>

    </div>
  )
}

export default Services