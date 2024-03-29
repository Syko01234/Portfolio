import Image from "next/image";
import Profile from "../public/image/prorrr.webp";
import logo from "../public/image/logo_trial-removebg-preview.png";

function Home() {
  return (
    <>
      <div className="w-full h-[90vh] bg-[#000] ">
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
          <ul className="flex flex-row-reverse ml-[55%] gap-[50px]">
            <a
              href=""
              className="text-[20px] mr-[5%] relative after:absolute after:content-[&apos;] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%]"
            >
              Contact
            </a>
            <a
              href=""
              className="text-[20px] relative after:absolute after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%] after:content-[&apos;]"
            >
              Projects
            </a>
            <a
              href=""
              className="text-[20px] relative after:absolute after:content-[&apos;] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%]"
            >
              About
            </a>
            <a
              href=""
              className="text-[20px] relative after:absolute after:content-[&apos;] after:bottom-[0] after:left-0 after:w-[0] after:h-[1px] after:duration-300 after:bg-white hover:after:w-[100%]"
            >
              Certificate
            </a>
          </ul>
        </div>
        <div className="w-[30%] h-[65vh] bg-white absolute z-0 bottom-[12%] rounded-[50%] left-[60%]">
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
        <div className="mt-[8%] ml-[3%]">
          <h1 className="text-[40px] ml-[2%] w-[20%]">Hey</h1>
          <h1 className="text-[50px] ml-[2%] w-[21%] font-bold">
            I'm Ganbayr
          </h1>
          <h1 className="text-[40px] ml-[2%]">
            <spam className="text-red-600">IT</spam> Engineer
          </h1>
          <p className="text-[30px] w-[50%] ml-[2%] font-thin">
            Highly motivated student studying software training. Actively seek
            opportunities to apply your skills and knowledge to real projects
            and contribute to industry development.
          </p>
        </div>
        <div className="flex justify-evenly w-[20%] mt-[2%] ml-[3%]">
          <button className="bg-zinc-600 text-[15px] rounded-[20px] w-[36%] h-[35px]">
            Learn More
          </button>
          <button className="bg-zinc-600 text-[15px] rounded-[20px] w-[36%] h-[35px]">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
