"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  LayoutDashboardIcon,
  UserCircle,
  PlusCircle,
  PieChart,
  Info,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-full fixed text-neutral-800 p-4 border-r border-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 bg-gray-100">
        <div className="text-[15px] text-neutral-50 font-roboto tracking-normal ml-5 bg-neutral-950 dark:bg-neutral-500/30 dark:backdrop-blur-2xl dark:shadow-mauve-200 dark:shadow-xs w-28 flex justify-center items-center py-2 rounded-md">
          Fintracker
          <span className="text-red-600 text-sm font-bold">.</span>
        </div>
        <ul className="mt-15 space-y-4 text-[13px] font-roboto tracking-wide text-neutral-600 dark:text-neutral-100">
          <li className="py-2 px-4 cursor-pointer rounded-xl flex gap-5 items-center active:bg-neutral-400 hover:bg-neutral-300 hover:text-neutral-800 duration-300">
            <LayoutDashboardIcon />
            <Link href={"/dashboard"} className="text-lg">
              Dashboard
            </Link>
          </li>
          <li className="py-2 px-4 cursor-pointer rounded-xl flex gap-5 items-center active:bg-neutral-400 hover:bg-neutral-300 hover:text-neutral-800 duration-300">
            <UserCircle />
            <Link href={"/dashboard/profile"} className="text-lg">
              Profile
            </Link>
          </li>
          <li className="py-2 px-4 cursor-pointer rounded-xl flex gap-5 items-center active:bg-neutral-400 hover:bg-neutral-300 hover:text-neutral-800 duration-300">
            <PlusCircle />
            <Link href={"/dashboard/add-transaction"} className="text-lg">
              Add Transaction
            </Link>
          </li>
          <li className="py-2 px-4 cursor-pointer rounded-xl flex gap-5 items-center active:bg-neutral-400 hover:bg-neutral-300 hover:text-neutral-800 duration-300">
            <PieChart />
            <Link href={"/dashboard/analytics"} className="text-lg">
              Analytics
            </Link>
          </li>
        </ul>
        <ul className="mt-45 space-y-4 text-[13px] font-roboto tracking-wide text-neutral-600 dark:text-neutral-100">
          <li className="py-2 px-4 cursor-pointer rounded-xl flex gap-5 items-center active:bg-neutral-400 hover:bg-neutral-300 hover:text-neutral-800 duration-300">
            <Info />
            <Link href={"/dashboard/help"} className="text-lg">
              Help center
            </Link>
          </li>
          <li className="py-2 px-4 rounded-xl flex gap-5 items-center active:bg-neutral-400 hover:bg-red-300 hover:text-red-500 duration-300 cursor-pointer">
            <LogOut />
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-lg cursor-pointer"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
