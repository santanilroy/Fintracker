"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-2 px-10 sm:py-4 sm:px-20 h-25 bg-black/50 text-neutral-50 fixed w-full z-50 backdrop-blur-3xl"
    >
      <div className="text-[20px] sm:text-3xl font-roboto tracking-normal">
        Fintracker
        <span className="text-red-600 text-2xl sm:text-3xl font-bold">.</span>
      </div>
      <div className="md:flex space-x-22 font-roboto tracking-tight hidden">
        <Link
          className="hover:text-neutral-200 duration-200 text-neutral-300 tracking-widest  text-[14px]"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="hover:text-neutral-200 duration-200 text-neutral-300 tracking-widest  text-[14px]"
          href="#"
        >
          How it works
        </Link>
        <Link
          className="hover:text-neutral-200 duration-200 text-neutral-300 tracking-widest  text-[14px]"
          href="#ai-insights"
        >
          AI insights
        </Link>
      </div>
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="border group border-neutral-700 relative overflow-hidden text-neutral-200 hover:text-neutral-900 py-2 px-4 font-roboto cursor-pointer"
      >
        <span className="bg-red-400 h-full w-full absolute top-80 left-0 group-hover:top-0 duration-300"></span>
        <span className="text-[12] sm:text-[14px] tracking-widest relative z-10">
          GET STARTED FREE
        </span>
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
