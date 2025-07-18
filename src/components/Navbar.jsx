import React from "react";
import { logo } from "../assets/icons/icons.js";
import { Link, useLocation } from "react-router-dom";
export function Navbar({ home, contact }) {
  const location = useLocation();
  return (
    <nav
      className={`font-questrial absolute right-1/4 z-10 my-7 flex w-1/2 items-center justify-center`}
    >
      <section className="border-1 flex w-[70%] items-center justify-start rounded-full border-[#424242] bg-[#3636366c] px-5 py-1 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5),_inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
        <img
          className="size-12 cursor-pointer py-0.5 invert"
          src={logo}
          alt="my-logo"
        />
        <div className="text-md w-1/1 flex items-center justify-center [&>a]:rounded-full [&>a]:px-6 [&>a]:py-2 [&>a]:leading-5 [&>a]:hover:bg-[#7a7a7a6c] [&>button]:rounded-full [&>button]:px-6 [&>button]:py-2 [&>button]:leading-5 [&>button]:hover:bg-[#7a7a7a6c]">
          <button
            onClick={home}
            className={
              location.pathname === "/home"
                ? "bg-[#181818] font-bold text-white"
                : "text-white"
            }
          >
            Home
          </button>

          <button
            onClick={contact}
            className={
              location.pathname === "/contact"
                ? "bg-[#181818] font-bold text-white"
                : "text-white"
            }
          >
            Contact
          </button>

          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "bg-[#181818] font-bold text-white"
                : "text-white"
            }
          >
            About
          </Link>

          <Link
            to="/work"
            className={
              location.pathname === "/work"
                ? "bg-[#181818] font-bold text-white"
                : "text-white"
            }
          >
            Work
          </Link>
        </div>
      </section>
    </nav>
  );
}
