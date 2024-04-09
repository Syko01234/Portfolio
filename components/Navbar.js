import React from "react";
import Image from "next/image";
import logo from '../public/image/logo_trial-removebg-preview.png'

export default function Navbar() {
  return (
    <div className="w-[1500px] m-auto h-[10vh] top-[0] items-center flex fixed mx-auto border-b z-40 bg-black">
      <Image
        className="ml-[5%]"
        src={logo}
        alt="logo"
        objectFit="contain"
        style={{
          width: "8%",
          height: "90%",
        }}
      />
      <nav className="flex flex-row-reverse ml-[55%] gap-[50px] list-none items-center">
        <li className="mr-[5%]">
          <a
            href="#contact"
            className="text-[20px] relative after:absolute after:content-['] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%]"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#cert"
            className="text-[20px] relative after:absolute after:content-['] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%]"
          >
            Certificate
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="text-[20px] relative after:absolute after:content-['] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%] "
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-[20px] relative after:absolute after:content-['] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%]"
          >
            About
          </a>
        </li>
      </nav>
    </div>
  );
}
