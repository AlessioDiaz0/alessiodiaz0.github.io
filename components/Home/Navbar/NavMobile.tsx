"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

type NavLinkItem = (typeof NavLinks)[number];

const NavMobileItem = ({
  link,
  closeNav,
}: {
  link: NavLinkItem;
  closeNav: () => void;
}) => {
  return (
    <li>
      <Link
        href={link.url}
        onClick={closeNav}
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-white/90 hover:bg-white/10 active:bg-white/15 transition"
      >
        {/* Replace this with your exact content (label, icon, arrow, etc.) */}
        <span className="text-base">{link.label ?? "Link"}</span>
        {/* Example right-side indicator (optional) */}
        <span className="text-white/40 group-hover:text-white/60 transition">→</span>
      </Link>
    </li>
  );
};

const NavMobile = ({ showNav, closeNav }: Props) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    if (showNav) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showNav, closeNav]);

  return (
    <div className="md:hidden">
      {/* Overlay */}
      <button
        aria-label="Close navigation overlay"
        onClick={closeNav}
        className={[
          "fixed inset-0 z-[100002] transition-all duration-300",
          showNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="w-full h-full bg-black/50 backdrop-blur-sm" />
      </button>

      {/* Drawer */}
      <aside
        aria-hidden={!showNav}
        className={[
          "fixed right-0 top-0 z-[100050] h-dvh",
          "w-[85vw] max-w-[320px]",
          "bg-[#0b1220]/90 backdrop-blur-xl border-l border-white/10",
          "shadow-2xl",
          "transition-transform duration-300 ease-out",
          showNav ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <p className="text-white/80 text-sm tracking-wide">Navigation</p>
          <button
            aria-label="Close navigation"
            onClick={closeNav}
            className="p-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition"
          >
            <CgClose className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Links */}
        <nav className="px-3 py-3">
          <ul className="flex flex-col gap-1">
            {NavLinks.map((link) => (
              <NavMobileItem key={link.id} link={link} closeNav={closeNav} />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default NavMobile;
