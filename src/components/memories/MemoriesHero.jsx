import React from "react";
import { FaHeart } from "react-icons/fa";

const MemoriesHero = () => {
  return (
    <section className="relative px-4 pt-36 pb-16 text-center sm:pt-40 sm:pb-20">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-500/10 blur-[100px]" />

      <div className="mx-auto max-w-3xl">
        {/* Small Label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-5 py-2 text-sm text-pink-300">
          <FaHeart className="text-pink-400" />
          <span>Our Beautiful Moments</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Our <span className="text-pink-400">Memories</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
          A collection of our special moments, that will always stay in our
          hearts forever.
        </p>

        {/* Decorative Line */}
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-linear-to-r from-pink-500 to-purple-500" />
      </div>
    </section>
  );
};

export default MemoriesHero;