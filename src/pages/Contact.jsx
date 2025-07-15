import React from "react";
import { Card, SpiralSquares } from "../components/components.js";
import { linkedin, github, gmail } from "../assets/icons/icons.js";
export function Contact() {
  return (
    <main className=" flex items-center justify-center h-dvh">
      <Card className="bg-[#3d3d3d] drop-shadow-md p-3.5 overflow-clip w-1/4 h-1/4 ">
        <SpiralSquares></SpiralSquares>
        <section className="grid grid-cols-2 grid-rows-2 h-full w-full">
          <section className="row-start-1  flex flex-col gap-5 [&>div]:flex [&>div]:gap-3.5">
            <div>
              <img src={linkedin} alt="linkedin-icon" />
              <p>https://linkedin.com/israelvalimento</p>
            </div>
            <div>
              <img src={github} alt="github-icon" />
              <p>https://github.com/israelvalimento</p>
            </div>
            <div>
              <img src={gmail} alt="gmail-icon" /> <p>icvalimento@gmail.com</p>
            </div>
          </section>
          <img
            className="size-18 mt-5 mr-14.5 opacity-80 place-self-center invert col-start-1 row-start-2"
            src="/qrcode-icon.svg"
            alt="qrcode-icon"
          />
          <button className="col-start-2 row-start-2 place-self-end cursor-pointer px-5 hover:bg-[#5252529f] py-1.5 leading-5  border-1">
            Connect
          </button>
        </section>
      </Card>
    </main>
  );
}
