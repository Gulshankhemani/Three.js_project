import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import Target from "../Components/Target.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import Rings from "../Components/Rings.jsx";
import HeroCamera from "../Components/HeroCamera.jsx";
import Button from "../Components/Button.jsx";
import {react} from 'react-three-fiber'



const Hero = () => {
const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi I am gulshan <span className="waving-hand">👋</span>
          <p className="hero_tag text-gray_gradient">
            Building Product & Brands
          </p>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 ">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <div>
          <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
              <a href="#contact" className="w-fit">
                <Button name="Lets work together" isBeam containerclass ="sm:w-fit w-full sm:min-w-96" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
