import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar/nav";
import GetNews from "./getnews";

export const metadata: Metadata = {
  title: "predictor",
};

function Page() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex flex-col items-center justify-center mt-3">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl p-4 text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#5ea67d] via-[#197966] to-[#1e9381]">
            Fake News Detection
          </h1>
          <p className="text-slate-500 lg:w-2/3 mx-auto leading-relaxed text-base">
            In the age of misinformation, the quest to discern truth from
            falsehood has become paramount. Through advanced algorithms and
            vigilant fact-checking, fake news detection tools stand as guardians
            of credibility in the digital realm. They sift through the noise,
            empowering users to navigate the vast sea of information with
            clarity and confidence.
          </p>
        </div>
        <GetNews />
      </div>
    </div>
  );
}

export default Page;

