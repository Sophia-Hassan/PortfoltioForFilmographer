import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import {Laptop} from './Laptop';
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
const LaptopContainer = () => {
  return (
    <Suspense fallback="loading...">
        <Canvas>
            <Stage environment="studio">
                <Laptop/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera zoom={0.5} makeDefault/>
        </Canvas>
       
    </Suspense>
  )
}

export default LaptopContainer