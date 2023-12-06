import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetJupiter,
	planetJupiterInternal,
	geologyJupiter,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Jupiter() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.jupiter.name}
				planetImg={planetJupiter}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-jupiter border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.jupiter.overview.source}
				planetInternalImg={planetJupiterInternal}
				planetGeologyImg={geologyJupiter}
				planetSummary={data.jupiter.overview.content}
				planetInternalSummary={data.jupiter.structure.content}
				planetGeologySummary={data.jupiter.geology.content}
				rotation={data.jupiter.rotation}
				revTime={data.jupiter.revolution}
				radius={data.jupiter.radius}
				temp={data.jupiter.temperature}
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[9.5625rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[4.75rem] py-[3rem] tablet:px-[12.125rem] tablet:pt-[3.375rem] tablet:pb-[2.3125rem] desktop:px-0 "
			/>
		</div>
	);
}
export default Jupiter;
