"use client";

import React from "react";
import { FaImages, FaCamera, FaVideo, FaStar } from "react-icons/fa";

const filters = [
  {
    name: "All",
    value: "all",
    icon: FaImages,
  },
  {
    name: "Photos",
    value: "photos",
    icon: FaCamera,
  },
  {
    name: "Videos",
    value: "videos",
    icon: FaVideo,
  },
  {
    name: "Special",
    value: "special",
    icon: FaStar,
  },
];

const MemoriesFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <section className="px-4 pb-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-pink-500 bg-pink-500 text-white shadow-lg shadow-pink-500/20"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-300"
              }`}
            >
              <Icon className="text-sm" />
              {filter.name}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MemoriesFilter;