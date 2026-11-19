import React from "react";
import LetterCard from "./LetterCard";

const LettersList = ({ letters, onRead }) => {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            letter={letter}
            onRead={onRead}
          />
        ))}
      </div>

      {letters.length === 0 && (
        <div className="mx-auto max-w-xl py-20 text-center">
          <p className="text-lg font-medium text-white">
            No letters found.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            There are no letters in this category yet.
          </p>
        </div>
      )}
    </section>
  );
};

export default LettersList;