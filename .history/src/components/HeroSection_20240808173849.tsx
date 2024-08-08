"use client";
import Link from "next/link";
import { useRef } from "react";
import useWindowDimensions from "./useWidth";
import { useScroll, useTransform } from "framer-motion";

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
  return <div></div>;
}
