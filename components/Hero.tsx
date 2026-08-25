"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen px-10 bg-linear-to-tr from-black to-gray-900"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-40 text-neutral-400 text-[14px] sm:text-[18px] tracking-widest"
        >
          [ 001 ] — Private Wealth Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-red-400 text-7xl sm:text-9xl mt-20 w-60 md:w-280 sm:w-150 font-medium mx-auto sm:mx-0"
        >
          Wealth, redefined for the modern eye.
        </motion.h1>

        <div className="flex flex-col gap-10 sm:flex-row justify-center sm:justify-between items-center mt-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-500 w-60 mx-auto sm:mx-0 sm:w-120"
            >
              Fintracker is the finance dashboard for people who take clarity
              seriously. Every asset, position and signal — composed into a
              single, uncompromising view.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              rotateX: 25,
              rotateY: 10,
              y: -10,
            }}
            whileTap={{ scale: 0.89 }}
            className="bg-neutral-100 text-[10px] text-black sm:text-[14px] w-40 sm:w-60 h-12 tracking-widest rounded-full perspective-1000 transform-style-preserve-3d cursor-pointer z-20"
            style={{
              perspective: 1000,
            }}
          >
            REQUEST ACCESS
          </motion.button>
        </div>

        <div className="border-t border-neutral-800 mt-30 flex flex-col sm:flex-row gap-10 text-neutral-100">
          {stats.map((num, idx) => (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              key={idx}
              className="flex flex-col gap-2 p-10 mx-10"
            >
              <p className="text-[25px] font-roboto font-medium ">
                {num.numbers}
              </p>
              <p className="text-[10px] font-roboto text-neutral-500 uppercase tracking-widest">
                {num.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 ">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="my-30 sm:my-40 text-neutral-400 text-[14px] sm:text-[18px] tracking-widest text-center"
          >
            [ 002 ] — How it Works
          </motion.p>

          {howItWorks.map((howitworks, idx) => (
            <div
              key={idx}
              className="flex my-40 border-t border-neutral-800 py-20 justify-around"
            >
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-neutral-600 text-5xl sm:text-8xl font-medium tracking-wider font-roboto"
              >
                {howitworks.count}
              </motion.p>
              <div className="flex flex-col gap-5 w-60 sm:w-180">
                <motion.h3
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-neutral-100 text-4xl sm:text-6xl font-roboto font-medium"
                >
                  {howitworks.steps}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: -80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-neutral-400"
                >
                  {howitworks.content}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;

type stats = {
  numbers: string;
  title: string;
};

const stats: stats[] = [
  {
    numbers: "$4.2B",
    title: "Assets Tracked",
  },
  {
    numbers: "99.98%",
    title: "Uptime sla",
  },
  {
    numbers: "0.4ms",
    title: "Data latency",
  },
  {
    numbers: "12K+",
    title: "Private members",
  },
];

const howItWorks = [
  {
    count: "01",
    steps: "Create your account",
    content:
      "Sign in with Google — no form to fill, no password to remember. Your personal dashboard is ready instantly.",
  },
  {
    count: "02",
    steps: "Log your transactions",
    content:
      "Add income and expenses with a title, amount, category, and date. Takes under 10 seconds per entry.",
  },
  {
    count: "03",
    steps: "Read your insights",
    content:
      "Your dashboard updates in real time. Check the AI insight card for personalised tips based on your actual spending data.",
  },
];
