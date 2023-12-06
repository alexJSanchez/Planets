import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetVenus,
	planetVenusInternal,
	geologyVenus,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Venus() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.venus.name}
				planetImg={planetVenus}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-venus border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.mercury.overview.source}
				planetInternalImg={planetVenusInternal}
				planetGeologyImg={geologyVenus}
				planetSummary={data.venus.overview.content}
				planetInternalSummary={data.venus.structure.content}
				planetGeologySummary={data.venus.geology.content}
			/>
		</div>
	);
}
export default Venus;
