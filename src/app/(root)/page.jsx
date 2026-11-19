import Counter from "@/components/home/Counter";
import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";
import Story from "@/components/home/Story";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-[#120A16] bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_35%)]">
        <Hero />
        <Counter />
        <Story />
        <Quote />
        <Footer />
      </div>
    </>
  );
};

export default page;
