"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  BarChart3,
  CalendarRange,
  Shield,
  Sparkles,
  Tags,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureItem = {
  card: string;
  title: string;
  content: string;
  icon: LucideIcon;
  className?: string;
};

const features: FeatureItem[] = [
  {
    card: "01",
    title: "Live Dashboard",
    content:
      "Track your balance, income, and expenses in real time. Every transaction you add instantly updates your numbers — no refresh, no delay.",
    icon: Activity,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    card: "02",
    title: "Monthly Charts",
    content:
      "Bar and pie charts show exactly where your money went — broken down by month and category.",
    icon: BarChart3,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    card: "03",
    title: "Category Tagging",
    content:
      "Tag every transaction: food, rent, transport, salary, and more. Filter and drill into any category.",
    icon: Tags,
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    card: "04",
    title: "Secure Google Login",
    content:
      "Sign in with Google in one click. No passwords, no forms. Your data stays private.",
    icon: Shield,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    card: "05",
    title: "Date Filtering",
    content:
      "Filter transactions by any custom date range. Compare this month to last month in seconds.",
    icon: CalendarRange,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    card: "06",
    title: "AI Spending Tips",
    content:
      "Gemini analyses your spending every month and tells you what to do — like spotting a food budget spike before it becomes a habit.",
    icon: Sparkles,
    className: "lg:col-span-2 lg:row-span-1",
  },
];

const Feature = () => {
  return (
    <section id="features" className="bg-black px-10 py-40">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-neutral-400 text-[14px] sm:text-[18px] tracking-widest text-center"
      >
        [ 003 ] — Features
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-neutral-100 text-5xl md:text-6xl font-medium font-roboto text-center mt-8 max-w-3xl mx-auto"
      >
        Everything you need to{" "}
        <span className="text-red-400">own your finances</span>
      </motion.h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 max-w-7xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          const isHero = feature.card === "01";
          const isAi = feature.card === "06";

          return (
            <motion.article
              key={feature.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 transition-colors hover:border-neutral-700",
                isAi &&
                  "border-red-900/40 bg-linear-to-br from-red-950/30 to-neutral-950/80",
                feature.className,
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-8 -top-8 size-32 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-100",
                  isAi ? "bg-red-500/20" : "bg-red-500/10",
                )}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-neutral-600 text-sm font-roboto tracking-widest">
                    {feature.card}
                  </span>
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/80 text-red-400",
                      isHero && "size-12",
                    )}
                  >
                    <Icon className={cn("size-5", isHero && "size-6")} />
                  </div>
                </div>

                <h3
                  className={cn(
                    "mt-6 font-roboto font-medium text-neutral-100",
                    isHero ? "text-3xl" : "text-xl",
                  )}
                >
                  {feature.title}
                </h3>

                <p
                  className={cn(
                    "mt-3 text-neutral-400 leading-relaxed",
                    isHero ? "text-base max-w-md" : "text-sm",
                  )}
                >
                  {feature.content}
                </p>
              </div>

              {isHero && (
                <div className="relative z-10 mt-10 grid grid-cols-3 gap-3">
                  {["Balance", "Income", "Expenses"].map((label) => (
                    <div
                      key={label}
                      className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                        {label}
                      </p>
                      <p className="mt-1 font-roboto text-lg text-neutral-100">
                        —
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {isAi && (
                <div className="relative z-10 mt-6 rounded-xl border border-red-900/30 bg-red-950/20 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-red-400/80">
                    Insight preview
                  </p>
                  <p className="mt-1 text-sm text-neutral-300">
                    Food spending is up 18% this month — consider setting a
                    weekly cap.
                  </p>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
