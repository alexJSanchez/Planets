import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetMars,
	planetMarsInternal,
	geologyMars,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Mars() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.mars.name}
				planetImg={planetMars}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-mars border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.mars.overview.source}
				planetInternalImg={planetMarsInternal}
				planetGeologyImg={geologyMars}
				planetSummary={data.mars.overview.content}
				planetInternalSummary={data.mars.structure.content}
				planetGeologySummary={data.mars.geology.content}
				rotation={data.mars.rotation}
				revTime={data.mars.revolution}
				radius={data.mars.radius}
				temp={data.mars.temperature}
			/>
		</div>
	);
}
export default Mars;
