"use client";
import Graces from "@/components/Graces";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        background: "",
        overflow: "hidden",
      }}
    >
      <Graces />
    </main>
  );
}
