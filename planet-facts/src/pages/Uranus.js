import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetUranus,
	planetUranusInternal,
	geologyUranus,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Uranus() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.uranus.name}
				planetImg={planetUranus}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-uranus border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.uranus.overview.source}
				planetInternalImg={planetUranusInternal}
				planetGeologyImg={geologyUranus}
				planetSummary={data.uranus.overview.content}
				planetInternalSummary={data.uranus.structure.content}
				planetGeologySummary={data.uranus.geology.content}
				rotation={data.uranus.rotation}
				revTime={data.uranus.revolution}
				radius={data.uranus.radius}
				temp={data.uranus.temperature}
			/>
		</div>
	);
}
export default Uranus;
