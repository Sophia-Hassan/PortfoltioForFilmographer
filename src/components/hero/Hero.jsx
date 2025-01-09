import './hero.css'
import Bubble from './Bubble'
import {motion} from 'motion/react'
import { AmbientLight } from 'three'
import {Canvas} from '@react-three/fiber'
import ThreeDshape from './ThreeDshape'
import { Suspense } from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <motion.h1  initial = {{ X:-100, opacity :0}} animate= {{X:0, opacity :1}}
            transition={{duration:1}}
            className="title">
                Hello, I am <br/> <span>Jenny Doe</span>
            </motion.h1>
            <div className="aboutme">
                <h2>about me</h2>
               <p>Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit.<br/> consequuntur dolorem labore libero magnam quaerat?</p> 
            </div>
            <div >
                <motion.a animate={{y:[0,5], opacity:[0,1,0]}} 
                transition={{repeat:Infinity,
                    duration:1,
                    ease: 'easeInOut'

                }} 
                href='#services'>
                <img src="../../../public/arrow.png" className="scroll"/>
                </motion.a>
            </div>
        </div>
        





        {/*the right section starts here */}
        <div className="right">
            <motion.div className="socials" initial = {{ y:-100, opacity :0}} animate= {{y:0, opacity :1}}
            
            transition={{staggerChildren: 0.2,duration:1}}>
                <a href='instagram.com' >
                <img src="../../../public/instagram.png"/></a>
                <a href='https://www.youtube.com' i>
                <img src="../../../public/youtube.png"/></a>

            </motion.div>

            {/*animated bubble */}
            <Bubble />
            {/*awards, training */}
            <div className="credibility">
                <img src="../../../public/uni.png" alt="" className="uni" />
                diploma in film studies <br/> at university of lorem ipsum
            </div>
            <motion.a href='#contact' className='contactLink' animate={{rotate:[0,360]}} transition={{duration:5, repeat:Infinity, ease:'linear'}}>
                <div className="contact">
                <img src="../../../public/mail.png" alt="" className="pic" />
                </div>

            </motion.a>
            
        </div>
        {/*background image aka the middle */}
         <div className="headshot">
            <Canvas>
                <Suspense fallback="loading...">
                <ThreeDshape/>
                </Suspense>
                
            </Canvas>
            <div className="himg">
            <img src="../../../public/headshot.png" alt="" className="head" />
            </div>

            
         </div>

    </div>
  )
}

export default Hero