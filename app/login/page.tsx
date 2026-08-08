"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import LoginBtn from "@/components/ui/LoginBtn";

const page = () => {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-neutral-800 w-100 h-138 rounded-xl py-2 px-2 flex flex-col outline-offset-2 outline-2 outline-neutral-700"
        >
          <div className="text-[19px] text-neutral-50  font-roboto tracking-normal bg-neutral-900 w-35 flex justify-center items-center py-2 rounded-md mx-auto">
            Fintracker
            <span className="text-red-600 text-xl font-bold">.</span>
          </div>
          <h3 className="text-white text-[17px] text-center font-roboto tracking-wider mt-5">
            Create your account
          </h3>
          <p className="text-neutral-500 text-[13px] text-center font-roboto tracking-wide">
            Welcome! Please fill in the details to get stated
          </p>

          <form className="flex flex-col gap-4 mt-5 w-80 mx-auto">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-neutral-500 text-[13px] font-roboto tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-neutral-500 text-[13px] font-roboto tracking-wide"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your password"
              />
            </div>
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1 }}
              type="submit"
              className="w-full p-2 rounded-md bg-red-600 text-neutral-50 font-roboto tracking-wider cursor-pointer"
            >
              Continue
            </motion.button>
            <p className="text-neutral-500 text-[13px] text-center font-roboto tracking-wide">
              Already have an account?{" "}
              <Link href="/login" className="text-red-600 font-bold">
                Login
              </Link>
            </p>
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1 }}
              className="w-full p-2 rounded-md bg-neutral-700 text-neutral-50 font-roboto tracking-wider cursor-pointer"
            >
              Continue with Google
            </motion.button>
            <LoginBtn />
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default page;
