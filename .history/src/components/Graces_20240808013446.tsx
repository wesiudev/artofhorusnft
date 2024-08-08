"use client";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import useWindowDimensions from "./useWidth";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Image from "next/image";
extend(geometry);
type motion = MotionValue<number>;
interface ModelProps {
  gltfPath: string;
  rotateX: motion;
  rotateY: motion;
  rotateZ: motion;
  posX: motion;
  posY: motion;
  posZ: motion;
  scale: motion;
}

function Grace({
  posX,
  posY,
  posZ,
  rotateX,
  rotateY,
  rotateZ,
  gltfPath,
  scale,
}: ModelProps) {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return (
    <motion.primitive
      object={gltf.scene}
      scale={scale}
      rotation-x={rotateX}
      duration={300}
      position={[posX, posY, posZ]}
    />
  );
}
export default function Graces() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [14, 12, 10, 8, 6, 4]
  );
  const rotateX = useTransform(scrollYProgress, [0.1, 0.7, 1], [0, 8, 9.3]);
  const rotateY = useTransform(scrollYProgress, [0.4, 0.6], [0, 3]);
  const rotateZ = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 3, 6]);
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
            camera={{ position: [0, 1.5, scale], fov: width < 1024 ? 40 : 25 }}
          >
            <fog attach="fog" args={["#45512f", 0, 20]} />
            <pointLight position={[10, -10, -20]} intensity={10} />
            <pointLight position={[-10, -10, -20]} intensity={10} />
            <Grace
              scale={scale}
              rotateZ={rotateZ}
              rotateY={rotateY}
              rotateX={rotateX}
              gltfPath="/graces.glb"
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
          <div>JUŻ</div>
          <div>WKRÓTCE</div>
        </div>
      </div>
    </>
  );
}

function Model(props) {
  const group = useRef();
  const light = useRef();
  const { nodes } = useGLTF("/graces.glb");
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
  });
  return (
    <group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.3}
        dispose={null}
      >
        <meshLambertMaterial color="white" />
      </mesh>

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
