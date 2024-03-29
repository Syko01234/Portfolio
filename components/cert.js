import React from "react"
import Image from "next/image"
import dip from "../public/image/cert.png"

export default function cert() {
  return (
    <div id="cert" className="w-[100%] h-[90vh]">
      <h1 className="text-[40px] ml-[5%]">Certifications</h1>
      <hr className="w-[90%] ml-[5%]"/>
      <div className="flex ml-[1%] mt-[5%]">
        <Image className="mt-[3%]"
        src={dip}
        alt="dip"
        objectFit="contain"
        style={{
            width:"30%",
            height:"30%",
        }}
        />
        <Image 
        src={dip}
        alt="dip"
        objectFit="contain"
        style={{
            width:"50%",
            height:"50%",
        }}
        />
        <Image className="mt-[3%]"
        src={dip}
        alt="dip"
        objectFit="contain"
        style={{
            width:"30%",
            height:"30%",
        }}
        />
      </div>
    </div>
  )
}
