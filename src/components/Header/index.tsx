"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MenuMobile } from "./MenuMobile";
import { motion } from "motion/react";

export function Header() {
  const [language, setLanguage] = useState<"PT" | "EN">("EN");
  const [dropLanguage, setDropLanguage] = useState(false);

  const nativations = [
    {
      name: "Desitnations",
    },
    {
      name: "Hotels",
    },
    {
      name: "Flights",
    },
    {
      name: "Bookings",
    },
  ];

  const buttonActions = [
    {
      name: "Login",
    },
    {
      idx: true,
      name: "Sign Up",
    },
  ];

  return (
    <header className="flex items-center justify-between text-[#14183e] relative z-10">
      <div>
        <Image src="/Logo.png" alt="Logo" height={33} width={100} />
      </div>

      <div className="hidden lg:flex items-center gap-x-20">
        <div className="flex gap-x-10">
          {nativations.map((nav) => (
            <Link key={nav.name} href="#" className="">
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-10">
          {buttonActions.map((action) => (
            <button
              key={action.name}
              className={`cursor-pointer ${
                action.idx
                  ? "border border-[#14183e] px-5 py-2 rounded-[5px] hover:bg-[#F1A501] hover:text-white hover:border-transparent"
                  : ""
              }`}
            >
              {action.name}
            </button>
          ))}

          <div className="relative z-10">
            <button
              onClick={() => setDropLanguage(!dropLanguage)}
              className="flex items-center gap-x-1 cursor-pointer"
            >
              {language}{" "}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  dropLanguage ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {dropLanguage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute z-10 -bottom-11 rounded-md right-3 bg-black/10 px-1.5 py-2 w-fit"
              >
                <button
                  className="w-full cursor-pointer hover:bg-black/15 px-4 rounded-md"
                  onClick={() => {
                    setLanguage(language === "PT" ? "EN" : "PT");
                    setDropLanguage(false);
                  }}
                >
                  {language === "PT" ? "EN" : "PT"}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <MenuMobile nativations={nativations} buttonActions={buttonActions} />
    </header>
  );
}
