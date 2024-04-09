import Image from "next/image";
import Profile from "../public/image/prorrr.webp";
import Navbar from "./Navbar";
import { IoMdArrowRoundUp } from "react-icons/io";

function Home() {
  return (
    <>
      <div id="header" className="h-[700px]  w-[1500px] m-auto bg-[#000] ">
        <Navbar />
        <div className="flex w-full max-xl:flex-col">
          <div className="mt-[70px] ml-[3%]">
            <h1 className="text-[40px] ml-[2%] max-xl:ml-[0] max-xl:text-center max-xl:w-full w-[20%] max-xl:mt-[5%]">
              Hey
            </h1>
            <h1 className="text-[50px] ml-[2%] w-[21%] max-xl:ml-[0] max-xl:text-center max-xl:w-full font-bold">
              I&apos;m Ganbayr
            </h1>
            <h1 className="text-[40px] ml-[2%] max-xl:ml-[0] max-xl:text-center max-xl:w-full">
              <spam className="text-red-600">IT</spam> Engineer
            </h1>
            <p className="text-[30px] w-[800px] ml-[2%] font-thin max-xl:ml-[0] max-xl:text-center max-xl:w-full max-xl:pl-[10%] max-xl:pr-[10%]">
              Highly motivated student studying software training. Actively seek
              opportunities to apply your skills and knowledge to real projects
              and contribute to industry development.
            </p>
            <div className="flex w-[60%] mt-[2%] ml-[2%] gap-[10px] max-xl:justify-center max-xl:w-full">
              <button
                href="#about"
                className="bg-zinc-600 text-[15px] rounded-[20px] w-[30%] h-[35px]"
              >
                Next to
              </button>
              <button className="bg-zinc-600 text-[15px] rounded-[20px] w-[30%] h-[35px]">
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-[430px] h-[430px] bg-white opacity-0 rounded-[50%]  xl:opacity-100 ml-[100px] mt-[130px] ">
            <Image
              src={Profile}
              alt="pro"
              objectFit="contain"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
      <a href="#header" className="fixed bottom-8 right-8">
        <IoMdArrowRoundUp className="text-[50px]" />
      </a>
    </>
  );
}

export default Home;
