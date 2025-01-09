import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'

const Target = (props) => {
    const targetref =useRef();

    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  return (
  <mesh {...props} ref={targetref}>
    <primitive object={scene} />
  </mesh>  
  )
}

export default Target
