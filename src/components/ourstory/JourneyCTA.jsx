import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import { FaHeart, FaEnvelope } from "react-icons/fa";

const JourneyCTA = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>

        <div className="relative overflow-hidden rounded-4xl lg:rounded-[48px] border border-pink-300/30 bg-linear-to-r from-pink-500/10 via-white/5 to-pink-500/10 px-6 py-12 lg:px-10 lg:py-14">

          {/* Decorative Hearts */}
          <FaHeart className="absolute top-7 left-[8%] text-pink-300/40 text-xl animate-pulse" />
          <FaHeart className="absolute bottom-7 left-[18%] text-pink-300/30 text-2xl" />
          <FaHeart className="absolute top-10 right-[12%] text-pink-300/40 text-lg animate-pulse" />
          <FaHeart className="absolute bottom-8 right-[20%] text-pink-300/30 text-2xl" />

          <div className="relative z-10 text-center">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-text">
              Our Journey Continues...
            </h2>

            <p className="mt-5 text-white/70 text-base lg:text-lg">
              Thank you for being the most beautiful part of my life.
            </p>

            <Link
              href="/letters"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-pink-400 text-white font-semibold hover:bg-pink-300 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope />
              Read Our Love Letters
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default JourneyCTA;