import React from "react";
import Image from "next/image";
import pror from "../public/image/Component 9.png";
import kosh from "../public/image/koshish.png";
import kosh1 from "../public/image/koshish 2.png";
import kosh2 from "../public/image/koshish3.png";

export default function Projects() {
  return (
    <div id="project" className="h-[850px]  w-[1500px] m-auto">
      <h1 className="text-[40px] ml-[5%]">Projects & Languages</h1>
      <hr className="w-[90%] ml-[5%]" />
      <div className="w-[80%] h-[80%] ml-[20%] mt-[3%] flex">
        <div className="w-[210px] h-[200px] ml-[10%] mt-[50px]">
          <Image
            src={kosh}
            alt="kosh"
            objectFit="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            src={kosh1}
            alt="kosh"
            objectFit="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            src={kosh2}
            alt="kosh"
            objectFit="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="w-[450px] ml-[5%] mt-[70px] h-[550px]">
          <Image
            src={pror}
            alt="pror"
            objectFit="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
