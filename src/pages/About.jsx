import React from "react";
import { html, css, js, react, figma } from "../assets/icons/icons.js";
export function About() {
  return (
    <main className="flex flex-col gap-5 items-center justify-center h-dvh">
      <img src="/icv-art.png" alt="myselfportrait-digitalart" />
      <section className="flex gap-5 animate-slide animate-[marquee_5s_linear_infinite]">
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={js} alt="js-icon" />
        <img src={react} alt="react-icon" />
        <img src={figma} alt="figma-icon" />
      </section>
    </main>
  );
}
