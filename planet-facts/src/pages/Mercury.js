import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetMercury,
	planetMercuryInternal,
	geologyMercury,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Mercury() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.mercury.name}
				planetImg={planetMercury}
				planetBtnStyle="tablet:flex items-center hover:bg-carbonBlue focus:bg-fairyTaleBlue border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.mercury.overview.source}
				planetInternalImg={planetMercuryInternal}
				planetGeologyImg={geologyMercury}
				planetSummary={data.mercury.overview.content}
				planetInternalSummary={data.mercury.structure.content}
				planetGeologySummary={data.mercury.geology.content}
			/>
		</div>
	);
}
export default Mercury;
