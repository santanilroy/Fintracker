"use client";
import { motion } from "motion/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function GoogleBtn() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return (
      <motion.button
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 1 }}
        type="button"
        onClick={() => signOut()}
        className="w-full p-2 rounded-md bg-neutral-700 text-neutral-50 font-roboto tracking-wider cursor-pointer"
      >
        Sign out
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1 }}
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="rounded-md bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-neutral-700"
    >
      Sign in with Google
    </motion.button>
  );
}
