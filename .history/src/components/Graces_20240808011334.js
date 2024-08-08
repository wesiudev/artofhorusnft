"use client";

import { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";
import useWindowDimensions from "./useWidth";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
extend(geometry);

export default function Graces() {
  const mainWrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [1, 0.5, 0.7, 0.3, 0.5],
    [0, 0.4, 0.5, 0.7, 1]
  );
  const { width } = useWindowDimensions();
  return (
    <div
      ref={mainWrapper}
      style={{
        position: "relative",
        height: "500vh",
        width: "500px",
        background: "red",
        overflowY: "scroll",
      }}
    >
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
            position: "absolute",
            left: "0px",
            top: "0px",
            zIndex: "0",
            width: "100%",
          }}
          shadows="soft"
          eventPrefix="client"
          camera={{ position: [0, 1.5, 14], fov: width < 1024 ? 40 : 25 }}
        >
          <fog attach="fog" args={["#272727", 0, 20]} />
          <pointLight position={[10, -10, -20]} intensity={10} />
          <pointLight position={[-10, -10, -20]} intensity={10} />
          <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
          <SoftShadows samples={3} />
        </Canvas>
      </div>
    </div>
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
