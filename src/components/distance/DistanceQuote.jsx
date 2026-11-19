import React from "react";
import Container from "../ui/Container";
import {
  FaHeart,
  FaQuoteLeft,
} from "react-icons/fa";
import { names } from "@/api/names";

const DistanceQuote = () => {
  return (
    <section className="mt-14 lg:mt-20">
      <Container>

        <div className="relative overflow-hidden rounded-4xl lg:rounded-[42px] border border-pink-400/40 bg-linear-to-r from-pink-500/20 via-pink-400/10 to-pink-500/20 px-6 py-12 sm:px-10 lg:px-16">

          {/* Decorative Hearts */}
          <FaHeart className="absolute top-8 left-[10%] text-pink-300/50 text-2xl" />
          <FaHeart className="absolute bottom-7 left-[18%] text-pink-300/30 text-xl" />
          <FaHeart className="absolute top-10 right-[12%] text-pink-300/40 text-2xl" />
          <FaHeart className="absolute bottom-8 right-[20%] text-pink-300/30 text-xl" />

          <div className="relative z-10 text-center">

            <FaQuoteLeft className="mx-auto text-2xl text-pink-300/80" />

            <h2 className="mt-5 max-w-3xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-serif italic leading-tight text-white">
              Distance means so little,
              <br />
              when someone means so much.
            </h2>

            <div className="mt-7 flex items-center justify-center gap-3 text-white/80">
              <FaHeart className="text-pink-300" />

              <span className="text-base sm:text-lg">
                {names.firstName} + {names.secondName} = Forever
              </span>

              <FaHeart className="text-pink-300" />
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default DistanceQuote;