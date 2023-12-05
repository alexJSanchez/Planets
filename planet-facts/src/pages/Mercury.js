import React from "react";
import MobileOverview from "../components/mobileOverview";
import { planetMercury, planetMercuryInternal } from "../assets/addImages";
import PlanetDisplay from "../components/PlanetDisplay";
function Mercury() {
  return (
    <div>
      <MobileOverview />
      <PlanetDisplay
        planetImg={planetMercury}
        planetInternalImg={planetMercuryInternal}
      />
    </div>
  );
}
export default Mercury;
