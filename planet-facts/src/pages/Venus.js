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
				rotation={data.venus.rotation}
				revTime={data.venus.revolution}
				radius={data.venus.radius}
				temp={data.venus.temperature}
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[9.375rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[6.9375rem] py-[4.625rem] tablet:px-[16.0625rem] tablet:pt-[7rem] tablet:pb-[5.9375rem] desktop:px-0 "
			/>
		</div>
	);
}
export default Venus;
