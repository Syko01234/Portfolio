import Image from "next/image";
import Profile from "../public/image/prorrr.webp";
import logo from "../public/image/logo_trial-removebg-preview.png";
import { IoMdArrowRoundUp } from "react-icons/io";

function Home() {
  return (
    <>
      <div id="header" className="w-full h-[90vh] bg-[#000] ">
        <div className="w-[100%] h-[10vh] top-[0] items-center flex fixed border-b z-40 bg-black">
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
        <div className="flex w-full max-xl:flex-col">
          <div className="mt-[8%] ml-[3%]">
            <h1 className="text-[40px] ml-[2%] w-[20%]">Hey</h1>
            <h1 className="text-[50px] ml-[2%] w-[21%] font-bold">
              I&apos;m Ganbayr
            </h1>
            <h1 className="text-[40px] ml-[2%]">
              <spam className="text-red-600">IT</spam> Engineer
            </h1>
            <p className="text-[30px] w-[800px] ml-[2%] font-thin">
              Highly motivated student studying software training. Actively seek
              opportunities to apply your skills and knowledge to real projects
              and contribute to industry development.
            </p>
            <div className="flex w-[60%] mt-[2%] ml-[2%] gap-[10px]">
              <button onClick="#header" className="bg-zinc-600 text-[15px] rounded-[20px] w-[30%] h-[35px]">
                Next to
              </button>
              <button className="bg-zinc-600 text-[15px] rounded-[20px] w-[30%] h-[35px]">
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-[430px] h-[60vh] bg-white rounded-[50%] ml-[100px] mt-[180px]">
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
      <button onClick="#header" className="fixed ml-[95%]">
        <IoMdArrowRoundUp className="text-[50px]" />
      </button>
    </>
  );
}

export default Home;
