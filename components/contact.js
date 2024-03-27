import React from "react";
import Image from "next/image";
import Con from "../public/image/cntct.png";

export default function contact() {
  return (
    <div className="w-[100%] h-[90vh]">
      <h1 className="text-[40px] ml-[5%]">Contact Me</h1>
      <hr className="w-[90%] ml-[5%]" />
      <div className="w-[100%] flex mt-[5%]">
        <div className="w-[30%] ml-[25%]">
          <Image
            src={Con}
            alt="Con"
            objectFit="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="w-[50%]">
          <input
            className="bg-[#232732] w-[40%] h-[10%] rounded-[10px] mt-[15%]"
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            className="bg-[#232732] w-[40%] h-[10%] rounded-[10px] mt-[5%]"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            className="bg-[#232732] w-[40%] h-[10%] rounded-[10px] mt-[5%]"
            type="text"
            placeholder="Message"
          />
          <br />
          <button className="mt-[5%] ml-[10%] w-[20%] bg-zinc-600 rounded-[10px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
