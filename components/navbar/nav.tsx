import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle";

function Navbar() {
  return (
    <header className="top-0 border-b border-b-gray-800 ">
      <nav className="flex mx-10 justify-between items-center">
        
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        
        <div className="flex items-center space-x-4">
          <Link
            className=" tracking-wide sedan-regular text-slate-400 block  py-2 hover:text-slate-300 cursor-pointer bg-no-repeat w-fit duration-500 ease-in-out bg-[0_100%] [background-size:0_2px] border-b-0 bg-gradient-to-r from-white to-white hover:[background-size:100%_2px]"
            passHref
            href="/"
          >
            Home
          </Link>
          <div className="w-[2px] rounded-full h-8 bg-gray-600" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
