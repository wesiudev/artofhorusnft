"use client";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import useWindowDimensions from "./useWidth";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Model } from "./Graces";
export default function Page() {
  const gltfPath = "/graces.glb";
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const { width } = useWindowDimensions();

  const scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 1.5, 25]);
  const rotateX = useTransform(scrollYProgress, [0.1, 0.7, 1], [0, 8, 9.3]);
  const rotateY = useTransform(scrollYProgress, [0.4, 0.6], [0, 3]);
  const rotateZ = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 3, 6]);
  const donutPosX = useTransform(scrollYProgress, [0.1, 0.3], [0, 0]);
  const donutPosY = useTransform(scrollYProgress, [0.1, 0.7, 1], [1, 0, -8]);
  const donutPosZ = useTransform(scrollYProgress, [0.1, 0.5], [1, 2.8]);
  return (
    <motionDiv.div
      className="absolute left-0 top-0 h-[700vh] w-screen"
      ref={mainWrapper}
    >
      <Suspense fallback={<div>Loading</div>}>
        <Canvas
          style={{
            zIndex: "10",
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            left: "0px",
            height: "100vh",
            width: "100vw",
            background: "#fff",
          }}
        >
          <ambientLight />
          <pointLight position={[3, 3, -5]} />
          <Model
            scale={scale}
            donutPosX={donutPosX}
            donutPosY={donutPosY}
            donutPosZ={donutPosZ}
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
            gltfPath={gltfPath}
          />
          {/* <HeroDonut
            donut2PosX={donut2PosX}
            donut2PosY={donut2PosY}
            donut2PosZ={donut2PosZ}
            gltfPath={gltfPath2}
            scale={donut2Scale}
            rotationX={donut2RotationX}
          /> */}
        </Canvas>
      </Suspense>
    </motionDiv.div>
  );
}
