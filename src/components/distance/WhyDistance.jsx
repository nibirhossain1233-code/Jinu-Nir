import React from "react";
import Container from "../ui/Container";

import {
  FaComments,
  FaHeart,
  FaCamera,
  FaInfinity,
} from "react-icons/fa";

const reasons = [
  {
    id: 1,
    icon: <FaComments />,
    title: "We Talk",
    description: "Hours of calls and messages keep us close.",
  },
  {
    id: 2,
    icon: <FaHeart />,
    title: "We Trust",
    description: "Trust is the bridge that connects our hearts.",
  },
  {
    id: 3,
    icon: <FaCamera />,
    title: "We Share",
    description: "We share every moment, every feeling.",
  },
  {
    id: 4,
    icon: <FaInfinity />,
    title: "We Believe",
    description: "We believe in our love and our forever.",
  },
];

const WhyDistance = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">

          <div className="hidden sm:block w-14 lg:w-24 h-px bg-pink-400/30" />

          <h2 className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-text text-center">
            <FaHeart className="text-pink-400 text-lg" />
            Why Distance Can't Stop Us
            <FaHeart className="text-pink-400 text-lg" />
          </h2>

          <div className="hidden sm:block w-14 lg:w-24 h-px bg-pink-400/30" />

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

          {reasons.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-pink-400/20 bg-white/5 backdrop-blur-xl px-5 py-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/40 hover:bg-pink-400/5"
            >

              <div className="mx-auto w-14 h-14 rounded-full border border-pink-400/30 bg-pink-400/10 flex items-center justify-center text-xl text-pink-400 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-6 text-white/60">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default WhyDistance;