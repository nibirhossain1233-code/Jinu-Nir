import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const StoryInWords = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>
        <div className="relative overflow-hidden rounded-4xl lg:rounded-[48px] border border-white/10 backdrop-blur-md">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Content */}
            <div className="relative z-20 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">

              <h2 className="text-2xl sm:text-3xl font-bold text-text font-inter">
                Our Story in Words
              </h2>

              <div className="mt-3 flex items-center gap-2">
                <div className="w-20 h-px bg-pink-300/50" />
                <FaHeart className="text-pink-300 text-sm" />
                <div className="w-20 h-px bg-pink-300/50" />
              </div>

              <div className="mt-7 space-y-5 text-white/75 text-base leading-7">

                <p>
                  We come from different places, different worlds,
                  but love connected us in the most beautiful way.
                </p>

                <p>
                  There are late night talks, endless laughter,
                  and silent prayers for each other.
                </p>

                <p>
                  We may be miles apart, but our hearts
                  beat as one.
                </p>

                <p className="font-semibold text-pink-300">
                  This is just the beginning of our forever.
                </p>

              </div>

              <button className="mt-8 px-6 py-3 rounded-full bg-pink-400 text-white font-medium hover:bg-pink-300 hover:text-primary transition-all duration-300">
                💖 You & Me, Always
              </button>

            </div>

            {/* Image */}
            <div className="relative min-h-75 lg:min-h-full">

              <Image
                src="/images/ourstory/words.jpg"
                alt="Our Story Together"
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#170d18] via-transparent to-transparent lg:from-[#170d18]/90" />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default StoryInWords;