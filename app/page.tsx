import Navbar from "@/components/navbar/nav";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'MisinfoMeter',
  
};

export default function Home() {
  return (
    <main className={` `}>
      {/* navbar component */}
      <Navbar />

      {/* Hero section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div>
              <p className="text-4xl heading lg:text-6xl font-semibold text-slate-50">
                Empower Your Fact Checking{" "}
                <span className="text-flow-500 heading ">
                  {" "}
                  with MisinfoMeter{" "}
                </span>
              </p>
              <p className="max-w-xl mt-4 text-lg lg:text-2xl tracking-tight text-gray-400">
                Unveil Truth, Predict Fake News: MisinfoMeter
              </p>
            </div>

            <Link href="/fake" className="mt-10">
              <div className="inline-flex text-xl tracking-wider heading gap-2 items-center justify-center w-full px-6 py-2 text-center text-[#61d3bc] bg-[#103837] group duration-100 hover:scale-105 font-semibold rounded-xl focus:outline-none lg:w-auto relative">
                Prediction
                <span>
                  <FaArrowRight className="transition-transform duration-300 transform translate-x-0 group-hover:translate-x-3" />
                </span>
              </div>
            </Link>
          </div>
          <div className="">
            <Image src="/right_1.png" alt="" width={600} height={600} />
          </div>
        </div>
      </section>

    </main>
  );
}
