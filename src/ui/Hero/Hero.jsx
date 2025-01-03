"use client";

import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function getWindowSize() {
  //if(window === 'undefined') return;
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function Hero() {
  const [windowSize, setWindowsize] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
      setWindowsize(getWindowSize());
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="pt-4  bg-[#F2F0F1] ">
      <div className="lg:grid lg:grid-cols-2  ">
        <div className=" ">
          <div className="  mx-2 md:pl-[2rem] md:pr-[2rem]   lg:pl-[3rem] lg:pr-[3rem]  xl:pl-[4rem] xl:pr-[4rem]  2xl:pl-[6rem] 2xl:pr-[6rem]  2xl:mt-20">
            <div className="space-y-4 xl:space-y-8 2xl:space-y-10 ">
              <h1 className="font-extrabold text-2xl capitalize  md:text-4xl xl:text-5xl 2xl:text-7xl">
                where style meets convenience
              </h1>

              <p className=" font-light 2xl:font-normal 2xl:text-lg">
                {" "}
                Shop the latest trends in women&rsquo;s, men&rsquo;s and
                kid&rsquo;s clothing at Zeco Shopping, with new arrivals
                dropping every week
              </p>

              <Link href="/newArrivals?page=1" className="mt-2 block  ">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 0.95 }}
                  className="w-full text-center bg-black text-white uppercase font-semibold rounded-xl py-2 2xl:py-3 md:w-[40%]"
                >
                  shop now
                </motion.button>
              </Link>
            </div>

            <div className="  mt-4 xl:mt-6 2xl:mt-10">
              <div className="flex items-center   ">
                <p className="font-bold inline border-r-2 border-solid border-r-stone-600 w-full  text-center">
                  30+{" "}
                  <span className="hidden lg:block font-light 2xl:font-normal ">
                    International brands
                  </span>
                  <span className=" lg:hidden font-light 2xl:font-normal block">
                    Int&apos;l brands
                  </span>
                </p>

                <p className="font-bold inline md:border-r-2 md:border-solid md:border-r-stone-600 w-full text-center">
                  2000+{" "}
                  <span className="hidden lg:block font-light 2xl:font-normal ">
                    High-Quality Products
                  </span>
                  <span className=" lg:hidden font-light 2xl:font-normal block">
                    Products
                  </span>
                </p>

                <p className="font-bold text-center  w-full  hidden md:block ">
                  15,000+{" "}
                  <span className="font-light 2xl:font-normal block">
                    happy customers
                  </span>
                </p>
              </div>

              <p className="font-bold text-center  md:hidden mt-1 md:mt-auto">
                15,000+{" "}
                <span className="font-light 2xl:font-normal block">
                  happy customers
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-10 left-[17rem] top-[4rem] md:left-[20rem] lg:left-[27rem] xl:left-[38rem] md:hidden lg:block">
            <PiStarFourFill
              style={{
                color: "black",
                fill: "black",
                height: "2rem",
                width: "2rem",
              }}
            />
          </div>

          <div className="absolute z-10 left-[2rem] top-[8rem] md:left-[7rem] lg:left-[13rem] xl:left-[20rem] md:hidden lg:block">
            <PiStarFourFill
              style={{
                color: "red",
                fill: "black",
                height: "1.5rem",
                width: "1.5rem",
              }}
            />
          </div>

          <div className=" h-[25rem] md:hidden lg:block lg:h-[20rem] 2xl:h-[32rem] md:mr-8 relative ">
            {windowSize.innerWidth < 1024 ? (
              <Image
                src={"/mobileHeroImage.png"}
                alt="photo of two models with black jeans jackets"
                fill
                quality={100}
              />
            ) : (
              <Image
                src={"/heroImage.png"}
                alt="photo of two models with black jeans jackets"
                fill
                quality={100}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-4 bg-black py-4 items-center px-2 md:justify-evenly">
        <div className=" flex items-center justify-center  rounded-md h-[2rem]">
          <Image
            src={"/versace.png"}
            alt="versace logo"
            height={50}
            width={50}
          />
        </div>

        <div className=" flex items-center justify-center  rounded-md h-[2rem]">
          <Image src={"/zara.png"} alt="zara logo" height={45} width={50} />
        </div>

        <div className=" flex items-center justify-center  rounded-md h-[2rem]">
          <Image src={"/gucci.png"} alt="gucci logo" height={50} width={50} />
        </div>

        <div className=" flex items-center justify-center  rounded-md h-[2rem]">
          <Image src={"/prada.png"} alt="prada logo" height={50} width={50} />
        </div>

        <div className=" flex items-center justify-center  rounded-md h-[2rem]">
          <Image
            src={"/calvinKlein.png"}
            alt="calvinKlein logo"
            height={50}
            width={50}
          />
        </div>
      </div>
    </header>
  );
}
