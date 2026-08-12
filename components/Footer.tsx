"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SiGithub, SiDiscord, SiMailbox } from "@icons-pack/react-simple-icons";

const footerLinks = {
  Product: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Add Transaction", href: "/add-transaction" },
    { name: "Profile", href: "/profile" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socials = [
  { icon: SiGithub, href: "https://github.com", label: "GitHub" },
  { icon: SiDiscord, href: "https://discord.com", label: "Discord" },
  { icon: SiMailbox, href: "https://mail.com", label: "Mail" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 px-6 sm:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 max-w-xs"
          >
            <div className="text-[19px] text-neutral-50 font-roboto tracking-normal">
              Fintrack
              <span className="text-red-600 text-xl font-bold">.</span>
            </div>
            <p className="text-neutral-500 text-[13px] font-roboto tracking-wide leading-relaxed">
              Track income and expenses with clarity — built for people who want
              their money to make sense.
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-600 hover:border-neutral-700 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
            {Object.entries(footerLinks).map(([heading, links], colIdx) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + colIdx * 0.08 }}
                className="flex flex-col gap-3"
              >
                <span className="text-neutral-300 text-[12px] font-roboto font-semibold tracking-wider uppercase">
                  {heading}
                </span>
                <div className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-neutral-500 hover:text-neutral-200 text-[13px] font-roboto tracking-wide transition-colors w-fit"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border-t border-neutral-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-600 text-[12px] font-roboto tracking-wide">
            © 2026 FinTrack. Built with Next.js, TypeScript &amp; Gemini AI.
          </p>
          <div className="w-2 h-2 rounded-full bg-red-600" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
