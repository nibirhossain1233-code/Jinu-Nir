import React from "react";
import { FaHeart } from "react-icons/fa";

const LettersQuote = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-5 text-center">
      {/* Top Glow */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-40 w-96 -translate-x-1/2 rounded-full bg-pink-600/10 blur-[100px]" />

      {/* Decorative Line */}
      <div className="mx-auto flex max-w-sm items-center justify-center gap-4 text-pink-500">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-pink-500" />

        <FaHeart className="text-2xl" />

        <span className="h-px flex-1 bg-linear-to-l from-transparent to-pink-500" />
      </div>

      {/* Quote */}
      <blockquote className="mx-auto mt-6 max-w-3xl font-serif text-lg italic leading-8 text-gray-300 sm:text-xl">
        “Some words never fade, because they come from the heart.”
        <FaHeart className="ml-2 inline text-pink-500" />
      </blockquote>

      {/* Bottom Wave Decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full overflow-hidden">
        <div className="absolute -bottom-8 left-[-5%] h-16 w-[110%] rounded-[50%] border-t border-pink-500/50 shadow-[0_-5px_20px_rgba(236,72,153,0.15)]" />
      </div>
    </section>
  );
};

export default LettersQuote;