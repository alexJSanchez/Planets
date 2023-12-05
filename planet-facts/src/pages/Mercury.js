import React from "react";
import MobileOverview from "../components/mobileOverview";
import { planetMercury } from "../assets/addImages";
import PlanetDisplay from "../components/PlanetDisplay";
function Mercury() {
  return (
    <div>
      <MobileOverview />
      <PlanetDisplay imgSource={planetMercury} />
    </div>
  );
}
export default Mercury;
