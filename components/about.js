import React from "react";
import Image from "next/image";
import pto from "../public/image/about.png";

export default function about() {
  return (
    <div
      className="bg-black w-full h-[90vh] flex justify-around items-center"
    >
      <div className="from-white w-[30%] h-[60vh] rounded-[20px]">
        <Image
          src={pto}
          alt="pto"
          objectFit="contain"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="w-[30%]">
        <h1 className="text-[40px] w-[100%]">About</h1>
        <p className="w-[100%] text-[20px] font-thin">
          I am actively seeking opportunities to apply my acquired skills and
          knowledge to real-world projects. My educational background has
          equipped me with a solid foundation in AI and ML algorithms, data
          analysis, and programming languages such as Python. Additionally, I
          have gained practical experience through hands-on projects, both
          independently and collaboratively.
        </p>
      </div>
    </div>
  );
}
