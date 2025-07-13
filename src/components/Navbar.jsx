import React from "react";
import { logo } from "../assets/icons/icons.js";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  return (
    <nav className=" absolute right-1/4 w-1/2 font-questrial z-10 flex items-center my-7 justify-center">
      <section className="border-1  border-[#424242]  bg-[#3636366c] flex items-center px-5 py-1 rounded-full justify-start w-[70%] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5),_inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
        <img
          className="size-12 py-0.5 cursor-pointer invert"
          src={logo}
          alt="my-logo"
        />
        <div
          className="flex items-center justify-center  text-md w-1/1 [&>a]:hover:bg-[#7a7a7a6c] [&>a]:px-6 [&>a]:py-2 [&>a]:leading-5   [&>a]:rounded-full
"
        >
          <Link
            to="/home"
            className={
              location.pathname === "/home"
                ? "text-white font-bold bg-[#181818]"
                : "text-white"
            }
          >
            Home
          </Link>

          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "text-white font-bold"
                : "text-white"
            }
          >
            About
          </Link>

          <Link
            to="/work"
            className={
              location.pathname === "/work"
                ? "text-white font-bold"
                : "text-white"
            }
          >
            Work
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "text-white font-bold"
                : "text-white"
            }
          >
            Contact
          </Link>
        </div>
      </section>
    </nav>
  );
}
