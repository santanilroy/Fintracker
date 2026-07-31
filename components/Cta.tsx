"use client";

import React from "react";
import { motion } from "motion/react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const Cta = () => {
  return (
    <section id="cta" className="bg-gray-900 px-10 py-40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-linear-to-br from-neutral-950 via-neutral-950 to-red-950/20 px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-64 rounded-full bg-red-500/10 blur-3xl" />

          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative z-10 inline-block rounded-full border border-neutral-700 bg-neutral-900/80 px-4 py-1.5 text-sm tracking-wide text-neutral-300"
          >
            ✦ Free forever — no credit card needed
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative z-10 mt-8 font-roboto text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-100 leading-tight"
          >
            Start tracking your money{" "}
            <span className="text-red-400">today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 mt-6 text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Sign up in seconds and finally know where your money goes.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10 mt-10 inline-flex items-center gap-3 rounded-full bg-neutral-100 px-8 py-4 text-neutral-900 font-roboto text-sm tracking-widest cursor-pointer transition-shadow hover:shadow-lg hover:shadow-red-500/10"
          >
            <GoogleIcon />
            Get started with Google
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
