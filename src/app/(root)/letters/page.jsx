"use client";

import lettersData from "@/api/lettersData";
import LetterModal from "@/components/letters/LetterModal";
import LettersFilter from "@/components/letters/LettersFilter";
import LettersHero from "@/components/letters/LettersHero";
import LettersList from "@/components/letters/LettersList";
import LettersQuote from "@/components/letters/LettersQuote";
import Footer from "@/components/ui/Footer";
import React, { useMemo, useState } from "react";

const LettersPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Filter Letters
  const filteredLetters = useMemo(() => {
    if (activeFilter === "all") {
      return lettersData;
    }

    if (activeFilter === "Special") {
      return lettersData.filter(
        (letter) => letter.category === "Special"
      );
    }

    return lettersData.filter(
      (letter) => letter.from === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120A16] bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_35%)] font-inter">
      


        {/* Hero Section */}
        <LettersHero />

        {/* Filter Section */}
        <LettersFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Letters Collection */}
        <LettersList
          letters={filteredLetters}
          onRead={setSelectedLetter}
        />

        {/* Bottom Quote */}
        <LettersQuote />

        {/* Footer */}
        <Footer />

      {/* Letter Reading Modal */}
      <LetterModal
        letter={selectedLetter}
        onClose={() => setSelectedLetter(null)}
      />
    </main>
  );
};

export default LettersPage;