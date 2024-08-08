"use client";

import { useRef } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";
import useWindowDimensions from "./useWidth";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Image from "next/image";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
extend(geometry);

export default function Graces() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  const { width } = useWindowDimensions();
  return (
    <>
      <div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <Canvas
            style={{
              background: "transparent",
              zIndex: "0",
              width: "100%",
            }}
            shadows="soft"
            eventPrefix="client"
            camera={{ position: [0, 1.5, 14], fov: width < 1024 ? 40 : 25 }}
          >
            <fog attach="fog" args={["#45512f", 0, 20]} />
            <pointLight position={[10, -10, -20]} intensity={10} />
            <pointLight position={[-10, -10, -20]} intensity={10} />
            <Model
              scale={0.3}
              position={[scale, -5.5, 3]}
              rotation={[0, -0.2, 0]}
            />
            <SoftShadows samples={3} />
          </Canvas>
        </div>
      </div>
      <div ref={mainWrapper} style={{ height: "500vh", width: "100vw" }}></div>
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "8px",
          textShadow: "0px 15px 48px #45a62a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/favicon.png"
          width={420}
          height={420}
          alt="logo artofhorusnft website"
          style={{
            marginBottom: "48px",
            width: "220px",
            height: "220px",
            borderRadius: "16px",
          }}
        />
        <h1
          className="h1"
          style={{
            fontStyle: "italic",
            textAlign: "center",
            zIndex: 2,
            color: "#fff",
          }}
        >
          ARTOFHORUSNFT.COM
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              color: "#455729",
              background: "#fff",
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            JUŻ
          </div>
          <div
            style={{
              color: "#455729",
              background: "#fff",
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            WKRÓTCE
          </div>
        </div>
      </div>
    </>
  );
}

function Model({
  donutPosX,
  donutPosY,
  donutPosZ,
  rotateX,
  rotateY,
  rotateZ,
  gltfPath,
  scale,
}) {
  const group = useRef<any>();
  const light = useRef<any>();
  const gltf = useLoader(GLTFLoader, gltfPath);
  return (
    <group ref={group} {...props}>
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      ></spotLight>
    </group>
  );
}
