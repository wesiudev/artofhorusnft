"use client";
import { useScroll } from "@react-three/drei";
import Link from "next/link";
import { useRef } from "react";
import useWindowDimensions from "./useWidth";

export default function Page() {
  const gltfPath = "/graces.glb";
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const { width } = useWindowDimensions();
  return <div></div>;
}
