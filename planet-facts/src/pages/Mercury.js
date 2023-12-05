import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import { planetMercury, planetMercuryInternal } from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Mercury() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.mercury.name}
				planetImg={planetMercury}
				planetSource={data.mercury.overview.source}
				planetInternalImg={planetMercuryInternal}
				planetSummary={data.mercury.overview.content}
			/>
		</div>
	);
}
export default Mercury;
