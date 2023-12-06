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
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-fairyTaleBlue border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.mercury.overview.source}
				planetInternalImg={planetMercuryInternal}
				planetGeologyImg={geologyMercury}
				planetSummary={data.mercury.overview.content}
				planetInternalSummary={data.mercury.structure.content}
				planetGeologySummary={data.mercury.geology.content}
				rotation={data.mercury.rotation}
				revTime={data.mercury.revolution}
				radius={data.mercury.radius}
				temp={data.mercury.temperature}
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[15.625rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[8.25rem] py-[6.125rem] tablet:px-[18.1875rem] tablet:pt-[9.125rem] tablet:pb-[8.125rem] desktop:px-0"
			/>
		</div>
	);
}
export default Mercury;
