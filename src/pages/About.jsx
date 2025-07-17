import React from "react";
import { html, css, js, react, figma } from "../assets/icons/icons.js";
import { Aboutme } from "../components/components.js";
export function About() {
  return (
    <main className="flex flex-col gap-5 items-center justify-center h-dvh w-m-[1200px_90vw]">
      <Aboutme></Aboutme>
      <section
        className="slider flex items-center justify-center w-1/4  "
        style={{
          "--width": "100px",
          "--height": "50px",
          "--quantity": "5",
        }}
      >
        <div className="frontend bg-[#80808019] relative flex items-center justify-center w-1/3 h-18 min-w-[calc(var(--width)_*_var(--quantity))] [&>img]:animate-[marquee_17s_linear_infinite] [&>img]:size-10 [&>img]:absolute [&>img]:left-[100%] ">
          <h1 className="font-questrial text-2xl">Front-end tools</h1>
          <img src={html} style={{ "--position": "1" }} alt="html-icon" />
          <img src={css} style={{ "--position": "2" }} alt="css-icon" />
          <img src={js} style={{ "--position": "3" }} alt="js-icon" />
          <img src={react} style={{ "--position": "4" }} alt="react-icon" />
          <img src={figma} style={{ "--position": "5" }} alt="figma-icon" />
        </div>
      </section>
    </main>
  );
}
