import React from "react";
import Image from "next/image";
import {
  FaHeart,
  FaUser,
  FaCalendarAlt,
  FaEye,
  FaChevronRight,
} from "react-icons/fa";

const LetterCard = ({ letter, onRead }) => {
  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-pink-500/25 bg-linear-to-br from-white/5.5 to-pink-500/2.5 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-[0_12px_35px_rgba(236,72,153,0.08)] sm:flex-row sm:items-center sm:p-4">
      {/* Letter Image */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl border border-pink-500/40 sm:h-32 sm:w-44">
        <Image
          src={letter.image}
          alt={letter.title}
          fill
          sizes="(max-width: 640px) 100vw, 176px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

        {/* Heart Icon */}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-pink-600 text-white shadow-lg">
          <FaHeart className="text-xs" />
        </div>
      </div>

      {/* Letter Details */}
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-xl font-bold text-white transition-colors group-hover:text-pink-300">
          {letter.title}
        </h3>

        <p className="mt-2 line-clamp-1 text-sm text-gray-400">
          {letter.description}
        </p>

        {/* Meta Information */}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-white/10 pt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <FaUser className="text-pink-400" />
            From: {letter.from}
          </span>

          <span className="text-pink-500">→</span>

          <span className="flex items-center gap-1.5">
            <FaUser className="text-pink-400" />
            To: {letter.to}
          </span>

          <span className="hidden text-white/20 sm:inline">|</span>

          <span className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-pink-400" />
            {letter.date}
          </span>

          <span className="rounded-full bg-pink-500/15 px-3 py-1 text-pink-300">
            {letter.category}
          </span>
        </div>
      </div>

      {/* Read Button */}
      <button
        onClick={() => onRead(letter)}
        className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-pink-500 px-5 py-3 text-sm font-medium text-pink-300 transition-all duration-300 hover:bg-pink-600 hover:text-white sm:self-center cursor-pointer"
      >
        <FaEye />
        Read
        <FaChevronRight className="text-xs" />
      </button>
    </article>
  );
};

export default LetterCard;