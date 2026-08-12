"use client";

import { addTransaction } from "@/app/actions/transaction";
import { useRef } from "react";

export default function AddTransactionForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addTransaction(formData);
        formRef.current?.reset();
      }}
      className="flex flex-col gap-3"
    >
      <input
        name="amount"
        type="number"
        step="0.01"
        placeholder="Amount"
        required
        className="p-2 rounded-md bg-neutral-900 border border-neutral-700 text-white"
      />

      <select
        name="type"
        required
        className="p-2 rounded-md bg-neutral-900 border border-neutral-700 text-white"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        name="category"
        type="text"
        placeholder="Category (e.g. Food, Salary)"
        required
        className="p-2 rounded-md bg-neutral-900 border border-neutral-700 text-white"
      />

      <input
        name="note"
        type="text"
        placeholder="Note (optional)"
        className="p-2 rounded-md bg-neutral-900 border border-neutral-700 text-white"
      />

      <button
        type="submit"
        className="p-2 rounded-md bg-red-500 text-white font-roboto tracking-wide"
      >
        Add Transaction
      </button>
    </form>
  );
}
