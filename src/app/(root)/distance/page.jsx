import { names } from "@/api/names";
import { title } from "@/api/title";
import DistanceHero from "@/components/distance/DistanceHero";
import DistanceMap from "@/components/distance/DistanceMap";
import DistanceQuote from "@/components/distance/DistanceQuote";
import DistanceStrength from "@/components/distance/DistanceStrength";
import WhyDistance from "@/components/distance/WhyDistance";
import Footer from "@/components/ui/Footer";
import React from "react";

export const metadata = {
  title: `${title} | Distance`,
  description: `${names.firstName} & ${names.secondName} - Trusted partner for innovative solutions`,
  icons: {
    icon: "/favicon.png",
  },
};

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-[#120A16] bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_35%)] font-inter">
        <DistanceHero />
        <DistanceStrength />
        <DistanceMap />
        <WhyDistance />
        <DistanceQuote />
        <Footer />
      </div>
    </>
  );
};

export default page;
