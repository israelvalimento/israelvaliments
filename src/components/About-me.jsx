import React from "react";

export function Aboutme() {
  return (
    <section className="font-questrial text-left grid grid-cols-3 ">
      <div
        style={{
          "--quantity": "4",
        }}
        className="relative col-start-2 place-self-center"
      >
        <svg className="absolute left-10 top-82" width="100" height="100">
          <path
            style={{ "--position": "1" }}
            className="animate-path"
            d="M90 50 L50 50 L0 0"
            stroke="white"
            fill="none"
            stroke-width="2"
          />
          <circle cx="90" cy="50" r="5" fill="white" />
        </svg>
        <p
          style={{ "--position": "1" }}
          className="animate-text opacity-0 absolute -left-62 top-62 max-w-72"
        >
          I started coding in senior high under the Computer Programming strand.
          I learned the basics and kept building small projects to improve.
          improving
        </p>

        <svg className="absolute -left-10 top-[32rem]" width="100" height="100">
          <path
            style={{ "--position": "2" }}
            className="animate-path"
            d="M90 50 L50 50 L0 30"
            stroke="white"
            fill="none"
            stroke-width="2"
          />

          <circle cx="90" cy="50" r="5" fill="white" />
        </svg>
        <p
          style={{ "--position": "2" }}
          className=" animate-text opacity-0 absolute -left-[21rem] top-[29rem] max-w-72"
        >
          I was hooked on HTML, CSS, and JavaScript because I wanted to animate
          things. Making visuals move and react got me interested to learn more.
        </p>
        {/* img */}
        <img
          className="mt-32 col-start-2"
          src="/icv-art.png"
          alt="myselfportrait-digitalart"
        />
        {/* reverse */}
        <svg
          className="absolute -right-0 top-[22rem] scale-x-[-1]"
          width="100"
          height="100"
        >
          <path
            style={{ "--position": "3" }}
            className="animate-path"
            d="M90 50 L50 50 L0 0"
            stroke="white"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="90" cy="50" r="5" fill="white" />
        </svg>

        <p
          style={{ "--position": "3" }}
          className=" animate-text opacity-0 absolute -right-[20rem] top-[15rem] max-w-72"
        >
          I'm still learning React. I like how it makes building interfaces
          easier and more organized. React helps optimize sites by updating only
          the parts that change. It makes apps faster and more efficient.
        </p>
        <svg
          className="absolute -right-10 top-[32rem] scale-x-[-1]"
          width="100"
          height="100"
        >
          <path
            style={{ "--position": "4" }}
            className="animate-path"
            d="M90 50 L50 50 L0 40"
            stroke="white"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="90" cy="50" r="5" fill="white" />
        </svg>

        <p
          style={{ "--position": "4" }}
          className=" animate-text opacity-0 absolute -right-[22rem] top-[32rem] max-w-72"
        >
          My hobbies are digital art and editing. They improve my sense of
          design, which helps me build better websites.
        </p>
      </div>
    </section>
  );
}
