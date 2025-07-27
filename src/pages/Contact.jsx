import React from "react";
import { Card, SpiralSquares } from "../components/components.js";
import { linkedin, github, gmail } from "../assets/icons/icons.js";
export function Contact({ closeModal }) {
  return (
    <Card
      className={`backface-hidden rotate-y-180 absolute h-full w-full overflow-clip bg-[#3d3d3d] p-3.5 drop-shadow-md`}
    >
      <SpiralSquares></SpiralSquares>
      <section className="grid h-full w-full grid-cols-2 grid-rows-2">
        <section className="row-start-1 flex flex-col gap-5 [&>div]:flex [&>div]:gap-3.5">
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
          className="size-18 mr-14.5 col-start-1 row-start-2 mt-5 place-self-center opacity-80 invert"
          src="/qrcode-icon.svg"
          alt="qrcode-icon"
        />
        <button
          onClick={closeModal}
          className="border-1 col-start-2 row-start-2 cursor-pointer place-self-end px-5 py-1.5 leading-5 hover:bg-[#5252529f]"
        >
          Connect
        </button>
      </section>
    </Card>
  );
}
