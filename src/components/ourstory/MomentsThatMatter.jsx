import React from "react";
import Container from "../ui/Container";

import {
  FaComments,
  FaCamera,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const moments = [
  {
    id: 1,
    icon: <FaComments />,
    number: "1200+",
    title: "Heartfelt Conversations",
  },
  {
    id: 2,
    icon: <FaCamera />,
    number: "350+",
    title: "Beautiful Memories",
  },
  {
    id: 3,
    icon: <FaHeart />,
    number: "730+",
    title: "Days of Love",
  },
  {
    id: 4,
    icon: <FaStar />,
    number: "∞",
    title: "Uncountable Blessings",
  },
];

const MomentsThatMatter = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="hidden sm:block w-16 lg:w-24 h-px bg-pink-300/40" />

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text font-inter">
              Moments That Matter
            </h2>

            <FaHeart className="mx-auto mt-2 text-pink-300 text-sm" />
          </div>

          <div className="hidden sm:block w-16 lg:w-24 h-px bg-pink-300/40" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

          {moments.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-7 lg:px-6 lg:py-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >

              <div className="mx-auto w-14 h-14 rounded-full border border-pink-300/30 bg-pink-300/10 flex items-center justify-center text-xl text-pink-300 shadow-[0_0_25px_rgba(244,114,182,0.15)]">
                {item.icon}
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-text">
                {item.number}
              </h3>

              <p className="mt-2 text-xs sm:text-sm lg:text-base text-white/65">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default MomentsThatMatter;