import { TorusKnot, MeshDistortMaterial } from "@react-three/drei"

const ThreeDshape = () => {
  return (
    <>

  <mesh>
            <TorusKnot hedargs={[1, 0]} scale={1.5}>
            <MeshDistortMaterial color="#35A29F" attach="material" distort={0.5} speed={2}/>
            </TorusKnot>
            </mesh>
            <ambientLight intensity={2}/>
            <directionalLight position={[1,2,3]}/>
            
    </>

    
    
  )
}

export default ThreeDshape