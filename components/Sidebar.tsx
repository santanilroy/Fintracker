"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  LayoutDashboardIcon,
  UserCircle,
  PlusCircle,
  Info,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/dashboard/profile", label: "Profile", icon: UserCircle },
  {
    href: "/dashboard/add-transaction",
    label: "Add Transaction",
    icon: PlusCircle,
  },
  { href: "/dashboard/help", label: "Help center", icon: Info },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClasses = (href: string) =>
    `py-2 px-4 rounded-xl flex gap-5 items-center duration-300 ${
      pathname === href
        ? "bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:text-white"
        : "hover:bg-neutral-300 hover:text-neutral-800"
    }`;

  const SidebarContent = (
    <>
      <div className="flex items-center justify-between">
        <div className="text-[15px] text-neutral-50 font-roboto tracking-normal ml-5 bg-neutral-950 dark:bg-neutral-500/30 dark:backdrop-blur-2xl dark:shadow-mauve-200 dark:shadow-xs w-28 flex justify-center items-center py-2 rounded-md">
          Fintracker
          <span className="text-red-600 text-sm font-bold">.</span>
        </div>
        {/* Close button — mobile drawer only */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden text-neutral-600 dark:text-neutral-300 p-1"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      <ul className="mt-15 space-y-4 text-[13px] font-roboto tracking-wide text-neutral-600 dark:text-neutral-100">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href} className={`cursor-pointer ${linkClasses(href)}`}>
            <Icon />
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-45 space-y-4 text-[13px] font-roboto tracking-wide text-neutral-600 dark:text-neutral-100">
        <li className="py-2 px-4 rounded-xl flex gap-5 items-center hover:bg-red-300 hover:text-red-500 duration-300 cursor-pointer">
          <LogOut />
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-lg cursor-pointer"
          >
            Logout
          </button>
        </li>
      </ul>
    </>
  );

  return (
    <>
      {/* Mobile top bar with hamburger trigger */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-neutral-950 border-b border-neutral-300 dark:border-neutral-800">
        <div className="text-[15px] text-neutral-50 font-roboto tracking-normal bg-neutral-950 dark:bg-neutral-500/30 w-28 flex justify-center items-center py-2 rounded-md">
          Fintracker
          <span className="text-red-600 text-sm font-bold">.</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="text-neutral-700 dark:text-neutral-200 p-1"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop fixed sidebar */}
      <div className="hidden md:block w-64 h-full fixed text-neutral-800 p-4 border-r border-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 bg-gray-100">
        {SidebarContent}
      </div>

      {/* Mobile drawer + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 left-0 h-full w-72 p-4 z-50 text-neutral-800 border-r border-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 bg-gray-100"
            >
              {SidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
