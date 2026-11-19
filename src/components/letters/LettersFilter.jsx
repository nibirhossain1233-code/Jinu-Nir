"use client";

import { names } from "@/api/names";
import React from "react";
import {
  FaThLarge,
  FaUser,
  FaStar,
} from "react-icons/fa";

const filters = [
  {
    label: "All Letters",
    value: "all",
    icon: FaThLarge,
  },
  {
    label: `From ${names.firstName}`,
    value: names.firstName,
    icon: FaUser,
  },
  {
    label: `From ${names.secondName}`,
    value: names.secondName,
    icon: FaUser,
  },
  {
    label: "Special",
    value: "Special",
    icon: FaStar,
  },
];

const LettersFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <section className="relative px-4 pb-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 border-b border-pink-500/10 pb-7">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer ${
                active
                  ? "border-pink-500 bg-linear-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/20"
                  : "border-white/15 bg-black/30 text-gray-300 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-300"
              }`}
            >
              <Icon />
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default LettersFilter;