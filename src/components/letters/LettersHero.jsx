import React from "react";
import Image from "next/image";
import { FaHeart, FaPaperPlane } from "react-icons/fa";

const LettersHero = () => {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-36 sm:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/letters/hero.jpg"
          alt="Romantic envelope and rose"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10" />

      {/* Pink Glow */}
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Decorative Heart Line */}
        <div className="mb-5 flex items-center justify-center gap-4 text-pink-500">
          <span className="h-px w-20 bg-linear-to-r from-transparent to-pink-500" />
          <FaHeart className="text-xl" />
          <span className="h-px w-20 bg-linear-to-l from-transparent to-pink-500" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Our{" "}
          <span className="font-serif italic text-pink-500">
            Letters
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base text-gray-300 sm:text-lg">
          Words from my heart, to you... always{" "}
          <FaHeart className="inline text-pink-500" />
        </p>

        {/* Paper Plane Decoration */}
        <div className="mt-7 flex justify-center">
          <FaPaperPlane className="rotate-[-15deg] text-2xl text-pink-500/80" />
        </div>
      </div>
    </section>
  );
};

export default LettersHero;