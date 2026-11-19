import { names } from "@/api/names";
import { title } from "@/api/title";
import JourneyCTA from "@/components/ourstory/JourneyCTA";
import LoveTimeline from "@/components/ourstory/LoveTimeline";
import MomentsThatMatter from "@/components/ourstory/MomentsThatMatter";
import StoryHero from "@/components/ourstory/StoryHero";
import StoryInWords from "@/components/ourstory/StoryInWords";
import Footer from "@/components/ui/Footer";
import React from "react";

export const metadata = {
  title: `${title} | Our story`,
  description: `${names.firstName} & ${names.secondName} - Trusted partner for innovative solutions`,
  icons: {
    icon: "/favicon.png",
  },
};

const page = () => {
  
  return (
    <>
      <div className="min-h-screen bg-[#120A16] bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_35%)] font-inter">
        <StoryHero />
        <LoveTimeline />
        <StoryInWords />
        <MomentsThatMatter />
        <JourneyCTA />
        <Footer />
      </div>
    </>
  );
};

export default page;
