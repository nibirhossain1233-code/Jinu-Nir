"use client";

import React, { useState } from "react";
import Container from "./Container";
import { navdata } from "@/api/navdata";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "../common/Logo";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Container>
          <div className="flex items-center justify-between h-20 px-6 lg:px-8 rounded-3xl border border-white/20 bg-primary/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] absolute left-1/2 -translate-x-1/2 w-[95%] lg:w-300 mt-6 z-50">
            <div>
              <Link href="/">
                <Logo/>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center font-outfit text-text">
                {navdata?.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="px-5 py-2.5 text-base font-medium text-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-primary hover:shadow-lg"
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white text-4xl"
            >
              {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute left-1/2 -translate-x-1/2 top-28 w-[95%] transition-all linear duration-200 z-40 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="rounded-3xl border border-white/20 bg-primary/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-5">
              <ul className="flex flex-col items-center gap-2 font-outfit">
                {navdata?.map((item) => (
                  <li key={item.id} className="w-full px-4">
                    <Link
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className="block w-full text-center px-5 py-3 text-white rounded-full transition-all duration-300 hover:bg-white active:bg-white hover:text-primary active:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
