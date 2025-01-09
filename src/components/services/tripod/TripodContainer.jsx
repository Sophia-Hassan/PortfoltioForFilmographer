import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import {Tripod} from './Tripod';
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
const TripodContainer = () => {
  return (
    <Suspense fallback="loading...">
        <Canvas>
            <Stage environment="studio">
              <Tripod/>

            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera zoom={0.5} makeDefault/>
        </Canvas>
        
    </Suspense>
  )
}

export default TripodContainer