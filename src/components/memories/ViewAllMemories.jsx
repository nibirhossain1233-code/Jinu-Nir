import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const ViewAllMemories = () => {
  return (
    <section className="px-4 pb-24 text-center">
      <div className="mx-auto max-w-2xl rounded-3xl border border-pink-400/20 bg-white/3 px-6 py-10 shadow-xl shadow-pink-500/5 backdrop-blur-xl sm:px-10">
        <FaHeart className="mx-auto mb-5 text-3xl text-pink-400" />

        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Every Moment Matters
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400">
          Every picture tells a story, and every story reminds us how beautiful
          our journey is.
        </p>

        <button className="mt-7 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-pink-500 to-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40">
          View All Memories
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ViewAllMemories;