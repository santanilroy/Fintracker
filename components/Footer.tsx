"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const link = [
  {
    name: "GitHub",
  },
  {
    name: "Privacy",
  },
  {
    name: "Contact",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-linear-to-b from-gray-900 to-black h-50 px-20 py-40 ">
        <div className="text-neutral-500 w-60 sm:w-180 flex justify-between mx-auto font-roboto">
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="tracking-wide text-[14px] sm:text-[20px]"
          >
            © 2026 FinTrack · Built with Next.js, TypeScript & Gemini AI
          </motion.p>

          <div className="text-neutral-700 flex flex-col gap-3 text-[13px] sm:text-[18px]">
            {link.map((ftlinks, idx) => (
              <motion.span
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
                key={idx}
              >
                <Link href={""}>{ftlinks.name}</Link>
              </motion.span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
