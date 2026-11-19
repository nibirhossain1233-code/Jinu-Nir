"use client";

import React, { useEffect } from "react";
import {
  FaHeart,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";

const LetterModal = ({ letter, onClose }) => {
  useEffect(() => {
    if (!letter) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [letter, onClose]);

  if (!letter) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-pink-500/30 bg-[#100912] p-6 shadow-[0_0_60px_rgba(236,72,153,0.12)] sm:p-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close letter"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-pink-500 hover:text-pink-400"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="text-center">
          <FaHeart className="mx-auto mb-5 text-3xl text-pink-500" />

          <h2 className="pr-8 font-serif text-2xl font-bold text-white sm:text-3xl">
            {letter.title}
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
            <span>
              From: <span className="text-pink-300">{letter.from}</span>
            </span>

            <span className="text-pink-500">→</span>

            <span>
              To: <span className="text-pink-300">{letter.to}</span>
            </span>

            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-pink-400" />
              {letter.date}
            </span>
          </div>
        </div>

        {/* Letter Content */}
        <div className="mt-8 rounded-2xl border border-pink-500/15 bg-white/2.5 p-6 sm:p-8">
          <p className="whitespace-pre-line font-serif text-base leading-9 text-gray-300">
            {letter.content}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-7 text-center">
          <p className="font-serif text-sm italic text-pink-300">
            With love, forever. 
          </p>

          <FaHeart className="mx-auto mt-3 text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default LetterModal;