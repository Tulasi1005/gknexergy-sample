import React from "react";
import HeroNetwork from "./HeroNetwork";
import AboutCareer from "./AboutCareer";
import PopularLearningTracks from "./PopularLearningTracks";

export default function AINetwork() {
  return (
    <div className="network-page-root">
      {/* 1. Hero Orbit Network Section */}
      <HeroNetwork />

      {/* 2. About Us / Career Success Section */}
      <AboutCareer />

      {/* 3. Popular Learning Tracks Section */}
      <PopularLearningTracks />
    </div>
  );
}