// app/loading.tsx
"use client";
import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-8">
      {/* Signature element: a pulsing line that reads like a live ticker */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
          <motion.path
            d="M4 40 L16 40 L22 20 L30 48 L38 12 L46 40 L60 40"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="text-[15px] text-neutral-50 font-roboto tracking-normal">
          Fintracker
          <span className="text-red-600 text-xl font-bold">.</span>
        </div>
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-neutral-500 text-[12px] font-roboto tracking-wide"
        >
          Loading your dashboard
        </motion.p>
      </div>
    </div>
  );
}
