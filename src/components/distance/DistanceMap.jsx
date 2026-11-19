import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

import {
  FaHeart,
  FaPlane,
} from "react-icons/fa";
import { names } from "@/api/names";
import { info } from "@/api/info";

const DistanceMap = () => {
  return (
    <section id="map" className="mt-14 lg:mt-20">
      <Container>

        <div className="rounded-4xl lg:rounded-[42px] border border-pink-400/20 bg-white/5 backdrop-blur-xl p-5 sm:p-7 lg:p-8">

          {/* Heading */}
          <div className="text-center mb-7">

            <h2 className="flex items-center justify-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-text">
              <FaHeart className="text-pink-400 text-lg" />
              Our Distance Map
              <FaHeart className="text-pink-400 text-lg" />
            </h2>

            <p className="mt-2 text-sm lg:text-base text-white/60">
              Every mile between us is a step closer to forever.
            </p>

          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-3xl border border-pink-400/20 min-h-107.5 sm:min-h-125">

            <Image
              src="/map.png"
              alt="Distance map"
              fill
              className=""
            />

            <div className="absolute inset-0 bg-black/20" />

            {/* Nibir Card */}
            <div className="absolute top-58 left-1 sm:bottom-7 sm:left-7 w-52 sm:w-60 rounded-2xl border border-pink-400/30 bg-[#160d18]/85 backdrop-blur-xl p-4">

              <div className="flex items-center gap-3">

                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pink-400/30">
                  <Image
                    src="/"
                    alt={names.firstLogo}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {names.firstName}
                  </h3>

                  <p className="text-xs text-white/60">
                    {info.firstPlace}
                  </p>
                </div>

              </div>

              <div className="flex justify-center my-4 text-pink-400 text-2xl">
                <FaHeart />
              </div>

              <div className="flex items-center gap-3">

                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pink-400/30">
                  <Image
                    src="/images/distance/nibir.png"
                    alt={names.secondLogo}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {names.secondName}
                  </h3>

                  <p className="text-xs text-white/60">
                    {info.secondPlace}
                  </p>
                </div>

              </div>

            </div>

            {/* Distance Card */}
            <div className="absolute top-5 right-1 sm:top-7 sm:right-7 w-48 sm:w-56 rounded-2xl border border-pink-400/30 bg-[#160d18]/85 backdrop-blur-xl p-5 text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-pink-400/10 border border-pink-400/30 flex items-center justify-center text-pink-400">
                <FaPlane />
              </div>

              <p className="mt-3 text-sm text-white/70">
                Distance
              </p>

              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
                {info.distance} km
              </h3>

              <p className="mt-1 text-xs text-white/50">
                Approximate distance between our hearts.
              </p>

              <FaHeart className="mx-auto mt-3 text-pink-400" />

            </div>
           

          </div>

        </div>

      </Container>
    </section>
  );
};

export default DistanceMap;