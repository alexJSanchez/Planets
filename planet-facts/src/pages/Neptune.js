import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetNeptune,
	planetNeptuneInternal,
	geologyNeptune,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Neptune() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.neptune.name}
				planetImg={planetNeptune}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-neptune border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.neptune.overview.source}
				planetInternalImg={planetNeptuneInternal}
				planetGeologyImg={geologyNeptune}
				planetSummary={data.neptune.overview.content}
				planetInternalSummary={data.neptune.structure.content}
				planetGeologySummary={data.neptune.geology.content}
				rotation={data.neptune.rotation}
				revTime={data.neptune.revolution}
				radius={data.neptune.radius}
				temp={data.neptune.temperature}
			/>
		</div>
	);
}
export default Neptune;
