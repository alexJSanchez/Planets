import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetSaturn,
	planetSaturnInternal,
	geologySaturn,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Saturn() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.saturn.name}
				planetImg={planetSaturn}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-saturn border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.saturn.overview.source}
				planetInternalImg={planetSaturnInternal}
				planetGeologyImg={geologySaturn}
				planetSummary={data.saturn.overview.content}
				planetInternalSummary={data.saturn.structure.content}
				planetGeologySummary={data.saturn.geology.content}
				rotation={data.saturn.rotation}
				revTime={data.saturn.revolution}
				radius={data.saturn.radius}
				temp={data.saturn.temperature}
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[7rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[61px] py-[1.5rem] tablet:px-[11.25rem] tablet:pt-[1.6875rem] tablet:pb-[0.375rem] desktop:px-0 "
			/>
		</div>
	);
}
export default Saturn;
