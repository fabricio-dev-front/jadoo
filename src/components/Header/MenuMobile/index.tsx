"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface MenuMobileProps {
  nativations: { name: string }[];
  buttonActions: { name: string; idx?: boolean }[];
}

export function MenuMobile({ nativations, buttonActions }: MenuMobileProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="lg:hidden relative">
      <button onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
        {openMenu ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 bg-[#F1A501] rounded-lg p-2.5 min-w-[200px]"
          >
            <div className="flex flex-col gap-y-1.5">
              {nativations.map((nav) => (
                <Link
                  key={nav.name}
                  href="#"
                  className="hover:bg-white rounded-lg p-2.5 hover:text-black text-white font-medium"
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-x-1">
              {buttonActions.map((action) => (
                <button
                  key={action.name}
                  className="bg-white w-full text-center rounded-lg p-2.5 text-black font-medium hover:bg-[#ececec]"
                >
                  {action.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
