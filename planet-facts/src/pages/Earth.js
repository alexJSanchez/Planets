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
				rotation={data.earth.rotation}
				revTime={data.earth.revolution}
				radius={data.earth.radius}
				temp={data.earth.temperature}
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[12.125rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[6.3125rem] py-[4rem] tablet:px-[15.125rem] tablet:pt-[5rem] tablet:pb-[3.9375rem] desktop:px-0 "
			/>
		</div>
	);
}
export default Earth;
