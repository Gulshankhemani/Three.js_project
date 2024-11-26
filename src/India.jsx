import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Dodecahedron = () => {
  const dodecahedronRef = useRef();
  const boxRef = useRef();

  // Animation loop for rotation
  useFrame(() => {
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x += 0.01;
      dodecahedronRef.current.rotation.y += 0.01;
    }
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.005; // Box rotation on the Y-axis
    }
  });

  return ( 
    <>
      {/* Dodecahedron */}
      <mesh ref={dodecahedronRef}>
        <dodecahedronGeometry />
        <meshLambertMaterial color="#468585" emissive="#468585" />      
        </mesh>

      <mesh  ref={boxRef}  position={[0, -1.5, 0]}>
      <boxGeometry args={[2, 0.1, 2]} />
      <meshBasicMaterial color="#B4B4B3" />
      
    </mesh>
      
    </>
  );
};

// const Box = () => {
//   return (
//     <mesh position={[0, -1.5, 0]}>
//       <boxGeometry args={[2, 0.1, 2]} />
//       <meshBasicMaterial color="#B4B4B3" />
//     </mesh>
//   );
// };

const Lighting = () => {
  return <spotLight position={[1, 1, 1]} intensity={100} color="#067669" />;
};

const India = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{ fov: 75, position: [0, 0, 5], near: 0.1, far: 1000 }}
        style={{ background: "#F0F0F0" }}
      >
        <Dodecahedron />
        {/* <Box /> */}
        <Lighting />
        <OrbitControls enableDamping={true} />
      </Canvas>
    </div>
  );
};

export default India;
