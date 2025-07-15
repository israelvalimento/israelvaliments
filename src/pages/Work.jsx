import React from "react";
import { Card } from "../components/components";
import { link } from "../assets/icons/icons";
export function Work() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh">
      <section className="border-1 p-34  grid grid-cols-2 grid-rows-auto gap-5 h-dvh w-dvw ">
        <Card className="col-start-1 row-span-2 border-1 p-5  rounded-2xl">
          <section className="flex flex-col gap-5 h-full">
            <img src="/myri-screenshot.png" alt="myri-screenshot" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              repudiandae, quasi quae consequuntur delectus nulla ullam nobis,
              distinctio quam alias veritatis dolorem iusto itaque eveniet
              totam! Molestias quae modi rem?
            </p>
            <div className="self-end mt-auto flex gap-5">
              <a
                href=""
                target="blank"
                className="flex gap-2 items-center cursor-pointer "
              >
                <p className="text-lg">Visit</p>
                <img className="size-4.5 mt-1" src={link} alt="link-icon" />
              </a>
              <a
                href="https://github.com/israelvalimento/MyRI-Clinic"
                target="blank"
                className="border-1 rounded-full px-5 py-1.5 leading-5 bg-[#80808022] cursor-pointer hover:bg-[#80808035]"
              >
                Github
              </a>
            </div>
          </section>
        </Card>
        <Card className="col-start-2 row-start-1 border-1 rounded-2xl p-5">
          <section className="grid grid-cols-2 grid-rows-2 gap-5 h-full">
            <img
              className="col-start-1 row-start-1 row-span-2 h-full"
              src="/spot-screenshot.png"
              alt="myri-screenshot"
            />
            <p className="col-start-2 row-start-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              repudiandae, quasi quae consequuntur delectus nulla ullam nobis,
              distinctio quam alias veritatis dolorem iusto itaque eveniet
              totam! Molestias quae modi rem?
            </p>
            <div className="col-start-2 row-start-2 place-self-end flex gap-5">
              <a
                href=""
                target="blank"
                className="flex gap-2 items-center cursor-pointer "
              >
                <p className="text-lg">Visit</p>
                <img className="size-4.5 mt-1" src={link} alt="link-icon" />
              </a>
              <a
                href="https://github.com/israelvalimento/MyRI-Clinic"
                target="blank"
                className="border-1 rounded-full px-5 py-1.5 leading-5 bg-[#80808022] cursor-pointer hover:bg-[#80808035]"
              >
                Github
              </a>
            </div>
          </section>
        </Card>
        <Card className="col-start-2 row-start-2 border-1 rounded-2xl p-5">
          <section className="grid grid-cols-2 grid-rows-2 gap-5 h-full">
            <img
              className="col-start-2 row-start-1 row-span-2 h-full"
              src="/myri-screenshot.png"
              alt="myri-screenshot"
            />
            <p className="col-start-1 row-start-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              repudiandae, quasi quae consequuntur delectus nulla ullam nobis,
              distinctio quam alias veritatis dolorem iusto itaque eveniet
              totam! Molestias quae modi rem?
            </p>
            <div className="col-start-1 row-start-2 place-self-end flex gap-5">
              <a
                href=""
                target="blank"
                className="flex gap-2 items-center cursor-pointer "
              >
                <p className="text-lg">Visit</p>
                <img className="size-4.5 mt-1" src={link} alt="link-icon" />
              </a>
              <a
                href="https://github.com/israelvalimento/MyRI-Clinic"
                target="blank"
                className="border-1 rounded-full px-5 py-1.5 leading-5 bg-[#80808022] cursor-pointer hover:bg-[#80808035]"
              >
                Github
              </a>
            </div>
          </section>
        </Card>
      </section>
    </main>
  );
}
