"use client";

import Link from "next/link";
import LogoImage from "../../public/img/Logo.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
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

      <div className="flex items-center gap-x-20">
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
                  ? "border border-[#14183e] px-5 py-2 rounded-[5px]"
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
              EN <ChevronDown />
            </button>

            {dropLanguage && (
              <div className="absolute z-10 -bottom-6 w-full bg-[#ececec}">
                PT
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
