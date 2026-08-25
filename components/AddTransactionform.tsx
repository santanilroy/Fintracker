"use client";

import { addTransaction } from "@/app/actions/transaction";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  IndianRupee,
  TrendingUp,
  TrendingDown,
  StickyNote,
} from "lucide-react";

const QUICK_CATEGORIES = {
  expense: [
    "Food",
    "Rent",
    "Transport",
    "Shopping",
    "Utilities",
    "Entertainment",
  ],
  income: ["Salary", "Freelance", "Investment", "Gift"],
};

export default function AddTransactionForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [type, setType] = useState<"expense" | "income">("expense");
  const [category, setCategory] = useState("");

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formData.set("type", type);
        formData.set("category", category);
        await addTransaction(formData);
        formRef.current?.reset();
        setCategory("");
      }}
      className="flex flex-col gap-6 bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-800 rounded-2xl p-6 w-full max-w-md"
    >
      {/* Income / Expense segmented toggle */}
      <div className="relative flex bg-neutral-100 dark:bg-neutral-950 border dark:border-neutral-800 rounded-xl p-1">
        <motion.div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg ${
            type === "expense" ? "bg-red-600/15" : "bg-green-600/15"
          }`}
          animate={{ left: type === "expense" ? 4 : "50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
        <button
          type="button"
          onClick={() => {
            setType("expense");
            setCategory("");
          }}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-roboto font-medium tracking-wide transition-colors ${
            type === "expense" ? "text-red-500" : "text-neutral-500"
          }`}
        >
          <TrendingDown size={16} />
          Expense
        </button>
        <button
          type="button"
          onClick={() => {
            setType("income");
            setCategory("");
          }}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-roboto font-medium tracking-wide transition-colors ${
            type === "income" ? "text-green-500" : "text-neutral-500"
          }`}
        >
          <TrendingUp size={16} />
          Income
        </button>
      </div>

      {/* Amount */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[12px] font-roboto tracking-wide uppercase">
          Amount
        </label>
        <div className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-950 border dark:border-neutral-800 rounded-xl px-4 py-3 focus-within:border-neutral-600 transition-colors">
          <IndianRupee size={20} className="text-neutral-500 shrink-0" />
          <input
            name="amount"
            type="number"
            step="0.01"
            placeholder="0.00"
            required
            className="w-full bg-transparent text-black dark:text-white text-2xl font-roboto font-semibold placeholder:text-neutral-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Category — quick chips + custom input */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[12px] font-roboto tracking-wide uppercase">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {QUICK_CATEGORIES[type].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[13px] font-roboto tracking-wide border transition-colors ${
                category === cat
                  ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-500 dark:text-neutral-900 border-neutral-700 dark:border-neutral-100"
                  : "bg-neutral-200 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-400 dark:border-neutral-800 border-neutral-100 hover:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Or type a custom category"
          required
          className="bg-neutral-200 dark:bg-neutral-950 border dark:border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors font-roboto"
        />
      </div>

      {/* Note */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[12px] font-roboto tracking-wide uppercase">
          Note <span className="normal-case text-neutral-600">(optional)</span>
        </label>
        <div className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-950 border dark:border-neutral-800 rounded-xl px-4 py-2.5 focus-within:border-neutral-600 transition-colors">
          <StickyNote size={15} className="text-neutral-600 shrink-0" />
          <input
            name="note"
            type="text"
            placeholder="What was this for?"
            className="w-full bg-transparent text-sm text-white placeholder:text-neutral-600 focus:outline-none font-roboto"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className={`p-3 rounded-xl text-white font-roboto font-medium tracking-wide transition-colors ${
          type === "expense"
            ? "bg-red-600 hover:bg-red-500"
            : "bg-green-600 hover:bg-green-500"
        }`}
      >
        Add {type === "expense" ? "Expense" : "Income"}
      </motion.button>
    </form>
  );
}
