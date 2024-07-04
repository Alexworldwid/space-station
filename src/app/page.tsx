import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bellefair } from "next/font/google";
import { motion } from "framer-motion";


const bellefair = Bellefair({weight: ["400"], subsets: ["hebrew"]})

export const metadata: Metadata = {
  title: "space tourism | Home",
  description: "space tourism website",
};

export default function Home() {
  return (
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full lg:px-40 md:mx-10 md:self-center bg-blue">
        <div className="text-white text-center lg:text-left self-end lg:self-center">
          <h1 className="text-[#D0D6F9] my-5 md:text-xl lg:text-[28px]">SO, YOU WANT TO TRAVEL TO <br /><br /> <span className={`${bellefair.className} text-white font-light text-7xl md:text-8xl lg:text-[144px]`}>SPACE</span></h1>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-[#D0D6F9] md:max-w-md max-w-[300px] text-center lg:text-left text-[15px] md:text-lg lg:text-xl ">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>

        <div className="lg:grid flex lg:items-center pt-20 justify-center lg:justify-self-end self-middle lg:w-1/2">
          <Link href='/destination'>
            <button className={`${bellefair.className}text-black md:h-64 md:w-64 w-36 h-36 rounded-full bg-white btn-hover-shadow`}>
              <p className={`${bellefair.className} md:text-2xl text-lg`}>EXPLORE</p>
            </button>
          </Link> 
        </div>
      </section>
  );
}
