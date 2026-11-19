"use client";

import MemoriesFilter from "@/components/memories/MemoriesFilter";
import MemoriesGallery from "@/components/memories/MemoriesGallery";
import MemoriesHero from "@/components/memories/MemoriesHero";
import ViewAllMemories from "@/components/memories/ViewAllMemories";
import Footer from "@/components/ui/Footer";
import React, { useState } from "react";


const MemoriesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120A16] bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_35%)] font-inter">
      

        <MemoriesHero />

        <MemoriesFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <MemoriesGallery activeFilter={activeFilter} />

        <ViewAllMemories />

        <Footer />
    </main>
  );
};

export default MemoriesPage;