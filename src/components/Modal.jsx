import React from "react";
import { SpiralSquares } from "./Spiral";
import { send, close } from "../assets/icons/icons";
export function Modal({ closeModal, modal }) {
  return (
    <main
      className={`${modal} absolute z-20 flex h-screen w-screen items-center justify-center bg-[#050404e8]`}
    >
      <section className="relative z-20 h-[34rem] w-1/4 overflow-clip bg-[#242424]">
        <div className="font-questrial [&>div>input]:border-1 [&>div>textarea]:border-1 flex h-full w-full flex-col items-center justify-center gap-4 p-5 [&>div>input]:rounded-lg [&>div>input]:focus:outline-0 [&>div>textarea]:rounded-lg [&>div>textarea]:focus:outline-0 [&>div]:w-[18rem]">
          <img
            onClick={closeModal}
            className={`size-6.5 absolute right-3.5 top-3.5 cursor-pointer`}
            src={close}
            alt="send-icon"
          />
          <h1 className="mb-7 text-2xl">Work with me</h1>
          <div>
            <label htmlFor="">Name</label>
            <input className="w-full px-3.5 py-1.5" type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input className="w-full px-3.5 py-1.5" type="text" />
          </div>
          <div>
            <label className="place-self-start" htmlFor="">
              Message
            </label>
            <textarea
              className="h-32 w-full resize-none px-3.5 py-1.5"
              name=""
              id=""
            ></textarea>
          </div>

          <div className="relative w-full">
            <button className="border-1 w-full cursor-pointer items-center justify-center rounded-lg px-3.5 py-2.5 hover:bg-[#ffffff1a]">
              Send
            </button>
            <img
              className="absolute right-5 top-3.5 size-5 invert"
              src={send}
              alt="send-icon"
            />
          </div>
        </div>
        <SpiralSquares className="-top-[30px] left-1/2"></SpiralSquares>
      </section>
    </main>
  );
}
