"use client";
import React from "react";
import { signOut } from "next-auth/react";
import {} from "next/link";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-full fixed text-neutral-800 p-4 border-r border-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 bg-gray-100">
        <div className="text-[15px] text-neutral-50 dark:text-neutral-100  font-roboto tracking-normal bg-neutral-900 dark:bg-neutral-300 w-28 flex justify-center items-center py-2 rounded-md">
          Fintracker
          <span className="text-red-600 text-sm font-bold">.</span>
        </div>
        <ul className="mt-4 space-y-2 text-[13px] font-roboto tracking-wide text-neutral-900 dark:text-neutral-100">
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            <Link href={"/dashboard/profile"}>Profile</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            <Link href={"/dashboard/add-transaction"}>Add Transaction</Link>
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl"
            onClick={() => signOut()}
          >
            Logout
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Help
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
