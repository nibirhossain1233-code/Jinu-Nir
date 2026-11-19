import React from "react";
import Container from "../ui/Container";

import {
  FaCommentDots,
  FaHeart,
  FaCalendarAlt,
  FaPlane,
  FaInfinity,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    icon: <FaCommentDots />,
    title: "First Hello",
    date: "April 17, 2026",
    description: "The day our journey began with a simple hello in a group.",
  },
  {
    id: 2,
    icon: <FaHeart />,
    title: "First Connection",
    date: "May 25, 2026",
    description: "We talked for hours and realized how special our bond is.",
  },
  {
    id: 3,
    icon: <FaCalendarAlt />,
    title: "Officially Ours",
    date: "August 17, 2026",
    description: "We made it official and promised to stay forever.",
  },
  {
    id: 4,
    icon: <FaPlane />,
    title: "Miles Apart",
    date: "Will be In-sha-allah",
    description: "Distance came, but our love became even stronger.",
  },
  {
    id: 5,
    icon: <FaInfinity />,
    title: "Forever & Always",
    date: "Forever",
    description: "No matter the distance, our hearts will always be together.",
  },
];

const LoveTimeline = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>
        <div className="rounded-4xl lg:rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-md px-5 py-10 lg:px-10 lg:py-12">

          {/* Heading */}
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-text font-inter">
              <FaHeart className="text-pink-300 text-xl lg:text-2xl" />
              Our Love Timeline
              <FaHeart className="text-pink-300 text-xl lg:text-2xl" />
            </h2>

            <p className="mt-3 text-white/65 text-sm lg:text-base">
              Every moment with you is a treasure.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-12">

            {/* Desktop Line */}
            <div className="hidden lg:block absolute top-8.75 left-[10%] right-[10%] h-0.5 bg-pink-300/60" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-5">

              {timelineData.map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center text-center"
                >

                  {/* Icon */}
                  <div className="relative z-10 w-17.5 h-17.5 rounded-full border border-pink-300/30 bg-pink-300/10 backdrop-blur-xl flex items-center justify-center text-2xl text-pink-300 shadow-[0_0_30px_rgba(244,114,182,0.15)]">
                    {item.icon}
                  </div>

                  {/* Heart */}
                  <FaHeart className="hidden lg:block relative z-20 mt-3 text-pink-300 text-sm" />

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-semibold text-text">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-pink-300">
                    {item.date}
                  </p>

                  <p className="mt-3 max-w-47.5 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoveTimeline;