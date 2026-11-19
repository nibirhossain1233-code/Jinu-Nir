import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaHeart } from "react-icons/fa";

const StoryHero = () => {
  return (
    <section className="pt-32 lg:pt-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-300/20 bg-white/5 backdrop-blur-md text-sm font-medium text-text">
              <FaBookOpen className="text-pink-300" />
              <span>Our Story</span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[52px] leading-tight lg:leading-[1.2] font-bold font-inter text-text">
              A Beautiful Journey
              <br />
              Written by{" "}
              <span className="text-pink-300">
                Our Hearts
              </span>
              <FaHeart className="inline-block ml-2 text-pink-300 text-3xl lg:text-4xl" />
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base lg:text-lg leading-8 text-white/75">
              From the first “hello” to a love that grows stronger
              every single day, this is our story.
            </p>

            {/* Quote */}
            <div className="relative mt-8 max-w-md mx-auto lg:mx-0 px-7 py-6 rounded-2xl border border-pink-300/20 bg-white/5 backdrop-blur-md">

              <span className="absolute top-3 left-4 text-3xl text-pink-300/60">
                “
              </span>

              <p className="px-5 text-base lg:text-lg italic leading-7 text-white/85">
                Distance means so little when someone means so much.
              </p>

              <span className="absolute bottom-1 right-5 text-3xl text-pink-300/60">
                ”
              </span>

            </div>

          </div>

          {/* Right Images */}
          <div className="relative h-105 sm:h-125 lg:h-135">

            {/* Main Image */}
            <div className="absolute top-4 right-[8%] sm:right-[12%] lg:right-[15%] w-52.5 sm:w-65 lg:w-75 rotate-[-4deg] rounded-md bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)] z-20">
              <Image
                src="/images/ourstory/story-1.jpg"
                alt="Our Story"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="absolute top-32 left-[5%] sm:left-[12%] lg:left-[10%] w-50 sm:w-62.5 lg:w-72.5 rotate-[8deg] rounded-md bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)] z-30">
              <Image
                src="/images/ourstory/story-2.jpg"
                alt="Our Memories"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Third Image */}
            <div className="absolute bottom-4 right-[3%] sm:right-[8%] lg:right-[4%] w-47.5 sm:w-60 lg:w-70 rotate-[5deg] rounded-md bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)] z-10">
              <Image
                src="/images/ourstory/story-3.jpg"
                alt="Our Love"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Hearts */}
            <FaHeart className="absolute bottom-8 left-[8%] text-3xl text-pink-300 animate-pulse" />

            <FaHeart className="absolute top-20 right-[2%] text-xl text-pink-200/70 animate-pulse" />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default StoryHero;