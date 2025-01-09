import { TypeAnimation } from "react-type-animation"
import {motion} from 'motion/react'
const ContactMe = () => {
  return (
    <div className="ContactMe">
      <TypeAnimation
        sequence={[
          1000,
          "You can also contact me directly on my socials",
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default ContactMe;
