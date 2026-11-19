import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

import {
  FaMapMarkerAlt,
  FaFlag,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import { info } from "@/api/info";

const strengthData = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    number: info.distance,
    title: "Kilometers Apart",
  },
  {
    id: 2,
    icon: <FaFlag />,
    number: "01",
    title: "Countries",
  },
  {
    id: 3,
    icon: <FaClock />,
    number: "1",
    title: "Time Zone",
    subtitle: "(Same Time)",
  },
  {
    id: 4,
    icon: <FaHeart />,
    number: "∞",
    title: "Love",
    subtitle: "(Unlimited)",
  },
];

const DistanceStrength = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>

        <div className="overflow-hidden rounded-4xl lg:rounded-[42px] border border-pink-400/20 bg-white/5 backdrop-blur-xl">

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">

            {/* Left */}
            <div className="px-5 py-10 sm:px-8 lg:px-10">

              <div className="text-center">

                <h2 className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-bold text-text">
                  <FaHeart className="text-pink-400 text-lg" />
                  Our Distance, Our Strength
                  <FaHeart className="text-pink-400 text-lg" />
                </h2>

                <p className="mt-3 text-sm lg:text-base text-white/60">
                  Distance makes our love stronger every single day.
                </p>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-8">

                {strengthData.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-pink-400/20 bg-black/10 px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-pink-400/5"
                  >

                    <div className="mx-auto w-11 h-11 rounded-full border border-pink-400/30 bg-pink-400/10 flex items-center justify-center text-pink-400">
                      {item.icon}
                    </div>

                    <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white">
                      {item.number}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-white/70">
                      {item.title}
                    </p>

                    {item.subtitle && (
                      <p className="mt-1 text-[11px] text-pink-400">
                        {item.subtitle}
                      </p>
                    )}

                  </div>
                ))}

              </div>

            </div>

            {/* Right Image */}
            <div className="relative min-h-75 lg:min-h-full">

              <Image
                src="/images/distance/Strength.jpg"
                alt="Love despite distance"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-7 left-6 right-6 text-center">
                <p className="text-2xl sm:text-3xl font-serif italic text-white">
                  No matter the distance,
                  <br />
                  our hearts beat as one.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default DistanceStrength;