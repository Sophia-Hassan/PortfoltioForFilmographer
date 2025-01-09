import { TypeAnimation } from "react-type-animation"
import {motion} from 'motion/react'
const Bubble = () => {
  return (
    <div className='bcontainer' animate={{opacity:[0,1]} } transition={{duration:1}}>
        <div className="bubble">
        <TypeAnimation
      sequence={[
        1000,
        'lorem ipsum',
        1000, 
        'lorem ipsum lorem ipsum',
       
      ]}
      wrapper="span"
      speed={50}
    deletionSpeed={70}
      repeat={Infinity}
    />
        </div>
        <img src="../../../public/avatar.png" alt=""className="avatar" />
    </div> 
  )
}

export default Bubble