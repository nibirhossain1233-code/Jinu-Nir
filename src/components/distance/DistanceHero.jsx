import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaRoute,
} from "react-icons/fa";
import { names } from "@/api/names";
import { info } from "@/api/info";

const DistanceHero = () => {
  return (
    <section className="pt-32 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* =========================
              Left Content
          ========================= */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-400/20 bg-pink-400/10 backdrop-blur-md text-sm text-white">
              <span>Distance Can't Break Us</span>
              <FaHeart className="text-pink-400" />
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] leading-tight font-bold font-inter text-text">
              Miles Apart,
              <br />
              <span className="text-pink-400">
                Hearts Together
              </span>
              <span className="text-pink-400 ml-2">♡</span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base lg:text-lg leading-8 text-white/70">
              Distance is just a test to see how far love can travel.
              No matter where we are, our hearts are always connected.
            </p>

            {/* Love Card */}
            <div className="mt-8 max-w-md mx-auto lg:mx-0 rounded-2xl border border-pink-400/30 bg-white/5 backdrop-blur-xl p-5 text-left">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-400/10 border border-pink-400/20 flex items-center justify-center">
                  <FaHeart className="text-pink-400" />
                </div>

                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-white">
                    Love Knows No Distance
                  </h3>

                  <p className="mt-1 text-sm text-white/60">
                    You are my today and all of my tomorrows.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* =========================
              Right Distance Visual
          ========================= */}
          <div className="relative min-h-107.5 sm:min-h-125 flex items-center justify-center">

            {/* Background Map */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-75 rounded-full border border-pink-400/20 blur-[1px]" />
            </div>

            {/* Connection Line */}
            <div className="absolute top-[48%] left-[18%] right-[18%] border-t-2 border-dashed border-pink-400/70 rotate-[-4deg]" />

            {/* Nibir */}
            <div className="absolute left-[8%] sm:left-[12%] top-[20%] flex flex-col items-center">

              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 border border-pink-400/40 bg-pink-400/10 shadow-[0_0_35px_rgba(236,72,153,0.25)]">
                <Image
                  src="/images/distance/jerin.jpg"
                  alt={names.firstName}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="rounded-full object-cover p-2"
                />
              </div>

              <FaMapMarkerAlt className="mt-2 text-3xl text-pink-400" />

              <h3 className="mt-1 text-lg font-semibold text-white">
                {names.firstName}
              </h3>

              <p className="text-sm text-pink-300">
                {info.firstPlace}
              </p>

            </div>

            {/* Aru */}
            <div className="absolute right-[8%] sm:right-[12%] top-[20%] flex flex-col items-center">

              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 border border-pink-400/40 bg-pink-400/10 shadow-[0_0_35px_rgba(236,72,153,0.25)]">
                <Image
                  src="/images/distance/Nibir.png"
                  alt={names.secondName}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="rounded-full object-cover p-2"
                />
              </div>

              <FaMapMarkerAlt className="mt-2 text-3xl text-pink-400" />

              <h3 className="mt-1 text-lg font-semibold text-white">
                {names.secondName}
              </h3>

              <p className="text-sm text-pink-300">
                {info.secondPlace}
              </p>

            </div>

            {/* Distance Card */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-2xl border border-pink-400/30 bg-pink-400/10 backdrop-blur-xl px-8 py-4 text-center">

              <div className="flex items-center justify-center gap-2 text-pink-400">
                <FaRoute />
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {info.distance} km
                </span>
              </div>

              <p className="mt-1 text-xs text-white/60">
                Between Us
              </p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default DistanceHero;