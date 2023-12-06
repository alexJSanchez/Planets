import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetEarth,
	planetEarthInternal,
	geologyEarth,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Earth() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.earth.name}
				planetImg={planetEarth}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-earth border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.earth.overview.source}
				planetInternalImg={planetEarthInternal}
				planetGeologyImg={geologyEarth}
				planetSummary={data.earth.overview.content}
				planetInternalSummary={data.earth.structure.content}
				planetGeologySummary={data.earth.geology.content}
			/>
		</div>
	);
}
export default Earth;
