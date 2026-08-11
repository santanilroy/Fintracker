"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-full fixed text-neutral-800 p-4 border-r border-neutral-300">
        <div className="text-[15px] text-neutral-50  font-roboto tracking-normal bg-neutral-900 w-28 flex justify-center items-center py-2 rounded-md">
          Fintracker
          <span className="text-red-600 text-sm font-bold">.</span>
        </div>
        <ul className="mt-4 space-y-2 text-[13px] font-roboto tracking-wide">
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Dashboard
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Profile
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Settings
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

          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            About
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Contact
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Terms of Service
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Privacy Policy
          </li>
          <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer rounded-xl">
            Appearence
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
