import React from "react";

export function SpiralSquares({ className = "" }) {
  const count = 20; // Number of squares
  const squares = Array.from({ length: count });

  return (
    <div
      className={`${className} absolute right-[15rem] top-[-37rem] -z-10 scale-x-[-1] scale-y-[-1] opacity-50`}
    >
      <div className="relative flex h-screen w-full items-center justify-center">
        {squares.map((_, i) => {
          const size = 400 - i * 15; // Decrease size per step
          const rotate = i * 10; // Rotate incrementally
          const offset = -size / 2;

          return (
            <div
              key={i}
              className="absolute border border-[#8a8a8a69]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `rotate(${rotate}deg) translate(${offset}px, ${offset}px)`,
                transformOrigin: "center",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
