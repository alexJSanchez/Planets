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
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[16.25rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[7.75rem] py-[5.4375rem] tablet:px-[17.3125rem] tablet:pt-[8.25rem] tablet:pb-[9.6875rem] desktop:px-0 "
			/>
		</div>
	);
}
export default Mars;
