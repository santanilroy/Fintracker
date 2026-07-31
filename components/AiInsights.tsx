"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type InsightCard = {
  emoji: string;
  title: string;
  body: string;
  variant: "tip" | "positive" | "warning";
};

const insights: InsightCard[] = [
  {
    emoji: "💡",
    title: "Food spending is up 40%",
    body: "You spent ₹4,800 on food in June vs ₹3,400 in May. Setting a ₹3,500 monthly budget could save you ₹1,300.",
    variant: "tip",
  },
  {
    emoji: "📈",
    title: "Great savings rate this month",
    body: "You saved 37% of your income — well above the recommended 20%. Keep it up.",
    variant: "positive",
  },
  {
    emoji: "⚠️",
    title: "Transport cost spike detected",
    body: "3 cab rides on 12 Jun added ₹840 to your bill. A monthly metro pass at ₹300 could save you ₹540.",
    variant: "warning",
  },
];

const variantStyles = {
  tip: "border-amber-900/40 bg-linear-to-br from-amber-950/30 to-neutral-950/80 hover:border-amber-800/50",
  positive:
    "border-emerald-900/40 bg-linear-to-br from-emerald-950/30 to-neutral-950/80 hover:border-emerald-800/50",
  warning:
    "border-red-900/40 bg-linear-to-br from-red-950/30 to-neutral-950/80 hover:border-red-800/50",
};

const AiInsights = () => {
  return (
    <section
      id="ai-insights"
      className="bg-linear-to-b from-black to-gray-900 px-10 py-40"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-[14px] sm:text-[18px] tracking-widest"
          >
            [ 004 ] — AI Insights
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-neutral-100 text-5xl md:text-6xl font-medium font-roboto mt-8 leading-tight"
          >
            Your personal finance advisor —{" "}
            <span className="text-red-400">built in</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 text-neutral-400 text-lg leading-relaxed max-w-xl"
          >
            Most finance apps just show you numbers. FinTrack goes further — it
            tells you what those numbers mean and what to do next. Gemini AI
            analyses your spending patterns every month and surfaces tips you
            can actually act on.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {insights.map((insight, idx) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-6 transition-colors",
                variantStyles[insight.variant],
              )}
            >
              <div className="relative z-10 flex gap-4">
                <span className="text-2xl shrink-0" aria-hidden>
                  {insight.emoji}
                </span>
                <div>
                  <h3 className="font-roboto font-medium text-neutral-100 text-lg">
                    {insight.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {insight.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiInsights;
